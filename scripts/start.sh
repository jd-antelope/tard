#!/bin/bash

#source /etc/profile

echo 'start'

yarn vite-dev; yarn taro-dev

sleep 5
nodeport=` netstat -lntp|grep "7000"|awk '{print $4}'|awk -F":" '{print $4}'`
echo $nodeport

if [ "$nodeport" ];then
  echo -e "\033[32m[ node process start success on dev env !  ]\033[0m"
fi