import React, { useState } from 'react';
import { api } from '../api';

const ConsultationForm = ({ onConsultationCreated }) => {
  const [patient, setPatient] = useState('');
  const [healthcareProvider, setHealthcareProvider] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/consultations', {
        patient,
        healthcareProvider,
        consultationType,
        medicalCondition,
      });
      onConsultationCreated(response.data);
    } catch (error) {
      console.error('Failed to create consultation:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient ID"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Healthcare Provider"
        value={healthcareProvider}
        onChange={(e) => setHealthcareProvider(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Consultation Type"
        value={consultationType}
        onChange={(e) => setConsultationType(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Medical Condition"
        value={medicalCondition}
        onChange={(e) => setMedicalCondition(e.target.value)}
        required
      />
      <button type="submit">Create Consultation</button>
    </form>
  );
};

export default ConsultationForm;
