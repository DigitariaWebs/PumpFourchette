'use client';
import React from 'react';
import Image from 'next/image';

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonial: TestimonialData = {
    id: "1",
    name: "William doe",
    role: "Client",
    avatar: "/TestimonialsSection/img_ellipse_2552.png",
    content:
      "Nous avons commandé une dinde de Pump Fourchette pour le réveillon et c'était tout simplement parfait ! La viande était tendre, juteuse et pleine de saveur, et la présentation impeccable. Toute la famille s'est régalée et nous avons pu profiter de la soirée sans passer la journée en cuisine. Merci pour ce service exceptionnel !",
    rating: 5,
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src="/TestimonialsSection/img_regular_star.svg"
        alt="Star"
        width={20}
        height={20}
        className={`w-5 h-5 ${index < rating ? 'opacity-100' : 'opacity-30'}`}
      />
    ));
  };

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <p
                className="text-lg font-normal leading-[27px]"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "Miniver",
                }}
              >
                Testimonials
              </p>
              <div
                className="w-[34px] h-[1px]"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
            </div>
            <h2
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-plus-jakarta font-bold leading-tight lg:leading-[61px] mb-3"
              style={{ color: "var(--color-brand)" }}
            >
              Témoignages
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/TestimonialsSection/img_vector.svg"
                alt="Quote"
                width={16}
                height={30}
                className="w-4 h-[30px]"
              />
              <Image
                src="/TestimonialsSection/img_vector.svg"
                alt="Quote"
                width={16}
                height={30}
                className="w-4 h-[30px]"
              />
            </div>
            <div className="space-y-10">
              <p
                className="text-base font-normal leading-[24px]"
                style={{ color: "var(--color-text)", fontFamily: "Helvetica" }}
              >
                {testimonial.content}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={72}
                    height={72}
                    className="w-[72px] h-[72px] rounded-full"
                  />
                  <div>
                    <h4
                      className="text-lg font-plus-jakarta font-bold leading-[23px]"
                      style={{ color: "var(--color-text)" }}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className="text-base font-normal leading-[19px]"
                      style={{
                        color: "var(--color-muted)",
                        fontFamily: "Helvetica",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/TestimonialsSection/img_arrowright.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <Image
                    src="/TestimonialsSection/img_arrowright_gray_500.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Featured Product */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <Image
                src="/TestimonialsSection/img_unsplash_ot7_v_i0hhg.png"
                alt="Featured dish"
                width={506}
                height={392}
                className="w-full h-auto rounded-md"
              />
              <div
                className="absolute bottom-4 left-4 right-4 rounded-md p-4 shadow-[0px_4px_40px_#00000019]"
                style={{ backgroundColor: "var(--color-background)" }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-xl font-bold leading-[25px]"
                    style={{ color: "var(--color-text)", fontFamily: "Inter" }}
                  >
                    Commandez maintenant
                  </h3>
                  <span
                    className="text-base font-bold leading-5"
                    style={{ color: "var(--color-muted)", fontFamily: "Inter" }}
                  >
                    10.00$
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p
                  className="text-base font-normal leading-[24px]"
                  style={{ color: "var(--color-brand)", fontFamily: "Inter" }}
                >
                  Profitez d&apos;une dinde festive, tendre et savoureuse, préparée
                  avec des ingrédients frais pour régaler toute la famille.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
