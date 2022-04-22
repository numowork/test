#!/bin/sh
echo "dsf"
mongoimport --db test5 --collection logs --file /srv/theplatform/app.log
mongo test5 --eval "printjson(db.getCollectionNames())"