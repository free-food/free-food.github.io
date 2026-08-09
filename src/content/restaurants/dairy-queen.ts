import type { Restaurant } from "../types";

const dairyQueen: Restaurant = {
  id: "dairy-queen",
  name: "Dairy Queen",
  deals: [
    {
      title: "Free Small Milkshake with $1 Purchase",
      summary:
        "Only needs an email (no verification), no real phone number required.",
      tags: ["free", "budget", "rewards"],
      steps: [
        "Add a small milkshake of any flavor to order.",
        "Add two dipping 59¢ sauces (total $1.25).",
        "Click rewards at the top of the menu, select free milkshake, and check out.",
      ],
    },
  ],
};

export default dairyQueen;
