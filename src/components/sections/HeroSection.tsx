"use client"

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[1400px]">
      {/* Background Image - middle layer */}
      <div className="absolute inset-0 z-5">
        <Image
          src="/HeroSection/HeroSection.png"
          alt="Background"
          fill
          className="object-contain w-full"
        />
      </div>

      {/* Left Image - bottom layer */}
      <div className="absolute left-0 top-1/3 transform -translate-y-1/2 z-0 hidden lg:block w-1/3">
        <Image
          src="/HeroSection/left-decorative-leaf.png"
          alt="Decorative"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Right Image - bottom layer */}
      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 z-0 lg:w-1/3">
        <Image
          src="/HeroSection/right-decorative-leaf.png"
          alt="Hero Food"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content - top layer */}
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative flex flex-col lg:flex-row items-start justify-center py-8 lg:py-16 min-h-[400px]">
          <div className="flex-1 text-center lg:text-center px-4 lg:px-8">
            <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-plus-jakarta font-extrabold leading-tight lg:leading-[60px] text-[color:var(--color-accent)] mb-8 lg:mb-12">
              De notre cuisine à votre table, pour toutes vos célébrations
            </h1>
            <button
              className="bg-[color:var(--color-brand)] text-[color:var(--color-text)] font-bold text-sm px-5 py-2 rounded-[18px] hover:bg-[color:var(--color-accent)] hover:text-white transition-colors"
              onClick={() => console.log("CTA clicked")}
            >
              Des repas qui marquent vos plus beaux souvenirs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
