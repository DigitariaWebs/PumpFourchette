import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full pb-12 lg:pb-20">
      <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left Side - Images */}
          <div className="lg:w-1/2 relative py-4">
            <div className="relative w-full max-w-md mx-auto">
              {/* The creative layout for the two images */}
              <div className="relative w-full" style={{ height: "550px" }}>
                {/* Top image (now food presentation) */}
                <div className="absolute right-0 top-0 w-[75%] h-[75%] z-0">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/AboutSection/img_unsplash_ot7_v_i0hhg.png"
                      alt="Food presentation"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>

                {/* Bottom image (now food preparation) - below the top image */}
                <div className="absolute left-0 bottom-[-20px] w-[75%] h-[75%] z-10">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src="/AboutSection/img_unsplash_ub7q7aipu2o.png"
                      alt="Food preparation"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <p
              className="text-lg font-normal leading-[27px] text-[var(--color-text-muted)] mb-2"
              style={{ fontFamily: "Miniver" }}
            >
              À propos de la Pump Fourchette
            </p>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-plus-jakarta font-bold leading-tight lg:leading-[61px] text-[var(--color-brand)] mb-6">
              Pump Fourchette ?
            </h2>
            <p
              className="text-base font-normal leading-[28px] text-[var(--color-text)] mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Chez Pump Fourchette, nous croyons que chaque repas est bien plus
              qu&apos;un simple moment à table c&apos;est une occasion de créer des
              souvenirs, de partager des rires et de célébrer la vie avec ceux
              qui comptent le plus. Spécialisés dans les repas festifs, nous
              mettons un point d&apos;honneur à offrir des plats préparés avec soin,
              à partir d&apos;ingrédients frais et de recettes qui allient tradition
              et raffinement .
            </p>
            <p
              className="text-base font-normal leading-[28px] text-[var(--color-text)] mb-6"
              style={{ fontFamily: "Inter" }}
            >
              Nous nous engageons à offrir un service impeccable, où chaque
              détail compte, de la présentation soignée des plats à la
              ponctualité des livraisons. Avec Pump Fourchette, vous profitez
              non seulement d&apos;un repas savoureux, mais aussi d&apos;une expérience
              culinaire complète, pensée pour rassembler et ravir vos convives.
              Notre passion se reflète dans chaque bouchée, afin que vos moments
              spéciaux restent gravés dans les mémoires.
            </p>
            <p
              className="text-base font-normal leading-[28px] text-[var(--color-text)]"
              style={{ fontFamily: "Inter" }}
            >
              Pour vous offrir, en toute occasion, une expérience culinaire
              élégante et chaleureuse, fidèle à notre passion pour la qualité et
              l&apos;authenticité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}