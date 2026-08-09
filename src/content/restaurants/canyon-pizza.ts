import type { Restaurant } from "../types";

const canyonPizza: Restaurant = {
  id: "canyon-pizza",
  name: "Canyon Pizza",
  deals: [
    {
      title: "$6 Combo",
      summary: "Two slices of pizza, canned soda, two huge breadsticks.",
      tags: ["budget"],
      steps: [
        {
          text: "$6 Combo - Two slices of pizza, canned soda, two huge breadsticks",
          bullets: [
            "If you are especially hungry, you can either buy two additional breadsticks for $1 or swap out the breadsticks in the combo for the pepperoni roll ($2 value, doesn't increase price), then spend the $1 extra on two breadsticks (definitely worth the price).",
          ],
        },
      ],
    },
    {
      title: "Deep Dish Pizza",
      summary: "$10, recommended to share.",
      tags: ["budget"],
    },
  ],
};

export default canyonPizza;
