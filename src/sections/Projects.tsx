import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { Github } from '../components/Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-md)',
        marginTop: 'var(--spacing-md)'
      }}>
        {portfolioData.projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass project-card"
          >
            <div className="project-image-placeholder">
              <span>{project.title.charAt(0)}</span>
              <div className="project-overlay">
                <div style={{ display: 'flex', gap: '15px' }}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-icon-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-icon-link">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div style={{ padding: 'var(--spacing-md)', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-main)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1rem', height: '3.6em', overflow: 'hidden' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ 
                    fontSize: '0.7rem', 
                    padding: '2px 8px', 
                    background: 'rgba(14, 165, 233, 0.1)', 
                    color: 'var(--primary)', 
                    borderRadius: '4px',
                    border: '1px solid var(--border-glass)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .project-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition-normal);
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
        }
        .project-image-placeholder {
          height: 180px;
          background: linear-gradient(135deg, var(--bg-main), var(--bg-deep));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--primary);
          position: relative;
          overflow: hidden;
        }
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-normal);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        .project-icon-link {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: var(--bg-deep);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .project-icon-link:hover {
          transform: scale(1.1);
          opacity: 0.9;
        }
      `}</style>
    </Section>
  );
};

export default Projects;
