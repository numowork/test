// let mongoose = require('mongoose');
//
// // Connecting local mongodb database named test
// let db = mongoose.connect('mongodb://127.0.0.1:27017/apple');
//
// // testing connectivity
// mongoose.connection.once('connected', function() {
// console.log("Database connected successfully");
// console.log(db.logs.find())
// });
let {Mongo}= require('mongodb')

let x = new Mongo('mongodb://127.0.0.1:27017/');
let mydb = x.getDB('apple');
console.log(mydb)
// var mydb = connect('host[:port]/mydb');
