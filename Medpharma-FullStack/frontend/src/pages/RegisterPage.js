import React from 'react';
import AuthForm from '../components/AuthForm';

const RegisterPage = ({ onAuthSuccess }) => (
  <div>
    <h1>Register</h1>
    <AuthForm onAuthSuccess={onAuthSuccess} />
  </div>
);

export default RegisterPage;