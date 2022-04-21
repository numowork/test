#!/bin/sh
echo "dsf"
eval "JSON.stringfy(db.hello())"
mongo test --eval "printjson(db.getCollectionNames())"