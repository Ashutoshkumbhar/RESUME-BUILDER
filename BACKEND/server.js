const express = require("express");
const app = express();//app is like blueprint instance for server creation
const db = require("./config/db");//add always to start


app.get('/',(req, res) => {
  res.send('Hello Users Welcome to our Resume Craft')
})

const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
