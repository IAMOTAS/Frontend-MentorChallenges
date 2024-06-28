import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = ({ onAuthSuccess }) => {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm isLogin={true} onAuthSuccess={onAuthSuccess} />
    </div>
  );
};

export default LoginPage;
