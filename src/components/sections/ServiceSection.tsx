'use client';
import React from 'react';
import Image from 'next/image';

interface ServiceCard {
  id: string;
  image: string;
  category: string;
  title: string;
}

const ServiceSection: React.FC = () => {
  const serviceCards: ServiceCard[] = [
    {
      id: "1",
      image: "/ServiceSection/SchoolLunch.jpg",
      category: "Traiteur",
      title: "Pour les écoles",
    },
    {
      id: "2",
      image: "/ServiceSection/img_1_294x358.png",
      category: "commande famille",
      title: "Repas prêt à manger",
    },
    {
      id: "3",
      image: "/ServiceSection/img_1_1.png",
      category: "ÉVENEMENTS",
      title: "Dindes spécial fêtes",
    },
    {
      id: "4",
      image: "/ServiceSection/Dinner.jpg",
      category: "FRITAILLES",
      title: "Weekend Fritailles",
    },
    {
      id: "5",
      image: "/ServiceSection/img_unsplash3iexvmshgfq.png",
      category: "ÉVÉNEMENTS SPÉCIAUX",
      title: "Événement spéciales",
    },
  ];

  return (
    <section id="services" className="w-full lg:py-16 py-8">
      {/* Services Section */}
      <div className="w-full py-20 lg:py-28">
        <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-plus-jakarta font-bold leading-tight lg:leading-[61px] mb-6"
            style={{ color: "var(--color-brand)" }}
          >
            Pump Fourchette, partout où l&apos;appétit vous mène
          </h2>
          <p className="font-bold text-sm py-2 rounded-[18px] text-[color:var(--color-brand-muted)] transition-colors mb-12">
            Des repas qui marquent vos plus beaux souvenirs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceCards.slice(0, 3).map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-7 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => console.log("Service clicked:", card.id)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={358}
                  height={294}
                  className="w-full h-[294px] object-cover rounded-md"
                />
                <div className="flex flex-col gap-2">
                  <p
                    className="text-sm font-bold leading-[21px] tracking-[1px] uppercase"
                    style={{
                      color: "var(--color-brand)",
                      fontFamily: "Poppins",
                    }}
                  >
                    {card.category}
                  </p>
                  <h3
                    className="text-[26px] font-plus-jakarta font-normal leading-[33px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.slice(3, 5).map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-7 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => console.log("Service clicked:", card.id)}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={358}
                  height={294}
                  className="w-full h-[294px] object-cover rounded-md"
                />
                <div className="flex flex-col gap-2">
                  <p
                    className="text-sm font-bold leading-[21px] tracking-[1px] uppercase"
                    style={{
                      color: "var(--color-brand)",
                      fontFamily: "Poppins",
                    }}
                  >
                    {card.category}
                  </p>
                  <h3
                    className="text-[26px] font-plus-jakarta font-normal leading-[33px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="relative w-full py-20 lg:py-30 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(/ServiceSection/img_unsplash3iexvmshgfq.png)",
          }}
        ></div>
        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 ">
          <div className="text-center">
            <div className="relative inline-block">
              <div
                className="absolute inset-0 bg-global-3 opacity-80 rounded-lg"
                style={{ backgroundColor: "var(--color-brand)" }}
              ></div>
              <div className="absolute inset-x-0 bottom-0 h-[102px] bg-global-3 opacity-80 mx-8 lg:mx-20 rounded-lg"></div>
              <h2
                className="relative text-[48px] sm:text-[64px] lg:text-[94px] font-bold leading-tight lg:leading-[112px] capitalize px-8 py-4"
                style={{
                  color: "var(--color-surface)",
                  fontFamily: "Gabarito",
                }}
              >
                Les meilleures recettes pour vos moments à savourer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
