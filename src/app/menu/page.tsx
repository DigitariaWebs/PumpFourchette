"use client";

import React, { use, Suspense } from "react";
import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { getMenuConfig } from "../../data/menuData";
import { useRouter, useSearchParams } from "next/navigation";

interface MenuPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function Menu({ searchParams }: MenuPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuContent searchParams={searchParams} />
    </Suspense>
  );
}

function MenuContent({ searchParams }: MenuPageProps) {
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const params = use(searchParams);
  const menuType = (params?.type as string) || "ecole";
  const menuConfig = getMenuConfig(menuType);

  const categories = ["Menu École", "Salades", "Pita & Hamburger", "Jus", "Desserts", "Poutines", "Entrées"];

  const handleCategoryClick = (category: string) => {
    let newMenuType = "ecole"; // default

    if (category === "Menu École") {
      newMenuType = "ecole";
    } else if (category === "Desserts") {
      newMenuType = "desserts";
    }
    // Add more conditions here for other categories when you add them

    // Update the URL with the new menu type
    const newSearchParams = new URLSearchParams(currentSearchParams.toString());
    if (newMenuType === "ecole") {
      newSearchParams.delete("type"); // Remove type param for default
    } else {
      newSearchParams.set("type", newMenuType);
    }

    const newUrl = newSearchParams.toString()
      ? `?${newSearchParams.toString()}`
      : "";

    router.push(`/menu${newUrl}`);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[color:var(--color-pastel-gold)] py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-2">
            <h1 className="text-4xl lg:text-6xl font-light text-[color:var(--color-accent)] tracking-wider uppercase">
              {menuConfig.title}
            </h1>
          </div>

          {/* Decorative Image */}
          <div className="relative mb-16">
            <Image
              src="/Menu/HeroSection.png"
              alt="Menu - Decorative food on forks"
              className="w-full h-auto max-w-7xl mx-auto"
              width={1200}
              height={300}
              priority
            />
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={
                  category === menuConfig.title
                    ? "bg-[color:var(--color-brand)] text-white px-6 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-[color:var(--color-brand-muted)] transition-colors duration-200"
                    : "bg-transparent text-[color:var(--color-accent)] px-6 py-3 rounded-lg font-medium text-sm tracking-wide border border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-white transition-all duration-200 cursor-pointer"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuConfig.sections.map((section, sectionIndex) => (
            <div key={section.id} className="mb-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  sectionIndex % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    sectionIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    width={500}
                    height={384}
                  />
                </div>

                {/* Menu Items */}
                <div
                  className={`space-y-3 ${
                    sectionIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-[color:var(--color-accent)] text-sm font-bold mb-4 tracking-wider">
                    {section.title}
                  </h3>
                  {section.items.map((item) => (
                    <div key={item.id} className="pb-3">
                      <h4 className="text-xl font-medium text-[color:var(--color-text)] mb-3">
                        {item.title}
                      </h4>
                      <div className="flex items-baseline">
                        <span className="text-[color:var(--color-text-muted)] text-sm">
                          {item.description}
                        </span>
                        <div className="flex-1 border-b border-dotted border-[color:var(--color-text-muted)] mx-2 mb-1"></div>
                        <span className="text-[color:var(--color-accent)] font-bold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
