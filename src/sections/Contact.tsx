import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-xl)',
        marginTop: 'var(--spacing-md)'
      }}>
        {/* Contact Info */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>{t.contact.infoTitle}</h3>
          <p style={{ color: 'var(--text-dim)', marginBottom: 'var(--spacing-lg)' }}>
            {t.contact.infoDesc}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <p className="label">{t.contact.email}</p>
                <a href={`mailto:${portfolioData.email}`} className="value">{portfolioData.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <p className="label">{t.contact.phone}</p>
                <a href={`tel:${portfolioData.phone}`} className="value">{portfolioData.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <p className="label">{t.contact.location}</p>
                <p className="value">{portfolioData.location}</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-sm)' }}>
            <a href={portfolioData.github} className="glass social-btn"><Github size={24} /></a>
            <a href={portfolioData.linkedin} className="glass social-btn"><Linkedin size={24} /></a>
          </div>
        </div>

        {/* Quick Contact Form Placeholder */}
        <div className="glass contact-form-card">
          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
              <div className="form-group">
                <label>{t.contact.formName}</label>
                <input type="text" placeholder={t.contact.formNamePH} className="form-input" />
              </div>
              <div className="form-group">
                <label>{t.contact.formEmail}</label>
                <input type="email" placeholder={t.contact.formEmailPH} className="form-input" />
              </div>
            </div>
            <div className="form-group">
              <label>{t.contact.formSubject}</label>
              <input type="text" placeholder={t.contact.formSubjectPH} className="form-input" />
            </div>
            <div className="form-group">
              <label>{t.contact.formMessage}</label>
              <textarea placeholder={t.contact.formMessagePH} className="form-input" rows={5}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: 'var(--spacing-sm)', justifyContent: 'center' }}>
              {t.contact.formSend} <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .contact-icon {
          width: 44px;
          height: 44px;
          background: var(--bg-glass-bright);
          color: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-glass);
        }
        .label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }
        .value {
          font-weight: 600;
          color: var(--text-main);
          font-size: 1rem;
        }
        .social-btn {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          color: var(--text-dim);
          transition: var(--transition-fast);
        }
        .social-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }
        .contact-form-card {
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
          text-align: left;
        }
        .form-group label {
          font-size: 0.85rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        .form-input {
          background: var(--bg-deep);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          padding: 12px;
          color: var(--text-main);
          outline: none;
          transition: var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px var(--primary-glow);
        }
        @media (max-width: 768px) {
          .contact-form-card { padding: var(--spacing-sm); }
        }
      `}</style>
    </Section>
  );
};

export default Contact;
