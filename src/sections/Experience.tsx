import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title} subtitle={t.experience.subtitle}>
      <div style={{ position: 'relative', marginTop: 'var(--spacing-lg)' }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--primary), var(--secondary))',
          opacity: 0.3
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ position: 'relative', paddingLeft: '60px', textAlign: 'left' }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '0',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: idx === 0 ? 'var(--primary)' : 'var(--bg-main)',
                border: '3px solid var(--primary)',
                boxShadow: idx === 0 ? 'var(--shadow-glow)' : 'none',
                zIndex: 1
              }} />

              <div className="glass exp-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '4px' }}>{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                      <Briefcase size={16} /> {exp.company}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                      <Calendar size={14} /> {exp.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul style={{ marginTop: 'var(--spacing-sm)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--primary)', marginTop: '4px' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.projects && (
                  <div style={{ marginTop: 'var(--spacing-sm)', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.projects.map(p => (
                      <span key={p} style={{ 
                        fontSize: '0.75rem', 
                        padding: '2px 8px', 
                        background: 'var(--bg-glass-bright)', 
                        borderRadius: '4px',
                        color: 'var(--secondary)',
                        border: '1px solid var(--secondary-glow)'
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-card {
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          transition: var(--transition-fast);
        }
        .exp-card:hover {
          border-color: var(--primary);
          background: var(--bg-glass);
          transform: translateX(5px);
        }
        @media (max-width: 768px) {
          .exp-card { padding: var(--spacing-sm); }
        }
      `}</style>
    </Section>
  );
};

export default Experience;
