import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/login">
          <LoginPage onAuthSuccess={handleAuthSuccess} />
        </Route>
        <Route path="/register">
          <RegisterPage onAuthSuccess={handleAuthSuccess} />
        </Route>
        {user && (
          <Route path="/consultations">
            <ConsultationPage />
          </Route>
        )}
        <Route path="/">
          <h1>Welcome to Health Facility</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
