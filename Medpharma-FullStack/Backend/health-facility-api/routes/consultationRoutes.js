const express = require('express');
const {
  createConsultation,
  getConsultations,
  getConsultationById,
  searchConsultations,
} = require('../controllers/consultationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/consultations', authMiddleware, createConsultation);
router.get('/consultations', authMiddleware, getConsultations);
router.get('/consultations/:id', authMiddleware, getConsultationById);
router.get('/search', authMiddleware, searchConsultations);

module.exports = router;
