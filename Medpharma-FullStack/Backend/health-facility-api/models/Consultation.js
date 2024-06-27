const mongoose = require('mongoose');
const ConsultationSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  healthcareProvider: { type: String, required: true },
  consultationType: { type: String, required: true },
  medicalCondition: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Consultation', ConsultationSchema);
