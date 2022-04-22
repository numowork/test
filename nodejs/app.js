let mongoose = require('mongoose');

// Connecting local mongodb database named test
let db = mongoose.connect('mongodb://127.0.0.1:27017/apple');

// testing connectivity
mongoose.connection.once('connected', function() {
console.log("Database connected successfully");
console.log(db.logs.find())
});