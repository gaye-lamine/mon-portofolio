import React from 'react';
import { usePortfolioData } from '../data/portfolioData';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <footer className="glass" style={{ 
      marginTop: 'var(--spacing-xl)', 
      padding: 'var(--spacing-lg) 0',
      borderTop: '1px solid var(--border-glass)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 'var(--spacing-lg)'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: 'var(--spacing-sm)',
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>
            {portfolioData.name}
          </h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            {portfolioData.title}
          </p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>{t.footer.contact}</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> {portfolioData.location}</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> {portfolioData.phone}</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> {portfolioData.email}</li>
          </ul>
        </div>

        <div style={{ textAlign: 'left' }}>
          <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>{t.footer.social}</h4>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            <a href={portfolioData.github} className="social-link"><Github size={24} /></a>
            <a href={portfolioData.linkedin} className="social-link"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ 
        marginTop: 'var(--spacing-lg)', 
        paddingTop: 'var(--spacing-sm)', 
        borderTop: '1px solid var(--border-glass)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.8rem'
      }}>
        <p>© {new Date().getFullYear()} {portfolioData.name}. {t.footer.rights}</p>
      </div>

      <style>{`
        .social-link {
          background: var(--bg-glass-bright);
          padding: 8px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .social-link:hover {
          background: var(--primary);
          color: var(--bg-deep);
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
