const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL;

function connectToMongoDb() {
    mongoose.connect(MONGO_DB_CONNECTION_URL);
    
    mongoose.connection.on("connected", () => {
        console.log("Connected to Mongodb Successfully!")
    })
    mongoose.connection.on("error", (err) => {
        console.log("An Error occured!", err)
    })
}

module.exports = {connectToMongoDb}
