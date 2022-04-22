const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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
// const {MongoClient} = require('mongodb')
//
// let x = new Mongo('mongodb://127.0.0.1:27017/');
// let mydb = x.getDB('apple');
// console.log(mydb)
// var mydb = connect('host[:port]/mydb');

// async function main() {
//     const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1'
//
//     const client = new MongoClient(url)
//
//     try {
//         console.log("working")
//         await client.connect()
//         // client.db
//         await listDatabases(client)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         await client.close()
//     }
//
//
// }
//
// main().catch(console.error)
//
// async function listDatabases(client) {
//     const databasesClient = await client.db('apple').collectionNames();
//
//     // console.log("Databases:", databasesClient)
//     databasesClient.databases.forEach(db => {
//         console.log(`--${db.name}`)
//     })
// }

// let MongoClient = require('mongodb').MongoClient
//     , format = require('util').format;
// MongoClient.connect('mongodb://127.0.0.1:27017/', function (err, db) {
//     if (err) throw err;
//     console.log(db)
//     console.log(JSON.parse(db))
//     // let collection = db.collection('logs');
//     // collection.insert({a: 2}, function (err, docs) {
//     //     collection.count(function (err, count) {
//     //         console.log(format("count = %s", count));
//     //         db.close();
//     //     });
//     // });
// });

const mongoose = require('mongoose');

const MONGO_USERNAME = 'numowork';
const MONGO_PASSWORD = '12345';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'apple';

async function start(){
    const url = await `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    console.log(url)
    const dd = await mongoose.connect(url, {useNewUrlParser: true});
    // console.log(dd.db.collections)
    console.log(dd.db.collections())
    console.log(dd.client)
}
start()
