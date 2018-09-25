#!/usr/bin/env bash
result="$(node app.js)"
no="no"
if [ ${result} = ${no} ]; then
echo "no live at now"
else
origin="$(youtube-dl --proxy socks5://127.0.0.1:1080 -g ${result})"
echo ${origin}
fi