const resumedata = require('./../models/resume');

//post method for resume data sending
const saveResumeToDb = async (req, res) => {
    try {
        const data = req.body
        const newresumedata = new resumedata(data);
        const response = await newresumedata.save();
        console.log('Resume data Saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//get method for resume data fetching for allresume
const loadSavedResumes= async (req, res) => {
    try {
        const data = await resumedata.find();
        console.log('Resume data Fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//get resumes for a specific user
const getResumesByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const data = await resumedata.find({ userId: userId }).sort({ updatedAt: -1 });
        console.log('User resumes fetched for:', userId);
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//for single Resume data By Id
const getResumeById = async (req, res) => {
    try {
        const ResumeId = req.params.id;
        const data = await resumedata.findById(ResumeId);

        if (!data) {
            return res.status(404).json({ error: 'Resume not found' });
        }
        console.log('Resume data Fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//update resume data
const updateResume = async (req, res) => {
    try {
        const ResumeId = req.params.id; // Extract id from url parameter
        const updatedResumeData = req.body;//updated data for person

        const response = await resumedata.findByIdAndUpdate(ResumeId, updatedResumeData, {
            new: true, //Return updated document
            runValidators: true //Run mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Resume data not found' });
        }

        console.log("Resume Data updated");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

//delete method
const deleteResume = async (req, res) => {
    try {
        const ResumeId = req.params.id;

        const response = await resumedata.findByIdAndDelete(ResumeId);

        if (!response) {
            return res.status(404).json({ error: 'Resume Data not found' });
        }
        console.log('Resume Data Deleted Successfully');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    saveResumeToDb,
    loadSavedResumes,
    getResumeById,
    getResumesByUserId,
    deleteResume,
    updateResume
};
