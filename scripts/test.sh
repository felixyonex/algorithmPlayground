#!/bin/bash -e
if [ -f build.environment ]; then
  source build.environment
fi
account="skychute"
package=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g');
envsubst '$E_SOURCE_ID' <package.json >package.json.updated && mv package.json.updated package.json

docker build -t $account/$package:local -f test.Dockerfile .
docker run $account/$package:local
