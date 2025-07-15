#!/bin/bash
cd /home/ec2-user/breach-checker
nohup npm start > app.log 2>&1 &
