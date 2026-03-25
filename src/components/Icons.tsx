import React from 'react';

interface IconProps {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const Github: React.FC<IconProps> = ({ size = 24, className = '', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-github ${className}`}
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.4-1.6-.1-3.4 0 0-1-.3-3.3 1.5-.9-.2-1.9-.3-3-.3s-2.1.1-3 .3C6 3.1 5 3.4 5 3.4c-.5 1.8-.2 3.1-.1 3.4-1 .9-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.8 1.1-.9 2.2-.1.1-.1.3-.1.6 0 .5.1 1.6.1 2.2" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

export const Linkedin: React.FC<IconProps> = ({ size = 24, className = '', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-linkedin ${className}`}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
