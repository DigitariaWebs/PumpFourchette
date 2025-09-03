export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
  image: string;
  imageAlt: string;
}

export interface MenuConfig {
  title: string;
  sections: MenuSection[];
}

export const menuConfigs: Record<string, MenuConfig> = {
  ecole: {
    title: "Menu École",
    sections: [
      {
        id: "semaine1",
        title: "SEMAINE 1",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Macaroni au fromage",
        items: [
          {
            id: "wrap-poulet",
            title: "Wrap Au Poulet Épicé",
            description: "Poulet Épicé, Tortilla, Laitue",
            price: "$10"
          },
          {
            id: "macaroni-fromage",
            title: "Macaroni Au Fromage",
            description: "Macaroni, Fromage Cheddar, Lait",
            price: "$10"
          },
          {
            id: "riz-blanc",
            title: "Riz Blanc",
            description: "Légumes Sauté, Poulet Créole",
            price: "$10"
          },
          {
            id: "salade-betterave",
            title: "Salade De Betterave, Petit Pain",
            description: "A Short Description And Price",
            price: "$10"
          }
        ]
      },
      {
        id: "semaine2",
        title: "SEMAINE 2",
        image: "/Menu/Sandwitch.jpg",
        imageAlt: "Sandwich au fromage suisse",
        items: [
          {
            id: "sandwich-fromage",
            title: "Sandwich Au Fromage Suisse",
            description: "Pain, Fromage Suisse, Beurre",
            price: "$10"
          },
          {
            id: "spaghetti-saucisse",
            title: "Spaghetti À La Saucisse Végétale",
            description: "Spaghetti, Saucisse Végétale, Sauce Tomate",
            price: "$10"
          },
          {
            id: "riz-brun-boulette",
            title: "Riz Brun Boulette",
            description: "Riz Brun, Boulettes De Viande, Sauce",
            price: "$10"
          },
          {
            id: "salade-verte",
            title: "Salade Verte",
            description: "Laitue, Concombre, Tomates",
            price: "$10"
          }
        ]
      },
      {
        id: "semaine3",
        title: "SEMAINE 3",
        image: "/Menu/ChikenBreast.jpg",
        imageAlt: "Plat principal avec viande",
        items: [
          {
            id: "sous-marin-boeuf",
            title: "Sous Marin Au Boeuf",
            description: "Pain Sous-Marin, Boeuf Haché, Fromage",
            price: "$10"
          },
          {
            id: "macaroni-gratine-boeuf",
            title: "Macaroni Gratiné Au Boeuf",
            description: "Macaroni, Boeuf Haché, Sauce Tomate",
            price: "$10"
          },
          {
            id: "riz-noir-champignon",
            title: "Riz Noir Au Champignon",
            description: "Riz Noir, Champignons, Ail",
            price: "$10"
          },
          {
            id: "salade-patate",
            title: "Salade De Patate, Petit Pain",
            description: "A Short Description And Price",
            price: "$10"
          }
        ]
      },
      {
        id: "semaine4",
        title: "SEMAINE 4",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Salade quinoa aux légumes",
        items: [
          {
            id: "sandwich-aubergine",
            title: "Sandwich D&apos;aubergine Et Boeuf",
            description: "Pain, Aubergine Grillée, Boeuf Haché",
            price: "$10"
          },
          {
            id: "pate-chinois-boeuf",
            title: "Pâté Chinois Au Boeuf",
            description: "Boeuf Haché, Maïs En Crème",
            price: "$10"
          },
          {
            id: "quinoa",
            title: "Quinoa",
            description: "Boeuf Sauté, Légumes Diversifiés",
            price: "$10"
          },
          {
            id: "salade-aubergine",
            title: "Salade D&apos;aubergine, Pain Pita",
            description: "A Short Description And Price",
            price: "$10"
          }
        ]
      }
    ]
  },
  desserts: {
    title: "Desserts",
    sections: [
      {
        id: "gateaux",
        title: "GÂTEAUX",
        image: "/Menu/BerriesCheeseCake.jpg",
        imageAlt: "Beautiful cheesecake with berries",
        items: [
          {
            id: "gateau-ananas",
            title: "Gâteau renversé à l'ananas et cerise",
            description: "Ananas au sirop, cerises confites",
            price: "$10"
          },
          {
            id: "pain-patate",
            title: "Pain de patate créole",
            description: "Patates douces, sucre, beurre",
            price: "$10"
          },
          {
            id: "gateau-carotte",
            title: "Gâteau de carotte et gingembre",
            description: "Carottes râpées, gingembre frais",
            price: "$10"
          },
          {
            id: "gateau-fromage",
            title: "Gâteau au fromage",
            description: "Fromage frais (type cream cheese)",
            price: "$10"
          }
        ]
      }
    ]
  }
};

export const getMenuConfig = (menuType: string = 'ecole'): MenuConfig => {
  return menuConfigs[menuType] || menuConfigs.ecole;
};
