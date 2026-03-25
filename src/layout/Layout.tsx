import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ paddingTop: '80px' }}
      >
        {children}
      </motion.main>
      <Footer />
      
      {/* Decorative background elements */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        zIndex: -1,
        filter: 'blur(60px)',
        opacity: 0.5
      }} />
      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)',
        zIndex: -1,
        filter: 'blur(60px)',
        opacity: 0.3
      }} />
    </>
  );
};

export default Layout;
