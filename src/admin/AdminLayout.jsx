import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import './Admin.css';

const AdminLayout = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAdminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAdminAuth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuth');
    setIsAuthenticated(false);
  };

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      display: 'block',
      padding: '12px 20px',
      borderRadius: '8px',
      color: isActive ? '#fff' : '#a8c0bf',
      background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
      textDecoration: 'none',
      fontWeight: isActive ? '600' : '400',
      transition: 'all 0.3s ease',
      marginBottom: '8px'
    };
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);


  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="admin-layout">
      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-mobile-header">
          <h2 style={{ color: 'var(--gold)', margin: 0, fontSize: '24px', fontFamily: '"Outfit", sans-serif' }}>
            Aurevia <span style={{color: '#fff'}}>Admin</span>
          </h2>
          <button 
            className="admin-mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        <nav className={`admin-nav ${mobileMenuOpen ? 'open' : ''}`} style={{ flexDirection: 'column', flex: 1, marginTop: '30px' }}>

          <Link to="/admin/blog" style={getLinkStyle('/admin/blog')}>
             Upload Blog
          </Link>
          <Link to="/admin/gallery" style={getLinkStyle('/admin/gallery')}>
             Manage Gallery
          </Link>
          <Link to="/admin/services" style={getLinkStyle('/admin/services')}>
             Manage Services
          </Link>
          
          <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            <Link to="/" style={{...getLinkStyle('/'), color: '#c9a348'}}>
              ← Back to Live Site
            </Link>
          </div>
        </nav>
      </aside>

      {/* Admin Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1 style={{ fontSize: '28px', color: '#164344', fontFamily: '"Outfit", sans-serif', margin: 0 }}>
            Admin Portal
          </h1>
          <div className="admin-header-actions">
            <div style={{ background: '#fff', padding: '10px 20px', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', fontWeight: '600', color: '#164344' }}>
              <span style={{width: '30px', height: '30px', background: 'var(--gold)', color: '#fff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px'}}>A</span>
              Admin
            </div>
            <button onClick={handleLogout} style={{ background: 'transparent', color: '#b91c1c', border: '1px solid #f9dcdc', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease' }}>
              Logout
            </button>
          </div>
        </header>
        
        <div className="admin-content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
