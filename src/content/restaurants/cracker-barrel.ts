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
        "Create a new email with TempMail (account requires email verification code).",
        "Make up a random phone number and remember it - no SMS verification needed.",
        "Option 1: Pay at register and type in phone number when asked if you are part of rewards program.",
        "Option 2: Scan QR on receipt to pay at table, go to rewards section and apply the reward at checkout.",
      ],
    },
  ],
};

export default crackerBarrel;
