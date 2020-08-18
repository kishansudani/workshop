#! /bin/bash
set -o pipefail

rm -rf ./html/
mkdir ./html/

browserify ./ui/index.js | tr -dc '\0-\177' > ./html/bundle.js
cp ./ui/index.html ./html/

echo Done at
date
