#!/usr/bin/env bash
while [ 1 ]
do
  result="$(node app.js)"
  no="no"
  if [ ${result} = ${no} ]; then
    echo "no live at now"
    sleep 1m
  else
  origin="$(youtube-dl -g ${result})"
  echo ${origin}
  sleep 1m
  fi
done