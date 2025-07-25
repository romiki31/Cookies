import { motion } from 'framer-motion';
import { FaHeart, FaLeaf, FaClock, FaGem } from 'react-icons/fa';

const ProcessSection = () => {
  const steps = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Ingrédients Naturels",
      description: "Sélection rigoureuse d'ingrédients bio et naturels, sourcés localement quand c'est possible"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Préparation avec Amour",
      description: "Chaque pâte est travaillée à la main avec patience et passion pour révéler tous les arômes"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Cuisson Artisanale",
      description: "Cuisson lente et contrôlée pour obtenir la texture parfaite : croustillant dehors, moelleux dedans"
    },
    {
      icon: <FaGem className="text-3xl" />,
      title: "Finition Parfaite",
      description: "Chaque cookie est inspecté et décoré individuellement avant d'être emballé avec soin"
    }
  ];

  return (
    <section className="py-20 bg-white/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl text-gradient mb-4">Notre Processus Artisanal</h2>
          <p className="text-xl text-gray-600 font-sans max-w-3xl mx-auto">
            De la sélection des ingrédients à la livraison, chaque étape est pensée pour vous offrir 
            une expérience gustative exceptionnelle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-rose-doux to-violet-doux text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              <div className="glassmorphism p-8 rounded-2xl h-full text-center">
                <motion.div
                  className="text-rose-doux mb-4 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
                
                <h3 className="font-display text-xl text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 font-sans leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <svg width="600" height="200" viewBox="0 0 600 200" className="opacity-60">
              {/* Process flow line */}
              <motion.path
                d="M50 100 Q200 50 350 100 Q500 150 550 100"
                stroke="url(#processGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              
              <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFB6C1" />
                  <stop offset="100%" stopColor="#DDA0DD" />
                </linearGradient>
              </defs>
              
              {/* Process icons */}
              {[75, 225, 375, 525].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={100}
                  r="20"
                  fill="url(#processGradient)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Quality guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-gradient mb-4">Notre Engagement Qualité</h3>
            <p className="text-gray-700 font-sans leading-relaxed">
              Nous nous engageons à ne livrer que des cookies fraîchement préparés, 
              dans le respect des normes d'hygiène les plus strictes. 
              Satisfaction garantie ou remboursé !
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;