import type { Restaurant } from "../types";

const popeyes: Restaurant = {
  id: "popeyes",
  name: "Popeye's",
  deals: [
    {
      title: "Free Breast & Wing with Large Drink",
      summary: "Large drink ~$3.50. Breast is pretty big.",
      tags: ["free", "budget"],
      links: [
        { label: "tellpopeyes.com", href: "http://tellpopeyes.com" },
        {
          label: "Alternate survey link",
          href: "https://us-restaurant-momos-io.tailb529a.ts.net/",
        },
      ],
      steps: [
        "Buy something cheap like a single biscuit or one of the special sauces.",
        "On the back of the receipt, fill out the survey at tellpopeyes.com.",
        "Go to the counter with your receipt and the code page open on your phone.",
        "They'll ask white or dark meat, regular or spicy, and which large drink.",
        "Pay for the large drink and get your receipt - reuse within thirty days.",
      ],
    },
  ],
};

export default popeyes;
