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
  streamCode="rtmp://js.live-send.acg.tv/live-js/?streamname=live_8166678_8160745&key=a2d6fb5fd8545c890e978e2aa30e7a52?streamname=live_8166678_8160745&key=a2d6fb5fd8545c890e978e2aa30e7a52"
  ffmpeg -i ${origin} -c:v copy -c:a aac -b:a 320k -ar 44100 -strict -2 -f flv ${streamCode}
  sleep 1m
  fi
done