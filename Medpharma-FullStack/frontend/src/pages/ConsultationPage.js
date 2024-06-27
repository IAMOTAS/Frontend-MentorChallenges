import React, { useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationList from '../components/ConsultationList';

const ConsultationPage = () => {
  const [consultations, setConsultations] = useState([]);
  
  const handleConsultationCreated = (newConsultation) => {
    setConsultations([...consultations, newConsultation]);
  };
  
  return (
    <div>
      <h1>Consultations</h1>
      <ConsultationForm onConsultationCreated={handleConsultationCreated} />
      <ConsultationList consultations={consultations} />
    </div>
  );
};

export default ConsultationPage;