#!/usr/bin/env bash
# cp ../nginx/nginx.conf /export/servers/nginx/conf/

ln -sf /export/App/nginx/nginx.conf /export/servers/nginx/conf/nginx.conf
mkdir -p /dev/shm/nginx_temp/client_body
sudo nginx -c /export/servers/nginx/conf/nginx.conf

# ln -sf /export/App/nginx/shop_selling_cn.properties  /export/servers/nginx/conf/domains/shop_selling_cn.properties
# sudo /export/servers/nginx/sbin/nginx  -t
# sudo /export/servers/nginx/sbin/nginx  -s restart