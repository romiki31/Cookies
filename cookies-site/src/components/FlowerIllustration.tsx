import { motion } from 'framer-motion';

interface FlowerIllustrationProps {
  className?: string;
  size?: number;
}

const FlowerIllustration = ({ className = "", size = 80 }: FlowerIllustrationProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={className}
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <defs>
        <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE4E1" />
          <stop offset="100%" stopColor="#E6E6FA" />
        </radialGradient>
        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#FFB6C1" />
        </radialGradient>
      </defs>
      
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
        <motion.ellipse
          key={index}
          cx="40"
          cy="25"
          rx="8"
          ry="15"
          fill="url(#petalGradient)"
          transform={`rotate(${rotation} 40 40)`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
        />
      ))}
      
      {/* Center */}
      <circle
        cx="40"
        cy="40"
        r="8"
        fill="url(#centerGradient)"
      />
      
      {/* Small center dots */}
      <circle cx="37" cy="37" r="1.5" fill="#F0FFF0" opacity="0.8" />
      <circle cx="43" cy="37" r="1" fill="#F0FFF0" opacity="0.8" />
      <circle cx="40" cy="43" r="1.2" fill="#F0FFF0" opacity="0.8" />
    </motion.svg>
  );
};

export default FlowerIllustration;