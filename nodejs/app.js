const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

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
//     const url = 'mongodb://127.0.0.1:27017/'
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
//     const databasesClient = await client.db('apple').collection("logs");
//
//     console.log("Databases:", databasesClient)
//     console.log("Databases:", databasesClient.Databases.)
//     // databasesClient.db.forEach(db => {
//     //     console.log(`--${db}`)
//     // })
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

// const mongoose = require('mongoose');

// const MONGO_USERNAME = 'numowork';
// const MONGO_PASSWORD = '12345';
// const MONGO_HOSTNAME = '127.0.0.1';
// const MONGO_PORT = '27017';
// const MONGO_DB = 'apple';

// async function start(){
//     const url = await `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
//     console.log(url)
//     const dd = await mongoose.connect(url, {useNewUrlParser: true});
//     // console.log(dd.db.collections)
//     console.log(dd.db.collections())
//     console.log(dd.client)
// }
// start()


// Requiring module
// const MongoClient = require("mongodb");

// Connection URL
// const url = 'mongodb://localhost:27017/';
//
// // Database name
// const databasename = "apple";
//
// MongoClient.connect(url).then((client) => {
//
//     // Use admin request
//     const connect = client.db().admin();
//     console.dir(connect)
//     connect.listDatabases((err,db) => {
//         // Printing the databases
//         if(!err) console.log(db.databases[0].name);
//     })
// }).catch((err) => {
//
//     // Printing the error message
//     console.log(err.Message);
// })


const {MongoClient} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = await `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/}?authSource=admin`;
const url = 'mongodb://localhost:27017';


// Database Name
const dbName = 'apple';

async function main() {
    MongoClient.connect(url, (err, db) => {

        // console.log(db(dbName).collection('logs'))
        console.log(db.db(dbName).collection('logs').find({}).toArray())
    })
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('logs');
    // const findResult = await collection.find({status: 200}).toArray();
    // console.log('Found documents =>', findResult);

}

main()
    .then(console.log)
    .catch(console.error)
