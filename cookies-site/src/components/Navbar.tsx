import { motion } from 'framer-motion';
import { FaCookie } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Change navbar style on scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const navItems = ['Accueil', 'Nos Cookies', 'Notre Histoire', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <FaCookie className="text-3xl text-rose-doux" />
          <span className="font-script text-2xl text-gradient">Les Cookies de Wiem</span>
        </motion.div>
        
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="font-sans text-gray-700 hover:text-rose-doux transition-colors duration-300"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-rose-doux to-violet-doux text-white px-6 py-2 rounded-full font-medium shadow-lg"
        >
          Commander
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;