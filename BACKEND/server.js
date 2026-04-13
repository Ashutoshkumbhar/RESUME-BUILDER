const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// connect to MongoDB
connectDB();

// routes
const resumeRoutes = require('./routes/resumeRoutes');
app.use('/api/resume', resumeRoutes);

const userRoutes = require("./routes/userRoutes");
app.use('/api/users', userRoutes);

const aiRoutes = require("./routes/aiRoutes");
app.use('/api/ai', aiRoutes);

// test route
app.get('/', (req, res) => {
  res.send('Hello Users Welcome to our Resume Craft');
});

// PORT (Render handles this)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});