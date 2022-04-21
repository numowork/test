#!/bin/sh
echo "dsf"
mongo
mongo test --eval "db.hello()"
#mongo test --eval "printjson(db.getCollectionNames())"
#eval "db.hello()"
