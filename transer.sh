#!/usr/bin/env bash
while [ 1 ]
do
  result="$(node app.js)"
  no="no"
  if [ ${result} = ${no} ]; then
    echo "no live at now"
    sleep 1m
  else
  origin="$(youtube-dl -f "[height <=? 720][tbr>500]" -g ${result})"
  streamCode=""
  ffmpeg -i ${origin} -c:v copy -c:a aac -b:a 320k -ar 44100 -bufsize 1000k -strict -2 -f flv ${streamCode}
  sleep 1m
  fi
done