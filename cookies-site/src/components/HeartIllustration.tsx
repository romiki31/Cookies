import { motion } from 'framer-motion';

interface HeartIllustrationProps {
  className?: string;
  size?: number;
}

const HeartIllustration = ({ className = "", size = 100 }: HeartIllustrationProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#DDA0DD" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <path
        d="M50,85 C50,85 20,60 20,40 C20,25 30,15 45,20 C50,15 50,15 55,20 C70,15 80,25 80,40 C80,60 50,85 50,85 Z"
        fill="url(#heartGradient)"
        filter="url(#glow)"
        opacity="0.8"
      />
      
      <path
        d="M50,80 C50,80 25,58 25,42 C25,30 32,22 42,25 C47,20 47,20 52,25 C62,22 70,30 70,42 C70,58 50,80 50,80 Z"
        fill="#FFFFFF"
        opacity="0.3"
      />
    </motion.svg>
  );
};

export default HeartIllustration;