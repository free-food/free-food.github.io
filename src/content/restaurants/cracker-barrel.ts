import type { Restaurant } from "../types";

const crackerBarrel: Restaurant = {
  id: "cracker-barrel",
  name: "Cracker Barrel",
  featured: true,
  deals: [
    {
      title: "Any Shareable for Free",
      summary: "Any shareable menu item for free via rewards signup.",
      tags: ["free", "rewards"],
      links: [
        {
          label: "Shareables menu",
          href: "https://www.crackerbarrel.com/menu/shareables#",
        },
      ],
      steps: [
        {
          text: "Create a new email with TempMail",
          bullets: ["Account requires email verification code."],
        },
        {
          text: "Make up a random phone number and remember it",
          bullets: [
            "You don't need to get SMS verification so you can use any number.",
          ],
        },
        {
          text: "How to redeem",
          bullets: [
            "Option 1: pay at register and type in phone number when they ask if you are part of rewards program.",
            "Option 2: scan QR on receipt to pay at table and you can redeem reward directly from checkout, just make sure to go to the rewards section and apply it.",
          ],
        },
      ],
    },
  ],
};

export default crackerBarrel;
