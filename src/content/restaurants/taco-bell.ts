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
        {
          text: "Go to tacobell.com and make an account using a temporary email address",
          bullets: [
            "This is important, you must do this part on browser or else the reward might not populate.",
          ],
        },
        "Once the account is created, sign into it on the mobile app.",
        "Go to the rewards section and choose your welcome reward.",
        {
          text: "You can get one of the following for completely free:",
          bullets: [
            "2 (small) Chicken Bacon Ranch Chalupas",
            "Beefy 5-Layer Burrito",
            "Cantina Chicken Crispy Taco",
            "Soft Taco",
          ],
        },
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
      steps: [
        {
          text: "Recommended build:",
          bullets: [
            {
              text: "Crunchwrap Supreme",
              bullets: ["Customize → Make it Grilled"],
            },
            {
              text: "Beefy 5-Layer Burrito",
              bullets: ["Customize → Make it Grilled"],
            },
            "Chips and Queso or Cheesy Fiesta Potatoes",
            "Upgrade medium drink to large for only $0.10 extra",
          ],
        },
      ],
    },
    {
      title: "Meal for 2",
      summary: "~$7 per person.",
      tags: ["budget"],
      steps: [
        {
          text: "Meal for 2 - ~$7 per person",
          bullets: [
            "Two Crunchwrap Supreme",
            "Two Bean Burritos",
            "Two Soft Tacos",
            "2 Chips/Queso",
          ],
        },
      ],
    },
  ],
};

export default tacoBell;
