
//Generate/connect mongodb to server
const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB Connected");

}
module.exports = connectDB;