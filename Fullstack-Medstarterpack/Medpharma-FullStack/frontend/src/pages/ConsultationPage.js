import React, { useState } from 'react';
import ConsultationForm from '../components/ConsultationForm';
import ConsultationList from '../components/ConsultationList';

const ConsultationPage = () => {
  const [consultations, setConsultations] = useState([]);

  const handleConsultationCreated = (newConsultation) => {
    setConsultations((prevConsultations) => [...prevConsultations, newConsultation]);
  };

  return (
    <div>
      <h2>Consultations</h2>
      <ConsultationForm onConsultationCreated={handleConsultationCreated} />
      <ConsultationList consultations={consultations} />
    </div>
  );
};

export default ConsultationPage;
