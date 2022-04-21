#!/bin/sh
echo "dsf"
mongo test --eval "printjson(db.getCollectionNames())"
eval "db.hello()"
