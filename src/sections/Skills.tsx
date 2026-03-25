import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title} subtitle={t.skills.subtitle}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-md)',
        marginTop: 'var(--spacing-md)'
      }}>
        {portfolioData.skills.map((skillGroup, idx) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass skill-card"
          >
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: 'var(--spacing-sm)', 
              color: 'var(--primary)',
              borderBottom: '1px solid var(--border-glass)',
              paddingBottom: '0.5rem'
            }}>
              {skillGroup.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {skillGroup.items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skill-card {
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          text-align: left;
          height: 100%;
          transition: var(--transition-fast);
        }
        .skill-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-5px);
        }
        .skill-badge {
          background: var(--bg-glass-bright);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          color: var(--text-dim);
          border: 1px solid var(--border-glass);
          transition: var(--transition-fast);
        }
        .skill-badge:hover {
          background: var(--primary);
          color: var(--bg-deep);
          border-color: var(--primary);
          transform: scale(1.05);
        }
      `}</style>
    </Section>
  );
};

export default Skills;
