/*
Script to add translation strings' instructions for a given resource in Transifex with API v3.

Sample usage:
  * node src/put_comments.js --resource=<resource> --token=<transifex_token>

This script reads the instructions from an input file, hashed_data.txt. The file will be present
in the directory indicated by inputFileDirectory. The file which contains the translation strings instructions,
formatted as <hash>|<instructions>.

When running the script on local in reactifex root directory, override inputFileDirectory value
by adding --inputFileDirectory=bash_scripts in the command. The default value of input directory
is ./node_modules/reactifex/bash_scripts. However, when testing reactifex on local devstack,
the default path will not be found as reactifex itself won't be installed in reactifex.
*/
const axios = require("axios");
const fs = require("fs");
const yargs = require("yargs");

const API_BASE_URL = "https://rest.api.transifex.com/resource_strings";

// Configure command line arguments with yargs
yargs.option(
  "organization", {
    alias: ["o", "org"],
    default: "open-edx",
    description: "Organization associated with Transifex account",
  },
).option(
  "project", {
    alias: ["p", "proj"],
    default: "edx-platform",
    description: "Project within a Transifex organization",
  },
)
  .option(
    "resource", {
      alias: ["r", "res"],
      demandOption: true,
      description: "Resource within a Transifex project whose translation strings instructions will be added",
    },
  )
  .option(
    "inputFileDirectory", {
      description: "Directory where the input file hashed_data.txt will be read from",
      default: "./node_modules/@edx/reactifex/bash_scripts",
    },
  )
  .option(
    "token", {
      description: "Bearer token required for Authentication when making API calls to Transifex",
      demandOption: true,
    },
  );

/*
Given the input file buffer, return a list of strings, each string in format <resource_hash>|<instructions>
*/
function getFormattedInputFileData(inputBuffer) {
  return inputBuffer.toString().split("\n").filter((string) => (string !== "" && string.indexOf("|") !== -1));
}

/*
Add translation string instructions for a given translation string in a resource.
*/
async function addStringInstructions(stringId, instructions, authToken) {
  const resourceUrl = `${API_BASE_URL}/${stringId}`;
  const payload = {
    data: {
      id: stringId,
      type: "resource_strings",
      attributes: {
        instructions,
      },
    },
  };

  try {
    process.stdout.write(`Attempting instructions addition for string Id ${stringId}\n`);
    await axios.patch(
      resourceUrl, payload, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/vnd.api+json",
        },
      },
    );
    process.stdout.write(`Instruction addition for string id ${stringId} has completed successfully\n`);
  } catch (err) {
    process.stderr.write(`Error adding instructions for string ${stringId} \nMessage: ${err.message}\n`);
    if (err.response !== undefined) {
      process.stderr.write(`Response Data: ${JSON.stringify(err.response.data)}\n`);
    }
  }
}

/*
Wrapper method to incrementally call addStringInstructions for the provided translation strings.
*/
async function addInstructions(translationStringsData, args) {
  if (translationStringsData.length !== 0) {
    const resourceIdBaseString = `o:${args.org}:p:${args.project}:r:${args.resource}`;

    for (let counter = 0; counter < translationStringsData.length; counter += 1) {
      /*
      Convert string <hash>|<instructions> into list
      Get hash from the first element
      Join the remaining list with | as separator to get instructions. This join is done
      so that if the instruction string itself contained |, the splitted data length will
      be more than 2 and there might be chance of incomplete instruction being added to Transifex.
      */
      const value = translationStringsData[counter];
      const valueList = value.split("|");
      const hash = valueList[0];
      const instructions = valueList.slice(1).join("|");
      const stringId = `${resourceIdBaseString}:s:${hash}`;
      process.stdout.write(`Hash: ${stringId}, Instructions: ${instructions}\n`);
      // eslint-disable-next-line no-await-in-loop
      await addStringInstructions(stringId, instructions, args.token);
      process.stdout.write(`Instruction addition for Hash ${stringId} completed\n`);
    }
  }
}

(async function () {
  const args = yargs.argv;
  const inputFilePath = `${args.inputFileDirectory}/hashed_data.txt`;
  let inputData = [];
  try {
    const inputDataBuffer = fs.readFileSync(inputFilePath, { flag: "r" });
    inputData = getFormattedInputFileData(inputDataBuffer);
  } catch (error) {
    process.stderr.write(`Encountered an error while attempting to open ${inputFilePath}\nError:${error.message}\n`);
  }
  await addInstructions(inputData, args);
}());
