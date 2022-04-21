#!/bin/sh
echo "dsf"
#mongo test1
mongo test --eval "db.restaurants.find()"
mongo test --eval "db.restaurants.find({borough:'Queens'})"
#mongo test --eval "printjson(db.getCollectionNames())"
#eval "db.hello()"
