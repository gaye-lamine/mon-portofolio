import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`container ${className}`}>
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'var(--spacing-md)', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{title}</h2>
          {subtitle && <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
          <div style={{ 
            width: '60px', 
            height: '4px', 
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))', 
            margin: '1.5rem auto 0',
            borderRadius: 'var(--radius-full)'
          }} />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
