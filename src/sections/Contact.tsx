import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:lamineg049@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-xl)',
        marginTop: 'var(--spacing-xl)'
      }}>
        {/* Contact Info (Left Column) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          style={{ paddingRight: 'var(--spacing-md)' }}
        >
          {/* Availability Badge */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 12px', 
            background: 'var(--bg-glass-bright)', 
            borderRadius: 'var(--radius-full)', 
            border: '1px solid var(--border-glass)', 
            marginBottom: '1.5rem' 
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Available for consulting
            </span>
          </div>

          <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-1.5px' }}>
            {t.contact.infoTitle}
          </h3>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.1rem', maxWidth: '500px' }}>
            {t.contact.infoDesc}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <a href={`mailto:${portfolioData.email}`} className="contact-item group">
              <div className="contact-icon bg-glass"><Mail size={22} className="text-primary" /></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.contact.email}</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>{portfolioData.email}</span>
              </div>
            </a>
            
            <a href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`} className="contact-item group">
              <div className="contact-icon bg-glass"><Phone size={22} className="text-primary" /></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.contact.phone}</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>{portfolioData.phone}</span>
              </div>
            </a>
            
            <div className="contact-item">
              <div className="contact-icon bg-glass"><MapPin size={22} className="text-primary" /></div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.contact.location}</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.1rem' }}>{portfolioData.location}</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
              <Github size={22} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>

        {/* Form (Right Column) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
        >
          <form className="contact-form-card glass" onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label>{t.contact.formName}</label>
                <input 
                  type="text" 
                  placeholder={t.contact.formNamePH}
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label>{t.contact.formEmail}</label>
                <input 
                  type="email" 
                  placeholder={t.contact.formEmailPH}
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label>{t.contact.formSubject}</label>
              <input 
                type="text" 
                placeholder={t.contact.formSubjectPH}
                required 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label>{t.contact.formMessage}</label>
              <textarea 
                placeholder={t.contact.formMessagePH}
                rows={5} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare size={20} />
              {t.contact.formSend}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
        }
        .contact-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-glass);
          color: var(--primary);
          transition: var(--transition-normal);
        }
        .contact-item:hover .contact-icon {
          background: var(--primary);
          color: var(--bg-deep);
          transform: scale(1.1);
        }
        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          background: var(--bg-glass);
          transition: var(--transition-normal);
        }
        .social-btn:hover {
          color: var(--bg-deep);
          background: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }
        .contact-form-card {
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid var(--border-glass);
        }
        .contact-form-card label {
          display: block;
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contact-form-card input,
        .contact-form-card textarea {
          width: 100%;
          background: var(--bg-glass-bright);
          border: 1px solid var(--border-glass);
          color: var(--text-main);
          padding: 14px 16px;
          border-radius: var(--radius-md);
          font-size: 1rem;
          transition: var(--transition-fast);
          font-family: inherit;
        }
        .contact-form-card input:focus,
        .contact-form-card textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px var(--primary-glow);
          background: transparent;
        }
        .submit-btn {
          width: 100%;
          padding: 18px;
          background: var(--primary);
          color: var(--bg-deep);
          border: none;
          border-radius: var(--radius-md);
          font-size: 1.15rem;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          transition: var(--transition-fast);
        }
        .submit-btn:hover {
          box-shadow: var(--shadow-glow);
        }
        @media (max-width: 768px) {
          .contact-form-card {
            padding: 1.5rem;
          }
          .contact-form-card > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Section>
  );
};

export default Contact;
