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
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: 'var(--spacing-xl)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--spacing-xl)',
        alignItems: 'center'
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
              display: 'inline-block',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-glass-bright)',
              border: '1px solid var(--border-glass)',
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1rem'
            }}
          >
            {t.hero.available}
          </motion.div>
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-2px'
          }}>
            {t.hero.hi} <span style={{
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>{portfolioData.name.split(' ')[0]}</span>
          </h1>
          
          <h2 style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', 
            color: 'var(--text-dim)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-md)',
            letterSpacing: '-0.5px'
          }}>
            {portfolioData.title}
          </h2>
          
          <p style={{ 
            color: 'var(--text-dim)', 
            fontSize: '1.1rem', 
            maxWidth: '550px',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: 1.7
          }}>
            {t.hero.description}
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
            <a href="#projects" className="btn-primary">
              {t.hero.viewProjects} <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            width: 'clamp(250px, 40vw, 450px)',
            height: 'clamp(250px, 40vw, 450px)',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, var(--bg-glass), var(--bg-glass-bright))',
            border: '1px solid var(--border-glass)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: 'var(--shadow-glass)'
          }}>
            {/* Profile Image */}
            <img 
              src="/Profile.jpeg" 
              alt={portfolioData.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(15%) contrast(1.05)',
                transition: 'var(--transition-normal)'
              }}
            />
            
            {/* Decorative Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at 30% 30%, var(--primary-glow) 0%, transparent 60%)',
              pointerEvents: 'none'
            }} />
          </div>
          
          {/* Floating tags */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass" 
            style={{ position: 'absolute', top: '10%', right: '-5%', padding: '10px 15px', borderRadius: 'var(--radius-sm)' }}
          >
            🚀 Fullstack
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass" 
            style={{ position: 'absolute', bottom: '15%', left: '-5%', padding: '10px 15px', borderRadius: 'var(--radius-sm)' }}
          >
            📱 Mobile Expert
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .btn-primary {
          background: var(--primary);
          color: var(--bg-deep); /* Force black text */
          padding: 14px 28px;
          border-radius: var(--radius-md);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: var(--shadow-glow);
          transition: transform var(--transition-fast), opacity var(--transition-fast);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        .btn-secondary {
          background: var(--bg-glass-bright);
          color: var(--text-main);
          border: 1px solid var(--border-glass);
          padding: 14px 28px;
          border-radius: var(--radius-md);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(8px);
          transition: var(--transition-fast);
        }
        .btn-secondary:hover {
          background: var(--bg-glass);
          border-color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Hero;
