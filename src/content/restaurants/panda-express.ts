import type { Restaurant } from "../types";

const pandaExpress: Restaurant = {
  id: "panda-express",
  name: "Panda Express",
  deals: [
    {
      title: "25% Off First Order",
      summary: "Make a rewards account — Plate ~$7.75, Bigger Plate ~$8.95.",
      tags: ["budget", "rewards"],
    },
    {
      title: "Wednesday Game Coupon",
      summary:
        "Every Wednesday play a game for a coupon with free/discounted food.",
      tags: ["free", "limited-time"],
    },
  ],
};

export default pandaExpress;
