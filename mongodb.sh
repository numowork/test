#!/bin/sh
echo "dsf"
<<<<<<< HEAD
mongoimport --db test5 --collection logs --file /srv/theplatform/app.log
mongo test5 --eval "printjson(db.getCollectionNames())"
=======
#mongo test1
#mongo test --eval "db.restaurants.find({borough:'Queens'}, {${unset}: grades})"
mongo test --eval "db.restaurants.find({borough:'Queens'}).pretty()"
mongo  --eval "use test4"
mongo  --eval "db.test3.insert({
                                                                         "date" : ISODate("2014-01-16T00:00:00Z"),
                                                                         "grade" : "A",
                                                                         "score" : 4
                                                                 },
                                                                 {
                                                                         "date" : ISODate("2013-06-20T00:00:00Z"),
                                                                         "grade" : "A",
                                                                         "score" : 11
                                                                 },
                                                                 {
                                                                         "date" : ISODate("2012-10-04T00:00:00Z"),
                                                                         "grade" : "A",
                                                                         "score" : 13
                                                                 },
                                                                 {
                                                                         "date" : ISODate("2012-01-10T00:00:00Z"),
                                                                         "grade" : "B",
                                                                         "score" : 20
                                                                 },
                                                                 {
                                                                         "date" : ISODate("2011-06-23T00:00:00Z"),
                                                                         "grade" : "B",
                                                                         "score" : 21
                                                                 }
               )"
#mongo test --eval "printjson(db.getCollectionNames())"
#eval "db.hello()"
>>>>>>> 0e9a7af01a3e6039b8108d174814e3d98bc02281
