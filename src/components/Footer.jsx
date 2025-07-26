import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753284783610_0.png';

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Especialidades', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      className="bg-accent text-text-light"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto bg-white p-2 rounded-md mb-4"
              />
            </a>
            <p className="max-w-xs text-gray-300">
              Construindo um futuro melhor, com qualidade e confiança em cada
              projeto.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="font-bold text-lg text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold text-lg text-white mb-4">Fale Conosco</h3>
            <ul className="space-y-3 text-gray-300">
              <li>+55 44 99104 0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
