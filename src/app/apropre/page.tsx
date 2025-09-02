import React from 'react';
import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Apropre() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-[color:var(--color-brand)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[550px]">
            <div className="py-16">
              <p className="text-white/80 text-sm font-light mb-4 tracking-wider">
                DES SOLUTIONS GOURMANDES
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
                NOS SERVICES
              </h2>
            </div>
            <div className="relative mt-6">
              <Image
                src="/AboutPage/HeroSection.png"
                alt="Delicious layered lasagna on a fork"
                className="absolute -top-60 -right-50 w-265 h-auto -rotate-60"
                width={600}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[color:var(--color-accent)] text-sm font-bold mb-4">
              Des repas qui marquent vos plus beaux souvenirs
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-[color:var(--color-text-muted)] leading-relaxed">
            <p className="mb-6">
              Chez{" "}
              <span className="text-[color:var(--color-accent)] font-medium">
                Pump Fourchette
              </span>
              , nous transformons chaque repas en une expérience unique, alliant
              authenticité, convivialité et raffinement. Spécialisés dans les
              plats festifs, nous mettons un point d&apos;honneur à cuisiner
              avec des ingrédients frais et de première qualité, en privilégiant
              les saveurs qui rassemblent. Notre mission est simple : vous
              libérer du temps en cuisine pour que vous puissiez profiter
              pleinement de vos moments en famille ou entre amis. Du temps des
              fêtes aux événements marquants de la vie, nous sommes là pour
              offrir des plats mémorables qui éveillent les sens et réchauffent
              les cœurs.
            </p>

            <p>
              Au-delà des recettes, Pump Fourchette c&apos;est un savoir-faire
              et une attention aux détails qui font toute la différence. Chaque
              étape, de la sélection des produits à la présentation finale, est
              pensée pour offrir un service à la fois professionnel et
              chaleureux. Nous croyons que la nourriture a le pouvoir de créer
              des souvenirs, et c&apos;est pourquoi nous travaillons avec
              passion pour que chaque bouchée reflète notre engagement envers la
              qualité et le plaisir de partager.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[color:var(--color-pastel-gold)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[color:var(--color-accent)] text-sm">
              Notre galerie de moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              src="/AboutPage/Dinner.jpg"
              alt="Dinner"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/FamillyDinner.jpg"
              alt="Family dinner"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/MiniBurger.jpg"
              alt="Mini burger"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/NoIdea.jpg"
              alt="No idea"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/Pasta.jpg"
              alt="Pasta"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/Picnic.jpg"
              alt="Picnic"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/TwoChefs.jpg"
              alt="Two chefs"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/TwoFishes.jpg"
              alt="Two fishes"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
            <Image
              src="/AboutPage/WhitePeopleFamillyDinner.jpg"
              alt="White people family dinner"
              className="w-full h-64 object-cover rounded-lg"
              width={400}
              height={256}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
