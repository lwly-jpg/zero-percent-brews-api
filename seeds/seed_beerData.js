const data = [
  {
    image: '',
    title: 'Adnams Ghost Ship Bottle Beer 0.5%',
    brand: 'Adnams',
    abv: '0.5',
    calories: '23',
    type: 'Ale',
    ingredients: 'Water, Malted Barley, Malted Rye, Hops, Yeast',
    country: 'UK',
    volume: '500',
    description: 'An un-boo-lievably crisp taste. Will raise your spirits if shipwrecked.',
    reviews: [
      {
        author: "alastair",
        body: "Makes me smile!"
      },
      {
        author: "joe",
        body: "Is this vegan? Unsure..."
      }
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Bavaria 0.0% Beer',
    brand: 'Bavaria',
    abv: '0',
    calories: '24',
    type: 'Lager',
    ingredients:
      'Natural Mineral Water, Barley Malt, Glucose Syrup, Hop Extract, Flavouring',
    country: 'Netherlands',
    volume: '330',
    description: 'Definitely not the Wurst. You do not need a Wiesn to try this.',
    reviews: [
      {
        author: "adon",
        body: "Light and refreshing. Just my cuppa beer."
      },
      {
        author: "Tom",
        body: "Goes well with a cheese and pickle sandwich. No mayo."
      }
    ],
    rating: {
      overall: 3,
      taste: 4,
      value: 3,
      realness: 3
    }
  },
  {
    image: '',
    title: 'Becks Blue Alcohol Free',
    brand: 'Becks',
    abv: '0.05',
    calories: '14',
    type: 'Lager',
    ingredients: 'Water, Barley Malt, Hops, Yeast',
    country: 'Germany',
    volume: '330',
    description: 'You don\'t have to be Posh to love a Becks.',
    reviews: [
      {
        author: "Alastair",
        body: "I drink this on the way home from my corporate job."
      },
      {
        author: "Tom",
        body: "Too mainstream for my liking. They were better when independently owned."
      }
    ],
    rating: {
      overall: 3,
      taste: 2,
      value: 3,
      realness: 2
    }
  },
  {
    image: '',
    title: 'Big Drop Brewing Paradiso Citra Ipa',
    brand: 'Big Drop Brewing Co.',
    abv: '0.5',
    calories: '18.5',
    type: 'Ale',
    ingredients: 'Water, Barley, Oats, Wheat, Lactose (Milk) Hops, Yeast',
    country: 'UK',
    volume: '330',
    description: 'Citrusy undertones. Crisp taste. Will not leave you feeling bitter.',
    reviews: [
      {
        author: "Adon",
        body: "Not usually a fan of fruity beers but this is okay."
      },
      {
        author: "Joe",
        body: "Big Drop? More like Big Flop."
      }
    ],
    rating: {
      overall: 2,
      taste: 2,
      value: 1,
      realness: 4
    }
  },
  {
    image: '',
    title: 'Birra Moretti Zero',
    brand: 'Birra Moretti',
    abv: '0',
    calories: '20',
    type: 'Lager',
    ingredients: 'Water, Barley Malt, Hop, Hop Extract, Natural Flavouring',
    country: 'Italy',
    volume: '330',
    description: 'Quality beer, authentic Italian taste.',
    reviews: [
      {
        author: "Tom",
        body: "Love me a Moretti I do. Glad they do a 0% one now"
      },
      {
        author: "Joe",
        body: "Brilliant beer. No complaints. I promise."
      }
    ],
    rating: {
      overall: 5,
      taste: 5,
      value: 4,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Brewdog Punk Af',
    brand: 'Brewdog',
    abv: '0.5',
    calories: '15',
    type: 'Ale',
    ingredients:
      'Water, Lactose (Milk), Malted Barley, Hops, Yeast, Malted Oats, Malted Wheat, Lactic Acid',
    country: 'UK',
    volume: '330',
    description: 'For the mainstream beer rebels who love to conform against the grain.',
    reviews: [
      {
        author: "Adon",
        body: "This one is a little strong for me. I felt tipsy after one."
      },
      {
        author: "Alastair",
        body: "Nice and chill. Like me."
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 4,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Brooklyn Alcohol Free Hoppy Lager',
    brand: 'Brooklyn',
    abv: '0.4',
    calories: '29',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Hops',
    country: 'EU',
    volume: '330',
    description: 'Pale caramel notes, with a piney finish.',
    reviews: [
      {
        author: "Alastair",
        body: "I'm American and I don't even know if this is from Brooklyn?!"
      },
      {
        author: "Joe",
        body: "This is quite nice."
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 3,
      realness: 4
    }
  },
  {
    image: '',
    title: 'Corona Cero Alcohol Free',
    brand: 'Corona',
    abv: '0',
    calories: '56',
    type: 'Lager',
    ingredients: 'Water, Barley Malt, Maize, Sugar, Hops, Natural Flavours',
    country: 'Belgium',
    volume: '330',
    description: 'Quench your cerveza cravings with a crip Corona Cero.',
    reviews: [
      {
        author: "Tom",
        body: "Perfect for a warm summer sesh."
      },
      {
        author: "Adon",
        body: "Light and refreshing. Lovely."
      }
    ],
    rating: {
      overall: 5,
      taste: 5,
      value: 5,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Doom Bar Zero Amber Ale',
    brand: 'Doom Bar',
    abv: '0',
    calories: '13',
    type: 'Ale',
    ingredients:
      'Water, Malted Barley, Sugar, Oats, Hops and Hop Extracts, Antioxidant: Ascorbic Acid, Natural Flavours',
    country: 'UK',
    volume: '500',
    description: 'Perfectly balanced beer with a subtle taste',
    reviews: [
      {
        author: "Joe",
        body: "Shocking. Never again"
      },
      {
        author: "alastair",
        body: "I am a nice person but can't think of something positive to say."
      }
    ],
    rating: {
      overall: 2,
      taste: 2,
      value: 2,
      realness: 2
    }
  },
  {
    image: '',
    title: 'Erdinger Alkoholfrei Grapefruit',
    brand: 'Erdinger',
    abv: '0.3',
    calories: '25',
    type: 'Wheat beer',
    ingredients:
      '50% Erdinger Alkoholfrei (Water, Wheat Malt, Barley Malt, Hops, Yeast, Carbon Dioxide), 50% Refreshment Drink with Grapefruit',
    country: 'Germany',
    volume: '330',
    description: 'Freshingly good after a light jog on a warm summer\'s day.',
    reviews: [
      {
        author: "Tom",
        body: "A New Gen Beer."
      },
      {
        author: "Adon",
        body: "Once tried it after Berlin half marathon, it was nice but also free..."
      }
    ],
    rating: {
      overall: 3,
      taste: 3,
      value: 3,
      realness: 3
    }
  },
  {
    image: '',
    title: 'Free Damm Lager',
    brand: 'Free Damm',
    abv: '0',
    calories: '20',
    type: 'Lager',
    ingredients:
      'Water, Barley Malt (8%), Maize, Glucose and Fructose Syrup, Rice, Hops',
    country: 'Spain',
    volume: '330',
        description: 'Brewed in Barcelona with top quality ingredients.',
    reviews: [
      {
        author: "Adon",
        body: "Perfect on a beach in Barcelona"
      },
      {
        author: "Joe",
        body: "This one is alright!"
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 5,
      realness: 4
    }
  },
  {
    image: '',
    title: 'Heineken 0.0 Alcohol Free Lager',
    brand: 'Heineken',
    abv: '0.05',
    calories: '21',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Hop Extract, Natural Flavourings',
    country: 'Scotland',
    volume: '330',
        description: 'Fruity and refreshing malt notes. Incredibly light and refreshing.',
    reviews: [
      {
        author: "alastair",
        body: "it is definitely better than they used to make it years ago"
      },
      {
        author: "Tom",
        body: "Fruiiiiiiiitty and freeeeeeshhh."
      }
    ],
    rating: {
      overall: 3,
      taste: 3,
      value: 3,
      realness: 4
    }
  },
  {
    image: '',
    title: 'Kopparberg Alcohol Free Pear Cider',
    brand: 'Kopparberg',
    abv: '0.05',
    calories: '42',
    type: 'Cider',
    ingredients:
      'Carbonated Water, Fermented Pears, Pear Juice, Sugar, Acidifier (Citric Acid), Flavouring, Preservative (Potassium Sorbate), Antioxidant (E224/Sulphites)',
    country: 'Sweden',
    volume: '500',
    description: 'Sweet and revitalising, refreshingly pear.',
    reviews: [
      {
        author: "alastair",
        body: "I drink at least two a day"
      },
      {
        author: "Joe",
        body: "I prefer the strawberry"
      }
    ],
    rating: {
      overall: 3,
      taste: 5,
      value: 3,
      realness: 3
    }
  },
  {
    image: '',
    title: 'Kopparberg Cider Plus Strawberry & Lime Alcohol Free',
    brand: 'Kopparberg',
    abv: '0.05',
    calories: '41',
    type: 'Cider',
    ingredients:
      'Carbonated Water, Fermented Apples, Juice (Apple, Strawberry, Elderberry & Lime), Sugar, Flavouring, Acid (Citric Acid), Preservative (Potassium Sorbate), Antioxidant (E224/Sulphites)',
    country: 'Sweden',
    volume: '500',
    description: 'A delicious mix of raspberry and blackcurrant',
    reviews: [
      {
        author: "Joe",
        body: "Could do with more strawberry"
      },
      {
        author: "Adon",
        body: "Tastes like fizzy pop"
      }
    ],
    rating: {
      overall: 4,
      taste: 3,
      value: 3,
      realness: 3
    }
  },
  {
    image: '',
    title: 'Kopparberg Mixed Fruit Alcohol Free',
    brand: 'Kopparberg',
    abv: '0.05',
    calories: '38',
    type: 'Cider',
    ingredients:
      'Carbonated Water, Fermented Apples, Juice (Apple, Blackcurrant, Elderberry, Raspberry), Sugar, Acidifier (Citric Acid), Flavouring, Preservative (Potassium Sorbate)',
    country: 'Sweden',
    volume: '500',
    description: 'A delicious mix of raspberry and blackcurrant',
    reviews: [
      {
        author: "Adon",
        body: "Quite sweet but it's nice"
      },
      {
        author: "alastair",
        body: "Lovely lovely lovely"
      }
    ],
    rating: {
      overall: 3,
      taste: 3,
      value: 3,
      realness: 3
    }
  },
  {
    image: '',
    title: 'Leffe Blonde 0% Alcohol Free Beer',
    brand: 'Leffe',
    abv: '0',
    calories: '40',
    type: 'Beer',
    ingredients:
      'Water, Barley Malt, Maize, Barley, Sugar, Hops, Natural Aromas',
    country: 'Belgium',
    volume: '250',
    description: 'Rich, fruity notes and full of character',
    reviews: [
      {
        author: "Joe",
        body: "Nice but you need it in the right glass"
      },
      {
        author: "alastair",
        body: "reminds me of Belgium"
      }
    ],
    rating: {
      overall: 5,
      taste: 4,
      value: 4,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Lucky Saint 0.5%',
    brand: 'Lucky Saint',
    abv: '0.5',
    calories: '16',
    type: 'Beer',
    ingredients: 'Water, Barley, Yeast, Hops',
    country: 'Germany',
    volume: '330',
    description: 'Not for the Saint-Hearted. Bavarianly biscuity taste.',
    reviews: [
      {
        author: "Adon",
        body: "This is one of my faves. Gets me a bit tipsy!"
      },
      {
        author: "Joe",
        body: "One of my go to brands now."
      }
    ],
    rating: {
      overall: 5,
      taste: 5,
      value: 4,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Peroni Nastro Azzurro 0.0%',
    brand: 'Peroni',
    abv: '0.05',
    calories: '23',
    type: 'Beer',
    ingredients: 'Water, Barley Malt, Italian Maize, Hops, Natural Flavours',
    country: 'Italy',
    volume: '330',
    description: 'TEXT',
    reviews: [
      {
        author: "alastair",
        body: "i love this beer!!"
      }
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    }
  },
  {
    image: '',
    title: 'San Miguel 0.0%',
    brand: 'San Miguel',
    abv: '0',
    calories: '24',
    type: 'Beer',
    ingredients: 'Water, Barley Malt, Hops, Flavourings',
    country: 'Spain',
    volume: '330',
    description: 'TEXT',
    reviews: [
      {
        author: "alastair",
        body: "i love this beer!!"
      }
    ],
    rating: {
      overall: 4,
      taste: 5,
      value: 3,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Shipyard Low Tide Pale Ale',
    brand: 'Shipyard',
    abv: '0.5',
    calories: '17',
    type: 'Ale',
    ingredients: 'Water, Barley, Wheat, Hops, Milk (Lactose), Yeast',
    country: 'UK',
    volume: '500',
    description: 'The tide might be low but this will raise your spirits!',
    reviews: [
      {
        author: "Joe",
        body: "Great for a pale ale"
      },
      {
        author: "alastair",
        body: "niceeeee"
      }
    ],
    rating: {
      overall: 4,
      taste: 4,
      value: 4,
      realness: 5
    }
  },
  {
    image: '',
    title: 'Stella Artois Premium Alcohol Free Lager',
    brand: 'Stella Artois',
    abv: '0',
    calories: '18',
    type: 'Lager',
    ingredients: 'Water, Malted Barley, Hops, Sugar, Natural Flavours',
    country: 'Belgium',
    volume: '330',
    description: 'Hoppy, refreshing and no where',
    reviews: [
      {
        author: "Tom",
        body: "Nice nice nice"
      },
      {
        author: "Adon",
        body: "Not a huge fan"
      }
    ],
    rating: {
      overall: 3,
      taste: 4,
      value: 2,
      realness: 4
    }
  },
  {
    image: '',
    title: 'Thatchers Zero Somerset Cider',
    brand: 'Thatchers',
    abv: '0.05',
    calories: '47',
    type: 'Cider',
    ingredients: 'Cider apples',
    country: 'UK',
    volume: '500',
    description: 'Medium-dry taste, bursting with appley goodness.',
    reviews: [
      {
        author: "Adon",
        body: "Lovely on a summer's evening!"
      },
      {
        author: "Tom",
        body: "Chillllllllll"
      }
    ],
    rating: {
      overall: 4,
      taste: 3,
      value: 4,
      realness: 4
    }
  },
];

module.exports = data;