# Wrapper bash script that calls edx/reactifex/src/put_comments.js script
#!/bin/bash

# TRANSIFEX_RESOURCE = environment variable containing the name of resource on Transifex 
# whose translation strings instructions are to be added. This will be defined and exported in respective MFE's Makefile.
#
# TRANSIFEX_AUTH_TOKEN = environment variable containing Transifex Auth token.
node ./node_modules/@edx/reactifex/src/put_comments.js --resource=$TRANSIFEX_RESOURCE --token=$TRANSIFEX_AUTH_TOKEN
