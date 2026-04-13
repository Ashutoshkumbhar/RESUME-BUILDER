const express = require("express");
const app = express();//app is like blueprint instance for server creation
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

//Middleware
app.use(cors());
app.use(express.json());

//connect to MongoDB
connectDB();

//import resume routes
const resumeRoutes = require('./routes/resumeRoutes');
app.use('/api/resume', resumeRoutes); 

//import user router for auth
const userRoutes = require("./routes/userRoutes");
app.use('/api/users',userRoutes);

//import ai routes for AI proxy
const aiRoutes = require("./routes/aiRoutes");
app.use('/api/ai', aiRoutes);

app.get('/',(req, res) => {
  res.send('Hello Users Welcome to our Resume Craft')
})

const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});
