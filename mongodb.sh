#!/bin/sh
echo "dsf"
#mongo test1
mongo test --eval "db.restaurants.find({borough:'d'})"
mongo test --eval "db.restaurants.find({borough:'Queens'}).pretty()"
#mongo test --eval "printjson(db.getCollectionNames())"
#eval "db.hello()"
