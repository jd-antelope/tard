#!/bin/bash

#source /etc/profile

echo 'build'

yarn build:prod
cd packages/taro-demo
APP_ENV=prod yarn build:h5
cd ../../
mkdir dist/h5
cp -r packages/taro-demo/dist/* ./dist/h5