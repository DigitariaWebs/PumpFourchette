"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "Comment passer une commande sur Pump Fourchette ?",
      answer: "Vous pouvez passer votre commande facilement via notre site web ou notre application mobile. Sélectionnez vos plats préférés, choisissez votre créneau de livraison, et validez votre commande. Nous acceptons les paiements par carte bancaire et espèces à la livraison."
    },
    {
      id: "2",
      question: "Quels sont vos délais de livraison ?",
      answer: "Nos délais de livraison varient selon votre localisation. En moyenne, comptez 30 à 45 minutes pour une livraison en ville. Vous recevrez une confirmation avec l'heure estimée de livraison lors de la validation de votre commande."
    },
    {
      id: "3",
      question: "Proposez-vous des options végétariennes ou véganes ?",
      answer: "Oui ! Notre carte propose une variété d'options végétariennes et véganes. Nous utilisons des ingrédients frais et de saison pour créer des plats savoureux adaptés à tous les régimes alimentaires."
    },
    {
      id: "4",
      question: "Puis-je modifier ma commande après l'avoir passée ?",
      answer: "Vous pouvez modifier votre commande dans les 5 minutes suivant la validation, en nous contactant directement via le chat en ligne ou par téléphone. Au-delà de ce délai, nous ne pourrons plus apporter de modifications."
    },
    {
      id: "5",
      question: "Quelles sont vos zones de livraison ?",
      answer: "Nous livrons actuellement dans toute la région parisienne et ses environs. Vous pouvez vérifier si votre adresse est éligible lors de la saisie de votre adresse de livraison sur notre site."
    },
    {
      id: "6",
      question: "Comment sont préparés vos plats ?",
      answer: "Tous nos plats sont préparés à la commande avec des ingrédients frais et de qualité. Nos chefs utilisent des techniques traditionnelles pour garantir une saveur authentique et une texture parfaite."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-plus-jakarta font-extrabold mb-4 lg:mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            Questions Fréquentes
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Trouvez rapidement les réponses à vos questions les plus courantes sur nos services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: activeIndex === index ? 'var(--color-pastel-gold)' : 'white' }}
                >
                  <h3
                    className="text-lg sm:text-xl font-plus-jakarta font-semibold pr-4"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 lg:px-8 pb-6 text-base sm:text-lg leading-relaxed"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Vous n&apos;avez pas trouvé la réponse à votre question ?
          </p>
          <button
            className="inline-flex items-center px-8 py-4 rounded-full font-plus-jakarta font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 4px 20px rgba(158, 131, 92, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            }}
          >
            Contactez-nous
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
