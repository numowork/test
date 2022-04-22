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
const {MongoClient} = require('mongodb')
const Console = require("console");
//
// let x = new Mongo('mongodb://127.0.0.1:27017/');
// let mydb = x.getDB('apple');
// console.log(mydb)
// var mydb = connect('host[:port]/mydb');

async function main() {
    const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1'

    const client = new MongoClient(url)

    try {
        console.log("working")
        await client.connect()
        // client.db
        await listDatabases(client)
    } catch (e) {
        console.log(e)
    } finally {
        await client.close()
    }


}

main().catch(console.error)

async function listDatabases(client) {
    const databasesClient = await client.db('apple').collectionNames();

    // console.log("Databases:", databasesClient)
    databasesClient.databases.forEach(db => {
        console.log(`--${db.name}`)
    })
}

