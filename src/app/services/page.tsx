import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="bg-[color:var(--color-brand)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[550px]">
            <div className="py-16">
              <p className="text-[color:var(--color-surface)]/80 text-sm font-light mb-4 tracking-wider">
                UN PEU -
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-[color:var(--color-surface)] mb-8 leading-tight">
                À PROPOS DE NOUS
              </h2>
            </div>
            <div className="relative mt-6">
              <Image
                src="/ServicePage/HeroSection.png"
                alt="Delicious layered lasagna on a fork"
                className="absolute -top-80 -right-32 w-128 h-auto -rotate-35"
                width={256}
                height={192}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[color:var(--color-surface)] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/ServicePage/SchoolLunch.jpg"
              alt="Pour les écoles"
              className="w-full h-48 object-cover"
              width={600}
              height={192}
            />
            <div className="p-6">
              <p className="text-[color:var(--color-brand-muted)] text-xs font-medium tracking-wider mb-2">
                TRAITEUR
              </p>
              <h3 className="text-[color:var(--color-text)] text-xl font-semibold mb-3">
                Pour les écoles
              </h3>
              <p className="text-[color:var(--color-text-muted)] text-sm mb-6 leading-relaxed">
                Des repas équilibrés et savoureux adaptés aux besoins des
                élèves, préparés avec des ingrédients frais et de qualité.
              </p>
              <button className="bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-muted)] text-[color:var(--color-surface)] px-6 py-2 rounded cursor-pointer">
                Commander
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[color:var(--color-surface)] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/ServicePage/FancyRestaurant.jpg"
              alt="Repas prêt à manger"
              className="w-full h-48 object-cover"
              width={600}
              height={192}
            />
            <div className="p-6">
              <p className="text-[color:var(--color-brand-muted)] text-xs font-medium tracking-wider mb-2">
                COMMANDE FAMILLE
              </p>
              <h3 className="text-[color:var(--color-text)] text-xl font-semibold mb-3">
                Repas prêt à manger
              </h3>
              <p className="text-[color:var(--color-text-muted)] text-sm mb-6 leading-relaxed">
                Réservez facilement vos repas en ligne et profitez d&apos;un
                service rapide et fiable. Des plats frais, préparés avec soin.
              </p>
              <button className="bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-muted)] text-[color:var(--color-surface)] px-6 py-2 rounded cursor-pointer">
                Commander
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[color:var(--color-surface)] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/ServicePage/Chiken.jpg"
              alt="Dindes spécial fêtes"
              className="w-full h-48 object-cover"
              width={600}
              height={192}
            />
            <div className="p-6">
              <p className="text-[color:var(--color-brand-muted)] text-xs font-medium tracking-wider mb-2">
                ÉVÉNEMENTS
              </p>
              <h3 className="text-[color:var(--color-text)] text-xl font-semibold mb-3">
                Dindes spécial fêtes
              </h3>
              <p className="text-[color:var(--color-text-muted)] text-sm mb-6 leading-relaxed">
                Une dinde tendre et juteuse, cuisinée selon la tradition,
                parfaite pour vos repas de fin d&apos;année, préparée avec des
                ingrédients frais.
              </p>
              <button className="bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-muted)] text-[color:var(--color-surface)] px-6 py-2 rounded cursor-pointer">
                Commander
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[color:var(--color-surface)] rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/ServicePage/Dinner.jpg"
              alt="Fritailles"
              className="w-full h-48 object-cover"
              width={600}
              height={192}
            />
            <div className="p-6">
              <p className="text-[color:var(--color-brand-muted)] text-xs font-medium tracking-wider mb-2">
                FRITAILLES
              </p>
              <h3 className="text-[color:var(--color-text)] text-xl font-semibold mb-3">
                Fritailles
              </h3>
              <p className="text-[color:var(--color-text-muted)] text-sm mb-6 leading-relaxed">
                Découvrez nos délicieuses fritailles, croustillantes et
                savoureuses, parfaites pour vos apéritifs ou accompagnements.
              </p>
              <button className="bg-[color:var(--color-brand)] hover:bg-[color:var(--color-brand-muted)] text-[color:var(--color-surface)] px-6 py-2 rounded cursor-pointer">
                Commander
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-16 px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="[font-family:'Great_Vibes',Helvetica] font-normal text-[color:var(--color-text)] text-base tracking-[4.80px]">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Images Section */}
            <div className="flex gap-4">
              {/* Left Image */}
              <div className="flex-1">
                <Image
                  className="w-full h-[542px] object-cover rounded-lg"
                  alt="Mask group"
                  src="/ServicePage/Dinner.jpg"
                  width={900}
                  height={542}
                />
              </div>

              {/* Right Stacked Images */}
              <div className="flex-1 flex flex-col gap-4">
                <Image
                  className="w-full h-[271px] object-cover rounded-lg"
                  alt="Mask group"
                  src="/ServicePage/NoIdea.jpg"
                  width={600}
                  height={271}
                />
                <Image
                  className="w-full h-[255px] object-cover rounded-lg"
                  alt="Mask group"
                  src="/ServicePage/WhiteKid.jpg"
                  width={600}
                  height={255}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="bg-[color:var(--color-brand)] text-[color:var(--color-surface)] hover:bg-[color:var(--color-brand-muted)] px-6 py-2 rounded-full [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[17px] inline-block">
                Des repas qui marquent vos plus beaux souvenirs
              </div>

              {/* Description */}
              <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[color:var(--color-text-muted)] text-xl leading-[35px]">
                Chez Pump Fourchette, nous offrons une gamme de services conçus
                pour répondre à tous vos besoins culinaires, qu&apos;il
                s&apos;agisse de repas quotidiens, d&apos;occasions spéciales ou
                de grands événements. De nos menus adaptés aux écoles à nos
                repas prêts-à-manger, en passant par notre célèbre dinde des
                fêtes, chaque prestation est réalisée avec des ingrédients
                frais, un savoir-faire unique et une attention particulière aux
                détails. Notre objectif : vous offrir des plats savoureux et un
                service fiable, afin que vous puissiez profiter pleinement de
                chaque moment.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
