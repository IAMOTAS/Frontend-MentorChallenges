import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = ({ onAuthSuccess }) => (
  <div>
    <h1>Login</h1>
    <AuthForm isLogin onAuthSuccess={onAuthSuccess} />
  </div>
);

export default LoginPage;