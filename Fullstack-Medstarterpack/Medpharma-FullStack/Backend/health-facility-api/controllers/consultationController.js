const Consultation = require('../models/Consultation');

exports.createConsultation = async (req, res) => {
  const { patient, healthcareProvider, consultationType, medicalCondition } = req.body;
  try {
    const consultation = new Consultation({ patient, healthcareProvider, consultationType, medicalCondition });
    await consultation.save();
    res.status(201).send(consultation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().populate('patient');
    res.send(consultations);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getConsultationById = async (req, res) => {
  const { id } = req.params;
  try {
    const consultation = await Consultation.findById(id).populate('patient');
    if (!consultation) {
      return res.status(404).send();
    }
    res.send(consultation);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.searchConsultations = async (req, res) => {
  const { date, patientName, healthcareProvider, consultationType, medicalCondition } = req.query;
  try {
    const consultations = await Consultation.find({
      ...(date && { date }),
      ...(patientName && { patient: await User.findOne({ name: patientName }) }),
      ...(healthcareProvider && { healthcareProvider }),
      ...(consultationType && { consultationType }),
      ...(medicalCondition && { medicalCondition }),
    }).populate('patient');
    res.send(consultations);
  } catch (error) {
    res.status(500).send(error);
  }
};
