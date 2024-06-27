import React, { useEffect, useState } from 'react';
import { api } from '../api';

const ConsultationList = () => {
  const [consultations, setConsultations] = useState([]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const response = await api.get('/consultations');
        setConsultations(response.data);
      } catch (error) {
        console.error('Failed to fetch consultations:', error);
      }
    };
    fetchConsultations();
  }, []);
  
  const filteredConsultations = consultations.filter(
    (consultation) =>
      consultation.patient.name.includes(filter) ||
      consultation.healthcareProvider.includes(filter) ||
      consultation.consultationType.includes(filter) ||
      consultation.medicalCondition.includes(filter)
  );
  
  return (
    <div>
      <input
        type="text"
        placeholder="Filter consultations"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredConsultations.map((consultation) => (
          <li key={consultation._id}>
            <p>Patient: {consultation.patient.name}</p>
            <p>Healthcare Provider: {consultation.healthcareProvider}</p>
            <p>Consultation Type: {consultation.consultationType}</p>
            <p>Medical Condition: {consultation.medicalCondition}</p>
            <p>Date: {new Date(consultation.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultationList;
