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
        {
          text: "On the back of the receipt there is a link to a survey at tellpopeyes.com",
          bullets: ["See alternate survey link above if needed."],
        },
        "Fill out the survey and get your code.",
        "Go to the counter with your receipt and the page with the code open on your phone.",
        "They will ask you if you want white or dark meat and if you want regular or spicy, as well as which large drink you want.",
        "Pay for the large drink and make sure you get your receipt; you can use this receipt to do the method again as long as you do it within thirty days.",
      ],
    },
  ],
};

export default popeyes;
