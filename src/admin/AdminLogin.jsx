import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (username === 'admin' && password === 'Aurevia2026') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f4f7f6', alignItems: 'center', justifyContent: 'center', fontFamily: '"Outfit", sans-serif' }}>
      <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#164344', margin: '0 0 10px 0', fontSize: '28px', fontFamily: '"Outfit", sans-serif' }}>Admin Login</h2>
          <p style={{ color: '#74817f', margin: 0, fontSize: '14px' }}>Please enter your credentials to continue</p>
        </div>

        {error && <div style={{ background: '#fdf2f2', color: '#b91c1c', padding: '10px', borderRadius: '6px', marginBottom: '20px', textAlign: 'center', fontSize: '14px', fontWeight: 600 }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#164344', fontSize: '14px' }}>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e1e6e4', background: '#f8faf9', fontSize: '15px', outline: 'none' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#164344', fontSize: '14px' }}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #e1e6e4', background: '#f8faf9', fontSize: '15px', outline: 'none' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ background: 'var(--teal)', color: '#fff', padding: '14px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px', fontWeight: '600', transition: 'all 0.3s ease', marginTop: '10px' }}
            onMouseOver={(e) => e.target.style.background = '#113536'}
            onMouseOut={(e) => e.target.style.background = 'var(--teal)'}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
