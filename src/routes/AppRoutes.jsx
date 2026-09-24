import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public Layout & Pages
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Specialities from '../pages/Specialities';
import WhyChooseUs from '../pages/WhyChooseUs';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Contact from '../pages/Contact';

// Admin Layout & Pages
import AdminLayout from '../admin/AdminLayout';

import AdminBlog from '../admin/AdminBlog';
import AdminGallery from '../admin/AdminGallery';
import AdminServices from '../admin/AdminServices';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="specialities" element={<Specialities />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="blog" replace />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="services" element={<AdminServices />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
