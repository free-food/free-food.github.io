import type { Restaurant } from "../types";

const wendys: Restaurant = {
  id: "wendys",
  name: "Wendy's",
  deals: [
    {
      title: "Free 10pc Nuggets & Junior Frosty",
      tags: ["free", "rewards"],
      steps: [
        "Sign up for a new rewards account with TempMail.",
        "Wait about five to ten minutes.",
        "Go to offers in app and redeem each.",
        "For nuggets, make a purchase to redeem - buy the cheapest thing on the menu.",
      ],
    },
    {
      title: "Free Frosties & $2 Kids Meals",
      summary: "October only.",
      tags: ["free", "budget", "limited-time"],
      steps: [
        "Buy the Boo Book on the app - five free junior frosties and one $2 kids meal w/ purchase.",
        "To qualify for the $2 kids meal, buy another boo book.",
        "Buy as many as you want during the month; expires at end of year.",
        "Kids meal: small entree (cheeseburger or 4 pc nugget), small refillable drink, small fry, and toy.",
      ],
    },
  ],
};

export default wendys;
