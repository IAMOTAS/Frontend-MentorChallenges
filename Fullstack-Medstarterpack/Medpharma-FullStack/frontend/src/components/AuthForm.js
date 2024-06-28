import React, { useState } from 'react';
import { api, setAuthToken } from '../api';

const AuthForm = ({ isLogin, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('officer');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isLogin
        ? await api.post('/auth/login', { email, password })
        : await api.post('/auth/register', { name, email, password, role });
      const { token, user } = response.data;
      setAuthToken(token);
      onAuthSuccess(user, token);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="officer">Officer</option>
            <option value="patient">Patient</option>
          </select>
        </>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
