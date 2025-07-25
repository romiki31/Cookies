import { motion } from 'framer-motion';
import CookieIllustration from '../components/CookieIllustration';
import HeartIllustration from '../components/HeartIllustration';
import FlowerIllustration from '../components/FlowerIllustration';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background floating elements */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FlowerIllustration size={60} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <HeartIllustration size={70} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-20"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <FlowerIllustration size={80} />
      </motion.div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="font-script text-6xl lg:text-7xl text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Les Cookies de Wiem
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-700 mb-8 font-sans leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Des cookies artisanaux faits avec amour, pour éveiller vos papilles et réchauffer votre cœur. 
            Chaque bouchée raconte une histoire de passion et de tradition.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 182, 193, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-rose-doux to-violet-doux text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg"
            >
              Découvrir nos cookies
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism px-8 py-4 rounded-full font-medium text-gray-700 border border-rose-doux/30"
            >
              Notre histoire
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <CookieIllustration className="w-80 h-80 lg:w-96 lg:h-96" />
            
            {/* Floating hearts around cookie */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <HeartIllustration size={30 + i * 5} className="opacity-70" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-rose-doux rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-rose-doux rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;