#! /bin/bash

rm -rf ./html/
mkdir ./html/

browserify ./ui/index.js -o ./html/bundle.js
cp ./ui/index.html ./html/

echo Done at
date
