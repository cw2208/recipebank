// Recipe data for the UW Food Pantry recipe finder.
// Source: "Recipe Cards" by Chris Jaehne.
//
// Each recipe lists its ingredients twice:
//   - `ingredients`: the full, human-readable list (with amounts) shown on the card.
//   - `keywords`: simplified, lowercase ingredient names used for searching, so a
//     pantry visitor can type "beans" or "rice" and match the right recipes.

const recipes = [
  {
    id: "breakfast-quesadilla",
    title: "Breakfast Quesadilla",
    time: "25 minutes",
    cooking: "Stove Required",
    nutrition: "Good source of fiber and iron",
    ingredients: [
      "1/2 cup grated cheddar cheese",
      "2 eggs",
      "2 tsp butter",
      "1 medium tortilla",
      "1/3 cup cooked black beans",
      "1 tbsp chopped green onion",
      "1 tbsp chopped cilantro",
      "Hot sauce (optional)",
      "Salt",
    ],
    keywords: [
      "cheddar cheese", "cheese", "eggs", "butter", "tortilla",
      "black beans", "beans", "green onion", "onion", "cilantro",
      "hot sauce", "salt",
    ],
    directions: [
      "Whisk eggs, hot sauce, and salt in a bowl. Add cooked beans.",
      "Melt butter in a skillet over medium heat. Pour in the mixture and scramble for 1-3 minutes, or until the egg is set. Remove from heat and stir in green onion and cilantro.",
      "In a separate skillet, warm the tortilla over medium heat, flipping occasionally. Once warm, top one half with cheese, scrambled eggs, and more cheese.",
      "Press the empty tortilla half over the cheese and eggs. Cook both sides for 1-2 minutes, or until golden and crispy.",
      "Remove from the skillet and let the quesadilla cool. Serve with salsa, jalapeños, or hot sauce.",
    ],
  },
  {
    id: "orange-cream-parfait",
    title: "Orange Cream Parfait",
    time: "5 minutes",
    cooking: "No Cooking",
    nutrition: "Sweet dessert with calcium and vitamin C",
    ingredients: [
      "Orange fruit cup",
      "Vanilla yogurt",
      "Cheerios",
    ],
    keywords: [
      "orange fruit cup", "orange", "fruit cup", "vanilla yogurt",
      "yogurt", "cheerios", "cereal",
    ],
    directions: [
      "Drain the cup of oranges.",
      "In a small glass, spoon in yogurt. Top with oranges and cereal. Repeat the layering until you reach the amount you want.",
      "Enjoy!",
    ],
    tips: [
      "Substitute the yogurt with vanilla ice cream.",
      "Upgrade your parfait by adding oats, granola, honey, nuts, chia seeds, or more fruit.",
    ],
  },
  {
    id: "creamy-green-beans",
    title: "Creamy Green Beans",
    time: "20 minutes",
    cooking: "Stove Required",
    nutrition: "Good source of vitamins",
    ingredients: [
      "2 cans green beans (14.5 oz each)",
      "2 tbsp butter",
      "2 tbsp cream cheese",
      "Salt",
      "Pepper",
    ],
    keywords: [
      "green beans", "beans", "butter", "cream cheese", "cheese",
      "salt", "pepper",
    ],
    directions: [
      "Drain 3/4 of the water from the canned green beans.",
      "Add the beans to a saucepan over medium heat. Once boiling, reduce the heat and simmer for 10 minutes.",
      "Add butter and cream cheese to the saucepan. Stir for 3-5 minutes, or until well melted.",
      "Season with salt and pepper.",
    ],
    tips: [
      "Customize your dish by adding bacon bits, onions, garlic, ham, or flavored cream cheese.",
    ],
  },
  {
    id: "red-beans-and-rice",
    title: "Red Beans and Rice",
    time: "40 minutes",
    cooking: "Stove Required",
    nutrition: "Rich in fiber, protein, and iron",
    ingredients: [
      "1 cup cooked rice",
      "16 oz sliced sausage",
      "2 cups water",
      "1 chopped onion",
      "1 chopped bell pepper",
      "1 chopped clove garlic",
      "30 oz cooked red beans",
      "1/2 tsp oregano",
      "1/2 tsp pepper",
      "Salt",
      "1 can peeled tomatoes (16 oz)",
    ],
    keywords: [
      "rice", "sausage", "water", "onion", "bell pepper", "pepper",
      "garlic", "red beans", "beans", "oregano", "salt", "tomatoes",
      "canned tomatoes",
    ],
    directions: [
      "Chop the canned tomatoes.",
      "In a skillet, cook the sausage slices over low heat for 5 minutes.",
      "Add onions, bell peppers, and garlic. Sauté until tender.",
      "Add the beans and tomatoes with their juice. Season with oregano, pepper, and salt.",
      "Simmer, uncovered, for 20 minutes.",
      "Serve over rice.",
    ],
  },
  {
    id: "sweet-italian-green-beans",
    title: "Sweet Italian Green Beans",
    time: "25 minutes",
    cooking: "Stove Required",
    nutrition: "Low calorie and high in vitamin C",
    ingredients: [
      "2 cans green beans (15 oz each)",
      "1 can diced tomatoes (15 oz)",
      "4 slices bacon",
      "2 cloves garlic",
      "3 green onions",
      "1/4 cup brown sugar",
      "1 pinch dried basil",
      "1 pinch dried oregano",
    ],
    keywords: [
      "green beans", "beans", "diced tomatoes", "tomatoes", "bacon",
      "garlic", "green onions", "onion", "brown sugar", "sugar",
      "basil", "oregano",
    ],
    directions: [
      "Cook the sliced bacon in a skillet over medium heat until crisp. Remove from the skillet and drain on paper towels.",
      "Keep the grease in the skillet and add chopped green onions. Stir over medium heat until softened.",
      "Add chopped garlic and cook for about 30 seconds.",
      "Drain the canned green beans. Combine green beans, diced tomatoes, basil, oregano, and brown sugar in a saucepan. Crumble in the bacon and add the onions and garlic from the skillet.",
      "Warm the mixture over medium heat for about 10 minutes.",
    ],
  },
];
