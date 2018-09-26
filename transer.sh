#!/usr/bin/env bash
while [ 1 ]
do
  result="$(node app.js)"
  no="no"
  if [ ${result} = ${no} ]; then
    echo "no live at now"
    sleep 1m
  else
  origin="$(youtube-dl --proxy socks5://127.0.0.1:1080 -g ${result})"
  echo ${origin}
  sleep 1m
  fi
done