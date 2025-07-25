import { motion } from 'framer-motion';
import { useState } from 'react';
import CookieIllustration from '../components/CookieIllustration';

const CookiesSection = () => {
  const [selectedCookie, setSelectedCookie] = useState(0);

  const cookies = [
    {
      name: "Chocolat Intense",
      description: "Un mélange parfait de chocolat noir et de pépites fondantes",
      ingredients: ["Chocolat noir 70%", "Beurre fermier", "Farine bio", "Œufs frais"],
      price: "3.50€",
      color: "from-amber-100 to-amber-200"
    },
    {
      name: "Vanille Bourbon",
      description: "Délicatement parfumé à la vanille de Madagascar",
      ingredients: ["Vanille Bourbon", "Beurre doux", "Sucre roux", "Amandes"],
      price: "3.20€",
      color: "from-yellow-100 to-yellow-200"
    },
    {
      name: "Noix de Pécan",
      description: "Croquant et généreux, avec des éclats de noix de pécan",
      ingredients: ["Noix de pécan", "Miel d'acacia", "Farine complète", "Beurre salé"],
      price: "4.00€",
      color: "from-orange-100 to-orange-200"
    },
    {
      name: "Double Chocolat",
      description: "Pour les amateurs de chocolat, une explosion de saveurs",
      ingredients: ["Chocolat blanc", "Chocolat au lait", "Cacao pur", "Crème fraîche"],
      price: "3.80€",
      color: "from-pink-100 to-pink-200"
    }
  ];

  return (
    <section id="nos-cookies" className="py-20 bg-gradient-to-b from-transparent to-white/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl text-gradient mb-4">Nos Délicieux Cookies</h2>
          <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
            Chaque cookie est une œuvre d'art culinaire, préparée avec des ingrédients soigneusement sélectionnés
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cookie display */}
          <motion.div
            key={selectedCookie}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className={`w-80 h-80 rounded-full bg-gradient-to-br ${cookies[selectedCookie].color} glassmorphism flex items-center justify-center`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <CookieIllustration className="w-60 h-60" animate={false} />
              </motion.div>
              
              {/* Price tag */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-doux to-violet-doux text-white px-4 py-2 rounded-full font-bold text-xl shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {cookies[selectedCookie].price}
              </motion.div>
            </div>
          </motion.div>

          {/* Cookie selection */}
          <div className="space-y-6">
            {cookies.map((cookie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                  selectedCookie === index
                    ? 'glassmorphism transform scale-105'
                    : 'hover:glassmorphism hover:scale-102'
                }`}
                onClick={() => setSelectedCookie(index)}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-display text-2xl text-gradient mb-2">{cookie.name}</h3>
                <p className="text-gray-600 mb-4 font-sans">{cookie.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cookie.ingredients.map((ingredient, i) => (
                    <span
                      key={i}
                      className="bg-white/60 px-3 py-1 rounded-full text-sm text-gray-700 font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(255, 182, 193, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-doux to-violet-doux text-white px-12 py-4 rounded-full font-medium text-lg shadow-lg"
          >
            Commander vos cookies préférés
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CookiesSection;