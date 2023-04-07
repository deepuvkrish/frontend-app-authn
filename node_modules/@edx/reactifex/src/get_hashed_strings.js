/*
Script to get the translation string hashes for a given resource from Transifex.

Sample usage:
  * node src/get_hashed_strings.js --resource=<resource> --token=<transifex_token>

When running on local, override outputJsonDirectory value by adding --outputJsonDirectory=bash_scripts in the command.
The default value of output directory is ./node_modules/reactifex/bash_scripts, which is the path where MFEs
will create the json file when running push translations. However, when testing reactifex on local devstack,
the default path will not be found as reactifex itself won't be installed in reactifex.
*/

const axios = require("axios");
const fs = require("fs");
const yargs = require("yargs");

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
    "outputJsonDirectory", {
      description: "Directory where the hashmap json file will be created",
      default: "./node_modules/@edx/reactifex/bash_scripts",
    },
  )
  .option(
    "resource", {
      alias: ["r", "res"],
      demandOption: true,
      description: "Resource within a Transifex project whose translation strings are to be fetched",
    },
  )
  .option(
    "token", {
      description: "Bearer token required for Authentication when making API calls to Transifex",
      demandOption: true,
    },
  );

const API_BASE_URL = "https://rest.api.transifex.com/resource_strings";
const OUTPUT_JSON_PATH = `${yargs.argv.outputJsonDirectory}/hashmap.json`;

/*
Recursively get the translation string hashes for a given resource.
*/
async function getStringHashes(url, authToken) {
  let data = [];
  try {
    const response = await axios.get(url, { headers: { Authorization: `Bearer ${authToken}` } });

    data = [...response.data.data];
    const nextLink = response.data.links.next;

    if (nextLink !== undefined && nextLink !== null) {
      const nextPageData = await getStringHashes(nextLink, authToken);
      data = data.concat(nextPageData);
    }
  } catch (err) {
    process.stderr.write(`Error during transifex string hash fetch\nMessage: ${err.message}\n`);
  }
  return data;
}

async function main() {
  const args = yargs.argv;
  const apiUrl = `${API_BASE_URL}?filter[resource]=o:${args.org}:p:${args.project}:r:${args.resource}`;

  process.stdout.write(`Fetching translation string hashes for url ${apiUrl}\n`);
  const response = await getStringHashes(apiUrl, args.token);
  return response.map((stringHash) => stringHash.attributes);
}

(async function () {
  const output = await main();
  if (output.length !== 0) {
    try {
      fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(output, null, 2));
      process.stdout.write(`Hashed strings information written to ${OUTPUT_JSON_PATH}\n`);
    } catch (error) {
      process.stderr.write(`Output write to directory ${OUTPUT_JSON_PATH} failed with error ${error.message}\n`);
    }
  } else {
    process.stdout.write("No data has been written to the output file\n");
  }
}());
