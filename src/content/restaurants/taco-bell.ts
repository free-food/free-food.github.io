import type { Restaurant } from "../types";

const tacoBell: Restaurant = {
  id: "taco-bell",
  name: "Taco Bell",
  featured: true,
  deals: [
    {
      title: "Free Food on Account Creation",
      summary: "Nothing required besides temp email.",
      tags: ["free", "rewards"],
      links: [{ label: "tacobell.com", href: "http://tacobell.com" }],
      steps: [
        "Go to tacobell.com and make an account using a temporary email (must do on browser or reward might not populate).",
        "Sign into the account on the mobile app.",
        "Go to rewards and choose your welcome reward.",
        "Pick one for free: 2 Chicken Bacon Ranch Chalupas, Beefy 5-Layer Burrito, Cantina Chicken Crispy Taco, or Soft Taco.",
        "Complete the rest of your order as normal.",
      ],
    },
    {
      title: "Tuesday 5PM Freebie",
      summary:
        "Every Tuesday at 5PM they give away a free or heavily discounted item, often no purchase required.",
      tags: ["free", "limited-time"],
    },
    {
      title: "Build Your Own Luxe Cravings Box",
      summary: "~$7 depending on location.",
      tags: ["budget"],
      bullets: [
        "Crunchwrap Supreme — Customize → Make it Grilled",
        "Beefy 5-Layer Burrito — Customize → Make it Grilled",
        "Chips and Queso or Cheesy Fiesta Potatoes",
        "Upgrade medium drink to large for only $0.10 extra",
      ],
    },
    {
      title: "Meal for 2",
      summary: "~$7 per person.",
      tags: ["budget"],
      bullets: [
        "Two Crunchwrap Supreme",
        "Two Bean Burritos",
        "Two Soft Tacos",
        "2 Chips/Queso",
      ],
    },
  ],
};

export default tacoBell;
