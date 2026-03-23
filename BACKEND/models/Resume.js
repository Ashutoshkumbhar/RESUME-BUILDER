const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

  fullname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  linkedinUrl: {
    type: String,
    default: ""
  },

  gitUrl: {
    type: String,
    default: ""
  },

  profsummary: {
    type: String,
    default: "Motivated and enthusiastic graduate with a strong academic background and a passion for learning new skills."
  },

  skills: [
    {
      type: String
    }
  ],

  education: [
    {
      degree: {
        type: String
      },
      college: {
        type: String
      },
      year: {
        type: String
      }
    }
  ],

  projects: [
    {
      title: {
        type: String
      },
      description: {
        type: String
      },
      tech: {
        type: String
      }
    }
  ],

  experience: [
    {
      company: {
        type: String
      },
      role: {
        type: String
      },
      duration: {
        type: String
      }
    }
  ],
  achievements: [
    {
      type: String
    }
  ],
  languages:[
    {
      type : String
    }
  ],
  certifications:[
    {
      type : String
    }
  ]

}, { timestamps: true });

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
