import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-rose-pastel/30 to-lavande/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl text-gradient mb-4">Contactez-nous</h2>
          <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
            Une envie de cookies ? Une question ? N'hésitez pas à nous contacter, 
            nous serons ravis de vous répondre !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism p-8 rounded-2xl">
              <h3 className="font-display text-2xl text-gradient mb-6">Envoyez-nous un message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Votre nom
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-doux/30 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-rose-doux/50 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Votre email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-doux/30 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-rose-doux/50 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Votre message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-rose-doux/30 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-rose-doux/50 transition-all duration-300 resize-none"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 182, 193, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-rose-doux to-violet-doux text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="font-display text-2xl text-gradient mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">contact@lescookiesdewiem.fr</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Adresse</p>
                    <p className="text-gray-600">123 Rue des Délices<br />75001 Paris, France</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social media */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="font-display text-2xl text-gradient mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                >
                  <FaInstagram />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                >
                  <FaFacebook />
                </motion.a>
              </div>
              <p className="text-gray-600 mt-4 font-sans">
                Découvrez nos dernières créations et participez à nos concours !
              </p>
            </div>

            {/* Opening hours */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="font-display text-2xl text-gradient mb-6">Horaires</h3>
              <div className="space-y-2 text-gray-700 font-sans">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 19h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>10h - 16h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;