import { motion } from 'framer-motion';

interface CookieIllustrationProps {
  className?: string;
  animate?: boolean;
}

const CookieIllustration = ({ className = "", animate = true }: CookieIllustrationProps) => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className={className}
      animate={animate ? { rotate: 360 } : {}}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <filter id="morphism">
          <feMorphology operator="dilate" radius="2"/>
          <feGaussianBlur stdDeviation="3"/>
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0.9
                    0 1 0 0 0.8
                    0 0 1 0 0.7
                    0 0 0 1 0"
          />
        </filter>
        <linearGradient id="cookieGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4E1" />
          <stop offset="50%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
      </defs>
      
      {/* Cookie base */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="url(#cookieGradient)"
        filter="url(#morphism)"
      />
      
      {/* Cookie texture */}
      <circle cx="100" cy="100" r="75" fill="#F5DEB3" opacity="0.6" />
      
      {/* Chocolate chips */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ellipse cx="70" cy="80" rx="12" ry="10" fill="#654321" opacity="0.8" />
        <ellipse cx="120" cy="90" rx="10" ry="12" fill="#654321" opacity="0.8" />
        <ellipse cx="90" cy="120" rx="11" ry="11" fill="#654321" opacity="0.8" />
        <ellipse cx="130" cy="130" rx="9" ry="10" fill="#654321" opacity="0.8" />
        <ellipse cx="60" cy="110" rx="10" ry="9" fill="#654321" opacity="0.8" />
      </motion.g>
      
      {/* Bite mark */}
      <path
        d="M 170 100 Q 180 80, 170 60 Q 160 70, 150 60 Q 140 70, 130 60"
        fill="#FFF8DC"
        opacity="0.9"
      />
      
      {/* Crumbs */}
      <circle cx="165" cy="120" r="3" fill="#F5DEB3" opacity="0.7" />
      <circle cx="175" cy="115" r="2" fill="#F5DEB3" opacity="0.7" />
      <circle cx="170" cy="130" r="2.5" fill="#F5DEB3" opacity="0.7" />
    </motion.svg>
  );
};

export default CookieIllustration;