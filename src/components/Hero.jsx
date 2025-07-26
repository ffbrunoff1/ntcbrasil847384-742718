import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-secondary opacity-10"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)',
        }}
      ></div>

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full filter blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent mb-4 leading-tight"
          variants={itemVariants}
        >
          Construindo um futuro melhor com
          <br />
          <span className="gradient-text">NTC Brasil</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-text-dark/80 mb-8"
          variants={itemVariants}
        >
          Qualidade e confiança em cada projeto. Entre em contato conosco para
          participar da transformação do espaço ao seu redor.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a href="#contact" className="btn btn-primary text-lg shadow-glow">
            Sua construção começa aqui
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown className="text-secondary" size={32} />
      </motion.a>
    </section>
  );
}
