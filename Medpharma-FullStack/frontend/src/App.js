import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ConsultationPage from './pages/ConsultationPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleAuthSuccess = (user, token) => {
    setUser(user);
    setToken(token);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onAuthSuccess={handleAuthSuccess} />} />
        <Route path="/register" element={<RegisterPage onAuthSuccess={handleAuthSuccess} />} />
        {user && (
          <Route path="/consultations" element={<ConsultationPage />} />
        )}
        <Route path="/" element={<h1>Welcome to Health Facility</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
