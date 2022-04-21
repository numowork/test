#!/bin/sh
echo "dsf"
eval "db.hello()"
mongo test --eval "printjson(db.getCollectionNames())"