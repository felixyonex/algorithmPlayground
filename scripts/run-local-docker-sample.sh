#!/bin/bash -e
## fill in your environment details in place of asterisks
package=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g');
docker build -t skychute/$package:local .
docker run -it \
-e 'ENV_VAR=***' \
skychute/changeit:local