
//Generate/connect mongodb to server
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
}

const db = mongoose.connection;

//define event listeners for connect not connect
db.on('connected',()=>{
    console.log("Connected to mongodb server");
});
db.on('error',()=>{
    console.log("mongodb Connection error");
});
db.on('disconnected',()=>{
    console.log("disConnected from mongodb server");
});

module.exports = connectDB;
