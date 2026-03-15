const express = require('express');
const router = express.Router();

const {
    createResume,
    getAllResumes,
    getResumeById,
    updateResume,
    deleteResume
} = require('../controllers/resumeControllers');

router.post('/',createResume);
router.get('/',getAllResumes);
router.get('/:id',getResumeById);
router.put('/:id',updateResume);
router.delete('/:id',deleteResume);

module.exports = router;
