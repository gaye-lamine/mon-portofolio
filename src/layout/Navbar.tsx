import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { usePortfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const portfolioData = usePortfolioData();
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`glass`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      height: isScrolled ? '60px' : '80px',
      display: 'flex',
      alignItems: 'center',
      transition: 'var(--transition-normal)',
      borderBottom: isScrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
      background: isScrolled ? 'var(--bg-glass)' : 'transparent'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px',
            textDecoration: 'none'
          }}
        >
          {portfolioData.name.split(' ')[0]}
        </motion.a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <div className="desktop-links" style={{ display: 'none' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                style={{ 
                  marginRight: 'var(--spacing-md)', 
                  fontSize: '0.9rem', 
                  fontWeight: 500,
                  color: 'var(--text-dim)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)', alignItems: 'center' }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? "Passer en mode clair" : "Passer en mode sombre"}
              style={{
                background: 'var(--bg-glass-bright)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-main)',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              title={language === 'fr' ? "Switch to English" : "Passer en Français"}
              style={{
                background: 'var(--bg-glass-bright)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-main)',
                padding: '4px 8px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '40px'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
              <Github size={20} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-dim)' }}>
              <Linkedin size={20} />
            </a>
            <button 
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--text-main)', display: 'block' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              padding: 'var(--spacing-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ padding: '0.5rem 0', fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-links { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
