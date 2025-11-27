import React from 'react';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-card">
      <div className="card-header">
        <p className="eyebrow">Login</p>
        <h3>Enter your workspace</h3>
        <p className="muted small">Use the email you signed up with to continue.</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@studio.com" required />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" name="password" placeholder="••••••••" required />
        </label>
        <div className="form-actions">
          <label className="checkbox">
            <input type="checkbox" name="remember" defaultChecked />
            <span>Keep me signed in</span>
          </label>
          <a className="link" href="#reset">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="primary-button">
          Sign in securely
        </button>
        <button type="button" className="ghost-button">
          Continue with SSO
        </button>
      </form>
      <div className="card-footer">
        <p className="muted small">
          New here? <a className="link" href="#create">Create a workspace</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
