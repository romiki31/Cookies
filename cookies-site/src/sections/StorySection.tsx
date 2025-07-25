import { motion } from 'framer-motion';
import HeartIllustration from '../components/HeartIllustration';
import FlowerIllustration from '../components/FlowerIllustration';

const StorySection = () => {
  return (
    <section id="notre-histoire" className="py-20 bg-gradient-to-r from-lavande/30 to-rose-pastel/30 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FlowerIllustration size={100} className="opacity-20" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <HeartIllustration size={120} className="opacity-20" />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-script text-5xl text-gradient mb-8">L'Histoire de Wiem</h2>
            
            <div className="space-y-6 font-sans text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                Tout a commencé dans la cuisine familiale, où Wiem a découvert sa passion pour la pâtisserie 
                en regardant sa grand-mère préparer des gâteaux avec amour et patience.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg leading-relaxed"
              >
                Après des années d'expérimentation et de perfectionnement, elle a développé ses propres recettes, 
                mêlant tradition et créativité pour créer des cookies uniques qui racontent une histoire.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg leading-relaxed"
              >
                Chaque cookie est façonné à la main avec des ingrédients naturels et biologiques, 
                dans le respect des traditions artisanales transmises de génération en génération.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <blockquote className="italic text-xl text-rose-doux font-script border-l-4 border-rose-doux pl-6">
                "Chaque cookie porte en lui un peu de mon âme et beaucoup d'amour"
                <span className="block text-right text-gray-600 text-lg mt-2">- Wiem</span>
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Portrait placeholder with decorative frame */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-96 glassmorphism rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Portrait illustration */}
                <div className="w-full h-full bg-gradient-to-b from-rose-pastel to-lavande flex items-center justify-center">
                  <svg width="200" height="250" viewBox="0 0 200 250" className="opacity-60">
                    {/* Chef hat */}
                    <ellipse cx="100" cy="60" rx="45" ry="25" fill="#FFFFFF" />
                    <rect x="70" y="60" width="60" height="15" fill="#FFFFFF" />
                    
                    {/* Face */}
                    <circle cx="100" cy="120" r="35" fill="#FFDAB9" />
                    
                    {/* Hair */}
                    <path d="M65 95 Q100 80 135 95 Q130 110 100 115 Q70 110 65 95" fill="#8B4513" />
                    
                    {/* Eyes */}
                    <circle cx="90" cy="115" r="3" fill="#654321" />
                    <circle cx="110" cy="115" r="3" fill="#654321" />
                    
                    {/* Smile */}
                    <path d="M85 130 Q100 140 115 130" stroke="#654321" strokeWidth="2" fill="none" />
                    
                    {/* Body/Apron */}
                    <rect x="70" y="155" width="60" height="80" fill="#FFE4E1" rx="10" />
                    <rect x="75" y="160" width="50" height="70" fill="#FFFFFF" rx="5" />
                  </svg>
                </div>
              </motion.div>
              
              {/* Floating elements around portrait */}
              <motion.div
                className="absolute -top-5 -left-5"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <HeartIllustration size={40} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-5 -right-5"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <FlowerIllustration size={50} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;