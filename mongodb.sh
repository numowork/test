#!/bin/sh
echo "dsf"
mongo
expect ">\r"
send "db.hello()"
