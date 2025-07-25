import { motion } from 'framer-motion';
import { FaCookie, FaHeart, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-lavande/40 to-rose-pastel/40 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaCookie className="text-3xl text-rose-doux" />
              </motion.div>
              <span className="font-script text-2xl text-gradient">Les Cookies de Wiem</span>
            </div>
            <p className="text-gray-600 font-sans leading-relaxed mb-6">
              Des cookies artisanaux faits avec amour pour éveiller vos papilles 
              et réchauffer votre cœur.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-xl text-gradient mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Accueil', 'Nos Cookies', 'Notre Histoire', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-rose-doux transition-colors duration-300 font-sans"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-xl text-gradient mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FaPhone className="text-rose-doux" />
                <span className="text-gray-600 font-sans">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FaEnvelope className="text-rose-doux" />
                <span className="text-gray-600 font-sans">contact@lescookiesdewiem.fr</span>
              </div>
            </div>
            
            <motion.div
              className="mt-6 p-4 glassmorphism rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-gray-600 font-sans italic">
                "Chaque cookie porte en lui un peu de mon âme et beaucoup d'amour"
              </p>
              <p className="text-right text-rose-doux font-script mt-2">- Wiem</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/30 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 font-sans text-sm">
              © 2024 Les Cookies de Wiem. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 font-sans text-sm">
              <span>Fait avec</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-rose-doux" />
              </motion.div>
              <span>par Wiem</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;