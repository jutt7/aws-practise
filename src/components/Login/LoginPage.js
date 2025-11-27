import React from 'react';
import './Login.css';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginShowcase from './LoginShowcase';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="login-shell">
        <LoginHeader />
        <div className="login-grid">
          <LoginShowcase />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
