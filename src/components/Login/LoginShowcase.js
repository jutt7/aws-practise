import React from 'react';

const highlights = [
  {
    title: 'Live dashboards by Awais',
    copy: 'Pulse across every project, refreshed in real time.',
    accent: 'sync',
  },
  {
    title: 'Secure by design',
    copy: 'Device trust, session vaulting, and guided SSO.',
    accent: 'lock',
  },
];

const statBlocks = [
  { value: '2.1K', label: 'Active teams' },
  { value: '98%', label: 'On-time delivery' },
  { value: '24/7', label: 'Human support' },
];

const LoginShowcase = () => {
  return (
    <div className="login-showcase">
      <div className="showcase-card">
        <div className="pill">Experience-first</div>
        <h2>Everything you need to land the next launch.</h2>
        <p className="muted">
          Organize approvals, automate notifications, and keep every teammate
          aligned without the noise.
        </p>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <div className="highlight" key={item.title}>
              <div className={`icon ${item.accent}`} aria-hidden />
              <div>
                <p className="highlight-title">{item.title}</p>
                <p className="muted small">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="stat-row">
          {statBlocks.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginShowcase;
