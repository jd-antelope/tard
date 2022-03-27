#!/bin/bash

#source /etc/profile

echo 'build'

yarn build:prod
cd packages/taro-demo
yarn build:h5
cd ../../
mkdir dist/h5
cp -r packages/taro-demo/dist/* ./dist/h5