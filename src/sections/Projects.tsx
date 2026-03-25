import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { ExternalLink, ArrowRight, Zap, Target, Activity, CheckCircle } from 'lucide-react';
import { Github } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-xl)',
        marginTop: 'var(--spacing-lg)'
      }}>
        {portfolioData.projects.map((project) => (
          <div 
            key={project.id}
            className="case-study-card glass"
            style={{
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              borderRadius: '24px',
              border: '1px solid var(--border-glass)',
              transition: 'var(--transition-normal)'
            }}
          >
            {/* Header: Title and Links */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-glass)'
            }}>
              <div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '600px' }}>
                  {project.description}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="action-btn" title={t.projects.githubLink}>
                    <Github size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="action-btn" title={t.projects.viewLink}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Body: 2 Columns on Desktop */}
            <div className="case-study-grid">
              
              {/* Left Column: Problem & Solution */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {project.problem && (
                  <div>
                    <h4 className="section-heading">
                      <Target size={20} className="heading-icon" /> {t.projects.problem}
                    </h4>
                    <p style={{ color: 'var(--text-dim)', lineHeight: 1.7 }}>{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h4 className="section-heading">
                      <Zap size={20} className="heading-icon" /> {t.projects.solution}
                    </h4>
                    <p style={{ color: 'var(--text-main)', lineHeight: 1.7, fontWeight: 500 }}>{project.solution}</p>
                  </div>
                )}
              </div>

              {/* Right Column: Architecture & Results */}
              <div style={{ 
                background: 'var(--bg-glass-bright)', 
                padding: '1.5rem', 
                borderRadius: '16px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                {project.architecture && project.architecture.length > 0 && (
                  <div>
                    <h4 className="section-heading">
                      <ExternalLink size={20} className="heading-icon" style={{ transform: 'rotate(90deg)' }} /> {t.projects.architecture}
                    </h4>
                    <ul style={{ padding: 0, margin: 0 }}>
                      {project.architecture.map((item, i) => (
                        <li key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'baseline', 
                          gap: '10px', 
                          marginBottom: '0.8rem',
                          color: 'var(--text-dim)'
                        }}>
                          <ArrowRight size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.results && project.results.length > 0 && (
                  <div>
                    <h4 className="section-heading">
                      <Activity size={20} className="heading-icon" /> {t.projects.results}
                    </h4>
                    <ul style={{ padding: 0, margin: 0 }}>
                      {project.results.map((item, i) => (
                        <li key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'baseline', 
                          gap: '10px', 
                          marginBottom: '0.8rem',
                          color: 'var(--text-main)',
                          fontWeight: 600
                        }}>
                          <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div style={{ 
              marginTop: '2rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid var(--border-glass)',
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px' 
            }}>
              {project.tech.map(t => (
                <span key={t} style={{ 
                  fontSize: '0.75rem', 
                  padding: '4px 12px', 
                  background: 'var(--bg-deep)', 
                  color: 'var(--text-main)', 
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--primary-glow)',
                  fontWeight: 600,
                  letterSpacing: '0.5px'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .case-study-card:hover {
          border-color: var(--primary-glow);
          box-shadow: var(--shadow-glow);
        }
        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-deep);
          color: var(--text-main);
          border: 1px solid var(--border-glass);
          transition: all 0.3s ease;
        }
        .action-btn:hover {
          background: var(--primary);
          color: var(--bg-deep);
          border-color: var(--primary);
          transform: translateY(-3px);
        }
        .case-study-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .section-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }
        @media (max-width: 900px) {
          .case-study-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Projects;
