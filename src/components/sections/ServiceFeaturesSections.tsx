"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceFeaturesSections() {
  // Feature items with their icons, titles, and descriptions
  const features = [
    {
      icon: "/ServiceFeatureSection/img_streamline_cham.svg",
      title: "Fête Gourmande",
      description: "Des plats parfaits pour vos événements festifs",
    },
    {
      icon: "/ServiceFeatureSection/img_materialsymbolsworkspacepremiumrounded.svg",
      title: "Qualité Premium",
      description: "Des ingrédients soigneusement sélectionnés",
    },
    {
      icon: "/ServiceFeatureSection/img_flowbite_bowl_food_solid.svg",
      title: "Toujours Frais",
      description: "Préparé à la commande pour une fraîcheur maximale",
    },
    {
      icon: "/ServiceFeatureSection/img_ion_speedometer.svg",
      title: "24/7 services",
      description: "Disponible à tout moment pour vous servir",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 hover:shadow-lg rounded-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="text-amber-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
