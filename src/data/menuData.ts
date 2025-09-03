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
            description:
              "Poulet Épicé, Tortilla, Laitue - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "macaroni-fromage",
            title: "Macaroni Au Fromage",
            description:
              "Macaroni, Fromage Cheddar, Lait - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "riz-blanc",
            title: "Riz Blanc",
            description:
              "Légumes Sauté, Poulet Créole - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "salade-betterave",
            title: "Salade De Betterave, Petit Pain",
            description: "Betterave, Petit Pain - Servi avec jus et dessert",
            price: "$10",
          },
        ],
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
            description:
              "Pain, Fromage Suisse, Beurre - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "spaghetti-saucisse",
            title: "Spaghetti À La Saucisse Végétale",
            description:
              "Spaghetti, Saucisse Végétale, Sauce Tomate - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "riz-brun-boulette",
            title: "Riz Brun Boulette",
            description:
              "Riz Brun, Boulettes De Viande, Sauce - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "salade-verte",
            title: "Salade Verte",
            description:
              "Laitue, Concombre, Tomates - Servi avec jus et dessert",
            price: "$10",
          },
        ],
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
            description:
              "Pain Sous-Marin, Boeuf Haché, Fromage - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "macaroni-gratine-boeuf",
            title: "Macaroni Gratiné Au Boeuf",
            description:
              "Macaroni, Boeuf Haché, Sauce Tomate - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "riz-noir-champignon",
            title: "Riz Noir Au Champignon",
            description:
              "Riz Noir, Champignons, Ail - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "salade-patate",
            title: "Salade De Patate, Petit Pain",
            description: "Patates, Petit Pain - Servi avec jus et dessert",
            price: "$10",
          },
        ],
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
            description:
              "Pain, Aubergine Grillée, Boeuf Haché - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "pate-chinois-boeuf",
            title: "Pâté Chinois Au Boeuf",
            description:
              "Boeuf Haché, Maïs En Crème - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "quinoa",
            title: "Quinoa",
            description:
              "Boeuf Sauté, Légumes Diversifiés - Servi avec jus et dessert",
            price: "$10",
          },
          {
            id: "salade-aubergine",
            title: "Salade D&apos;aubergine, Pain Pita",
            description: "Aubergine, Pain Pita - Servi avec jus et dessert",
            price: "$10",
          },
        ],
      },
    ],
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
            price: "$10",
          },
          {
            id: "pain-patate",
            title: "Pain de patate créole",
            description: "Patates douces, sucre, beurre",
            price: "$10",
          },
          {
            id: "gateau-carotte",
            title: "Gâteau de carotte et gingembre",
            description: "Carottes râpées, gingembre frais",
            price: "$10",
          },
          {
            id: "gateau-fromage",
            title: "Gâteau au fromage",
            description: "Fromage frais (type cream cheese)",
            price: "$10",
          },
        ],
      },
    ],
  },
  jus: {
    title: "Jus",
    sections: [
      {
        id: "jus-naturels",
        title: "JUS NATURELS",
        image: "/Menu/StrawberryJus.jpg",
        imageAlt: "Jus frais et naturels",
        items: [
          {
            id: "jus-ananas",
            title: "Jus d'Ananas",
            description: "Jus d'ananas frais pressé",
            price: "$5",
          },
          {
            id: "jus-goyave",
            title: "Jus de Goyave",
            description: "Jus de goyave frais pressé",
            price: "$5",
          },
          {
            id: "jus-gimgembre",
            title: "Jus de Gimgembre",
            description: "Jus de gimgembre frais pressé",
            price: "$5",
          },
        ],
      },
    ],
  },
  poutine: {
    title: "Poutine",
    sections: [
      {
        id: "poutines",
        title: "POUTINES",
        image: "/Menu/ChillyFries.jpg",
        imageAlt: "Délicieuses poutines créoles",
        items: [
          {
            id: "poutine-boeuf",
            title: "Poutine au Tassot de Bœuf",
            description: "Frites, fromage, tassot de bœuf mariné",
            price: "$15",
          },
          {
            id: "poutine-cabri",
            title: "Poutine au Tassot de Cabri",
            description: "Frites, fromage, tassot de cabri (chèvre)",
            price: "$15",
          },
          {
            id: "poutine-poulet",
            title: "Poutine au Poulet et Saucisse Épicé",
            description: "Frites, fromage, poulet et saucisse épicée",
            price: "$15",
          },
        ],
      },
    ],
  },
  pitaHamburger: {
    title: "Pita et Hamburger",
    sections: [
      {
        id: "pita-hamburger",
        title: "PITA ET HAMBURGER",
        image: "/Menu/BurgerWithFries.jpg",
        imageAlt: "Choix de viandes pour pita et hamburger",
        items: [
          {
            id: "pita-poulet",
            title: "Pita au Poulet",
            description: "Pain pita, poulet grillé, légumes frais",
            price: "$12",
          },
          {
            id: "hamburger-boeuf",
            title: "Hamburger au Bœuf",
            description: "Pain hamburger, bœuf haché, fromage",
            price: "$12",
          },
          {
            id: "pita-vegetal",
            title: "Pita Végétal",
            description: "Pain pita, viande végétale, légumes",
            price: "$12",
          },
          {
            id: "hamburger-poisson",
            title: "Hamburger au Poisson",
            description: "Pain hamburger, poisson frais, sauce tartare",
            price: "$12",
          },
        ],
      },
    ],
  },
  weekendFritail: {
    title: "Weekend Fritail",
    sections: [
      {
        id: "fritail-viandes-1",
        title: "FRITAIL WEEKEND",
        image: "/Menu/CroissantPicnic.jpg",
        imageAlt: "Fritaille du weekend avec accompagnements créoles",
        items: [
          {
            id: "fritail-boulette-boeuf",
            title: "Fritail Boulette de Bœuf",
            description:
              "Boulette de bœuf - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$18",
          },
          {
            id: "fritail-aile-poulet",
            title: "Fritail Aile de Poulet",
            description:
              "Aile de poulet - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$16",
          },
          {
            id: "fritail-poulet",
            title: "Fritail Poulet",
            description:
              "Poulet frit - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$16",
          },
          {
            id: "fritail-tassot-boeuf",
            title: "Fritail Tassot de Bœuf",
            description:
              "Tassot de bœuf - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$20",
          },
        ],
      },
      {
        id: "fritail-viandes-2",
        title: "FRITAIL WEEKEND",
        image: "/Menu/SweetHome.jpg",
        imageAlt: "Fritaille du weekend avec accompagnements créoles",
        items: [
          {
            id: "fritail-tassot-chevre",
            title: "Fritail Tassot de Chèvre",
            description:
              "Tassot de chèvre - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$20",
          },
          {
            id: "fritail-poisson",
            title: "Fritail Poisson",
            description:
              "Poisson frit - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$18",
          },
          {
            id: "fritail-griot-dinde",
            title: "Fritail Griot de Dinde",
            description:
              "Griot de dinde - Servi avec banane plantain, accra, marinade, patate douce, pikliz, sauce vierge",
            price: "$19",
          },
        ],
      },
    ],
  },
  epices: {
    title: "Épices Pump Fourchette",
    sections: [
      {
        id: "epices-mariner",
        title: "ÉPICES POUR MARINER",
        image: "/Menu/Epice.jpg",
        imageAlt: "Épices traditionnelles créoles",
        items: [
          {
            id: "epices-viande",
            title: "Épices pour Mariner la Viande",
            description:
              "Mélange d'épices traditionnelles pour mariner toutes viandes",
            price: "$8",
          },
          {
            id: "epices-poisson",
            title: "Épices pour Mariner le Poisson",
            description: "Mélange d'épices spéciales pour mariner le poisson",
            price: "$8",
          },
        ],
      },
    ],
  },
  saisonsFetes: {
    title: "Saisons des Fêtes",
    sections: [
      {
        id: "dinde-fetes",
        title: "DINDES DES FÊTES",
        image: "/Menu/ChickenDinner.jpg",
        imageAlt: "Dinde préparée pour les fêtes",
        items: [
          {
            id: "dinde-orange",
            title: "Dinde à l'Orange",
            description:
              "Dinde rôtie à l'orange - Servi avec riz national (riz pois brun) et salade verte",
            price: "$35",
          },
          {
            id: "dinde-ananas",
            title: "Dinde à l'Ananas",
            description:
              "Dinde rôtie à l'ananas - Servi avec riz national (riz pois brun) et salade verte",
            price: "$35",
          },
          {
            id: "dinde-traditionnel",
            title: "Dinde Traditionnel",
            description:
              "Dinde rôtie traditionnel - Servi avec riz national (riz pois brun) et salade verte",
            price: "$32",
          },
        ],
      },
    ],
  },
  kremas: {
    title: "Kremas",
    sections: [
      {
        id: "kremas-desserts",
        title: "KRÉMAS CRÉOLES",
        image: "/Menu/Cream.jpg",
        imageAlt: "Délicieux kremas créoles",
        items: [
          {
            id: "kremas-grenadia",
            title: "Kremas Grenadia",
            description:
              "Kremas à la grenadine - Servi avec biscuits au beurre",
            price: "$12",
          },
          {
            id: "kremas-traditionel",
            title: "Kremas Traditionel",
            description:
              "Kremas traditionnel créole - Servi avec biscuits au beurre",
            price: "$10",
          },
        ],
      },
    ],
  },
  plateauDivers: {
    title: "Plateau Diverses",
    sections: [
      {
        id: "plateaux-divers-1",
        title: "PLATEAUX DIVERS",
        image: "/Menu/TooMuchFood1.jpg",
        imageAlt: "Assortiment de plateaux créoles",
        items: [
          {
            id: "plateau-cornet-boeuf",
            title: "Plateau de Cornet au Bœuf",
            description: "Délicieux cornet farci au bœuf haché",
            price: "$14",
          },
          {
            id: "plateau-cornet-morrue",
            title: "Plateau de Cornet à la Morrue",
            description: "Cornet farci à la morue salée",
            price: "$16",
          },
          {
            id: "plateau-chou-creme",
            title: "Plateau de Chou à la Crème",
            description: "Chou farci à la crème et épices",
            price: "$12",
          },
          {
            id: "plateau-kibbi",
            title: "Plateau de Kibbi",
            description: "Boulettes de viande et boulgour croustillantes",
            price: "$15",
          },
        ],
      },
      {
        id: "plateaux-divers-2",
        title: "PLATEAUX DIVERS",
        image: "/Menu/TooMuchFood2.jpg",
        imageAlt: "Assortiment de plateaux créoles",
        items: [
          {
            id: "chiktail-hareng",
            title: "Chiktail à l'Hareng",
            description: "Chiktail préparé avec hareng fumé",
            price: "$18",
          },
          {
            id: "chicktail-morrue",
            title: "Chicktail à la Morrue",
            description: "Chicktail à la morue salée",
            price: "$17",
          },
          {
            id: "tartare-saumon",
            title: "Tartare de Saumon Épicé",
            description: "Saumon frais épicé façon créole",
            price: "$22",
          },
          {
            id: "kenep-tremper",
            title: "Kenep Tremper (Alcoolisé)",
            description: "Kenep trempé dans l'alcool traditionnel",
            price: "$25",
          },
        ],
      },
    ],
  },
};

export const getMenuConfig = (menuType: string = 'ecole'): MenuConfig => {
  return menuConfigs[menuType] || menuConfigs.ecole;
};
