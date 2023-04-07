# Wrapper bash script that calls edx/reactifex/src/get_hashed_strings.js script
#!/bin/bash

# TRANSIFEX_RESOURCE = environment variable containing the name of resource on Transifex whose
# string hashes should be fetched. This will be defined and exported in respective MFE's Makefile
#
# TRANSIFEX_AUTH_TOKEN = environment variable containing Transifex Auth token.
node ./node_modules/@edx/reactifex/src/get_hashed_strings.js --resource=$TRANSIFEX_RESOURCE --token=$TRANSIFEX_AUTH_TOKEN
