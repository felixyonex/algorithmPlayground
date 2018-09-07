#!/bin/bash -e
if [ -f build.environment ]; then
  source build.environment
fi
printenv
envsubst '$E_SOURCE_ID' <package.json >package.json.updated && mv package.json.updated package.json
tag=${BUILD_TAG}
account="skychute"
package=$(grep -m1 name package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g');
repo="578348324857.dkr.ecr.ap-southeast-2.amazonaws.com/$account/$package"

# If the tag is master, get the version and set as tag
if [ $tag == "master" ]
then
  releaseTag=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g')
  releaseTag="release-$releaseTag"
  # Remove whitespace
  releaseTag=$(echo "${releaseTag}" | tr -d '[[:space:]]')
else
  releaseTag=$tag
fi
echo Building $account/$package:$tag / $releaseTag
docker build -t $account/$package:$tag .
docker tag $account/$package:$tag $repo:$tag
docker tag $account/$package:$tag $repo:$releaseTag
docker push $repo:$tag
