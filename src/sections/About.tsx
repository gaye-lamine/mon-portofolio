import React from 'react';
import Section from '../components/ui/Section';
import { usePortfolioData } from '../data/portfolioData';
import { User, Target, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <Section id="about" title={t.about.title} subtitle={t.about.subtitle}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginTop: 'var(--spacing-md)'
      }}>
        <div className="about-text" style={{ textAlign: 'left', fontSize: '1.1rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1.5rem' }}>{portfolioData.about}</p>
          <p>
            {t.about.goal}
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
          <div className="glass card-about">
            <div className="icon-box"><Target size={24} /></div>
            <div>
              <h3>{t.about.vision}</h3>
              <p>{t.about.visionDesc}</p>
            </div>
          </div>
          <div className="glass card-about">
            <div className="icon-box"><Zap size={24} /></div>
            <div>
              <h3>{t.about.perf}</h3>
              <p>{t.about.perfDesc}</p>
            </div>
          </div>
          <div className="glass card-about">
            <div className="icon-box"><User size={24} /></div>
            <div>
              <h3>{t.about.agile}</h3>
              <p>{t.about.agileDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .card-about {
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          text-align: left;
          transition: var(--transition-fast);
        }
        .card-about:hover {
          border-color: var(--primary);
          transform: translateX(10px);
        }
        .card-about h3 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
          color: var(--text-main);
        }
        .card-about p {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.4;
        }
        .icon-box {
          background: var(--bg-glass-bright);
          padding: 10px;
          border-radius: var(--radius-sm);
          color: var(--primary);
          flex-shrink: 0;
        }
      `}</style>
    </Section>
  );
};

export default About;
