import type { Restaurant } from "../types";

const dominos: Restaurant = {
  id: "dominos",
  name: "Domino's",
  deals: [
    {
      title: "1-Topping Large Pizza for $8",
      summary: "Or medium pan pizza (better) - CARRYOUT ONLY.",
      tags: ["budget"],
    },
    {
      title: "Pick 2 for $6.99 Each",
      tags: ["budget"],
      steps: [
        {
          text: "Pick 2 for $6.99 each",
          bullets: [
            "There are two deals under this same name, both cover mostly the same but one is pizzas only while the other has a few other items you can mix and match.",
          ],
        },
      ],
    },
    {
      title: "Free 16-Piece Parmesan Bread Bites",
      summary: "Every other order.",
      tags: ["free"],
      steps: [
        {
          text: "Every other order you can get a free 16-piece parmesan bread bite",
          bullets: ["You WILL want to get the garlic cup for these."],
        },
      ],
    },
    {
      title: "Well-Done Bake + Square Cut Tip",
      summary:
        "Always order pizza as well-done bake and square cut - if they mess up (not cooking long enough or not square cut), you can get a full refund or coupon for a free pizza.",
      tags: ["free"],
    },
  ],
};

export default dominos;
