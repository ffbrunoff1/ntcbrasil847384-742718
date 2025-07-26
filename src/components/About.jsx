import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
      title: 'Qualidade Incomparável',
      description:
        'Comprometemo-nos com os mais altos padrões de qualidade, utilizando materiais de ponta e técnicas construtivas inovadoras para garantir durabilidade e excelência.',
    },
    {
      icon: <Building2 className="w-10 h-10 text-secondary" />,
      title: 'Projetos Sob Medida',
      description:
        'Entendemos que cada cliente é único. Por isso, desenvolvemos soluções personalizadas que atendem às suas necessidades específicas, do planejamento à entrega final.',
    },
    {
      icon: <Users className="w-10 h-10 text-secondary" />,
      title: 'Confiança e Transparência',
      description:
        'Construímos mais do que edifícios; construímos relacionamentos sólidos baseados na confiança, comunicação clara e total transparência em todas as fases do projeto.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-primary">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            A Base Sólida do Seu Projeto
          </h2>
          <p className="mt-4 text-lg text-text-dark/80 max-w-3xl mx-auto">
            Na NTC Brasil, combinamos experiência, tecnologia e paixão para
            transformar ideias em realidade. Nossa missão é entregar projetos
            que não apenas atendam, mas superem as expectativas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-secondary/10 p-4 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">
                {feature.title}
              </h3>
              <p className="text-text-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
