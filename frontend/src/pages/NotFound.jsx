import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{ color: 'var(--color-primary-green)', display: 'inline-flex', padding: '20px', background: 'rgba(18,60,42,0.1)', borderRadius: '50%', marginBottom: '20px' }}>
          <Compass size={60} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--color-primary-green)', marginBottom: '12px' }}>
          404 - Page Not Found
        </h1>
        <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '30px' }}>
          Oops! The travel route you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-yellow btn-lg">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
