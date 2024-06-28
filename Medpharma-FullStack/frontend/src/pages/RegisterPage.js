import React from 'react';
import AuthForm from '../components/AuthForm';

const RegisterPage = ({ onAuthSuccess }) => {
  return (
    <div>
      <h2>Register</h2>
      <AuthForm isLogin={false} onAuthSuccess={onAuthSuccess} />
    </div>
  );
};

export default RegisterPage;
