import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Education: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="education" title={t.education.title} subtitle={t.education.subtitle}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginTop: 'var(--spacing-md)'
      }}>
        {/* Education Part */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', marginBottom: 'var(--spacing-md)', color: 'var(--primary)' }}>
            <GraduationCap size={24} /> {t.education.edu}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            {portfolioData.education.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass edu-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{edu.period}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '4px' }}>{edu.school}</p>
                {edu.description && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Part */}
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem', marginBottom: 'var(--spacing-md)', color: 'var(--secondary)' }}>
            <Award size={24} /> {t.education.cert}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            {portfolioData.certifications.map((cert, idx) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass edu-card"
                style={{ borderLeft: '3px solid var(--secondary)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{cert.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600 }}>{cert.date}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {cert.issueId}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .edu-card {
          padding: 15px;
          border-radius: var(--radius-sm);
          text-align: left;
          transition: var(--transition-fast);
        }
        .edu-card:hover {
          background: var(--bg-glass);
          border-color: var(--primary);
          transform: translateY(-2px);
        }
      `}</style>
    </Section>
  );
};

export default Education;
