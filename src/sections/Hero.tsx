import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolioData } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const portfolioData = usePortfolioData();
  const { t } = useLanguage();

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: 'var(--spacing-xl)',
      paddingBottom: 'var(--spacing-xl)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-xl)',
        alignItems: 'center',
        zIndex: 2
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'left' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ 
              display: 'inline-flex',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-glass-bright)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1.5rem',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            {t.hero.available}
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 10vw, 6.5rem)', 
            marginBottom: '0.5rem',
            lineHeight: 1,
            letterSpacing: '-3px',
            textTransform: 'uppercase',
            fontWeight: 900
          }}>
            <span style={{
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>{portfolioData.name}</span>
          </h1>
          
          <h2 style={{ 
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
            color: 'var(--text-main)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-md)',
            letterSpacing: '-1px',
            lineHeight: 1.2
          }}>
            {portfolioData.title}
          </h2>
          
          <p style={{ 
            color: 'var(--text-dim)', 
            fontSize: '1.15rem', 
            maxWidth: '600px',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: 1.8,
            fontWeight: 400
          }}>
            {t.hero.description}
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.viewProjects} <ChevronRight size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: 'clamp(280px, 45vw, 500px)',
            height: 'clamp(280px, 45vw, 500px)',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, var(--bg-glass), var(--bg-glass-bright))',
            border: '2px solid var(--border-glass)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: 'var(--shadow-glass)'
          }}>
            <img 
              src="/Profile.jpeg" 
              alt={portfolioData.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(20%) contrast(1.1)',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onError={(e) => {
                // Fallback rendering standard shape if image missing
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextSibling as HTMLElement).innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;color:var(--primary);background:var(--bg-main)">LG</div>`;
              }}
            />
            {/* Fallback & Decorative Overlay container */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 30% 30%, var(--primary-glow) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
          </div>
        </motion.div>
      </div>

      {/* Senior Impact Metrics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          borderTop: '1px solid var(--border-glass)', 
          background: 'var(--bg-glass-bright)', 
          backdropFilter: 'blur(10px)',
          zIndex: 10
        }}
      >
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          padding: '1.5rem 0', 
          flexWrap: 'wrap', 
          gap: '1rem' 
        }}>
          <div className="metric-item">
             <span className="metric-icon">🚀</span>
             <span className="metric-text">{t.metrics.label1}</span>
          </div>
          <div className="metric-item">
             <span className="metric-icon">⚡</span>
             <span className="metric-text">{t.metrics.label2}</span>
          </div>
          <div className="metric-item">
             <span className="metric-icon">🏗️</span>
             <span className="metric-text">{t.metrics.label3}</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        .btn-primary {
          background: var(--primary);
          color: var(--bg-deep);
          padding: 16px 32px;
          border-radius: var(--radius-md);
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-glow);
          border: 2px solid transparent;
          transition: background 0.3s, transform 0.3s;
        }
        .metric-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-main);
          letter-spacing: -0.5px;
        }
        .metric-icon {
          font-size: 1.5rem;
        }
        @media (max-width: 768px) {
          #hero { min-height: auto; padding-bottom: 8rem; }
          .metric-item { font-size: 0.95rem; }
          .btn-primary { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
