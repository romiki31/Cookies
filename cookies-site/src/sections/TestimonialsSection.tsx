import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sophie M.",
      rating: 5,
      comment: "Des cookies absolument divins ! La texture est parfaite et le goût me rappelle ceux de ma grand-mère. Je recommande vivement !",
      flavor: "Chocolat Intense"
    },
    {
      name: "Marc L.",
      rating: 5,
      comment: "Commande livrée rapidement, cookies encore tièdes ! Un vrai délice, mes enfants en redemandent sans cesse.",
      flavor: "Vanille Bourbon"
    },
    {
      name: "Emma D.",
      rating: 5,
      comment: "La qualité est exceptionnelle, on sent vraiment que c'est fait avec amour. Les ingrédients bio font toute la différence !",
      flavor: "Noix de Pécan"
    },
    {
      name: "Julie R.",
      rating: 5,
      comment: "J'ai commandé pour un anniversaire, tout le monde était émerveillé ! Présentation soignée et goût au rendez-vous.",
      flavor: "Double Chocolat"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white/40 to-lavande/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl text-gradient mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
            Leurs sourires et leurs mots sont notre plus belle récompense
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-12 rounded-3xl mb-8"
          >
            <div className="flex justify-center mb-6">
              <FaQuoteLeft className="text-4xl text-rose-doux opacity-50" />
            </div>
            
            <blockquote className="text-2xl text-gray-700 font-sans text-center leading-relaxed mb-8">
              "{testimonials[currentTestimonial].comment}"
            </blockquote>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <FaStar className="text-yellow-400 text-xl mx-1" />
                  </motion.div>
                ))}
              </div>
              
              <h4 className="font-display text-xl text-gray-800 mb-2">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-rose-doux font-medium">
                Cookie préféré: {testimonials[currentTestimonial].flavor}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux text-white rounded-full flex items-center justify-center shadow-lg"
            >
              ←
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? 'bg-rose-doux'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gradient-to-r from-rose-doux to-violet-doux text-white rounded-full flex items-center justify-center shadow-lg"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "500+", label: "Clients satisfaits" },
            { number: "10K+", label: "Cookies vendus" },
            { number: "4.9/5", label: "Note moyenne" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center glassmorphism p-8 rounded-2xl"
            >
              <motion.div
                className="font-display text-4xl text-gradient mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;