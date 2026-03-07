const express = require("express");
const app = express();//app is like blueprint instance for server creation
const db = require("./config/db");//add always to start
const connectDB = require("./config/db");

require("dotenv").config();

const bodyparser = require("body-parser");
app.use(bodyparser.json());//stores in req.body

//connect to MongoDB
connectDB();
app.get('/',(req, res) => {
  res.send('Hello Users Welcome to our Resume Craft')
})

const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
