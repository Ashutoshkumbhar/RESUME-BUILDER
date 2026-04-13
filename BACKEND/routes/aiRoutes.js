const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiControllers");

// Post route for AI chat proxy
router.post("/chat", aiController.getAIResponse);

module.exports = router;
