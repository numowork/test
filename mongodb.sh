#!/bin/sh
echo "dsf"
mongo test --eval "printjson(db.getCollectionNames())"