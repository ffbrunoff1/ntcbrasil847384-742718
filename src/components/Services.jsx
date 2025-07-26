import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ClipboardList, Home, Building } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const servicesList = [
    {
      icon: <ClipboardList size={40} className="text-secondary" />,
      title: 'Planejamento e Gestão',
      description:
        'Gerenciamento completo de projetos, desde a concepção e viabilidade até a coordenação e fiscalização da obra, garantindo prazos e orçamentos.',
    },
    {
      icon: <Home size={40} className="text-secondary" />,
      title: 'Construção Residencial',
      description:
        'Execução de projetos residenciais de todos os portes, com foco em qualidade, conforto e personalização para criar o lar dos seus sonhos.',
    },
    {
      icon: <Building size={40} className="text-secondary" />,
      title: 'Obras Comerciais e Industriais',
      description:
        'Soluções robustas e eficientes para o setor corporativo e industrial, construindo espaços funcionais que impulsionam o seu negócio.',
    },
    {
      icon: <HardHat size={40} className="text-secondary" />,
      title: 'Reformas e Manutenção',
      description:
        'Serviços especializados de reforma, modernização e manutenção predial, valorizando seu patrimônio com segurança e qualidade.',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            Nossas Especialidades
          </h2>
          <p className="mt-4 text-lg text-text-dark/80 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender a todas as
            necessidades do seu projeto de construção.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-xl shadow-lg flex flex-col text-center items-center transition-transform duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <div className="mb-6 bg-secondary/10 p-5 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">
                {service.title}
              </h3>
              <p className="text-text-dark/70 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-semibold text-secondary hover:text-accent transition-colors duration-300"
                >
                  Solicitar Orçamento &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
