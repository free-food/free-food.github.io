import type { Restaurant } from "../types";

const dennys: Restaurant = {
  id: "dennys",
  name: "Denny's",
  deals: [
    {
      title: "Free Welcome Reward",
      summary: "Currently prone to breakage - I wouldn't use it right now for more than one or two items",
      tags: ["free", "rewards", "unverified"],
      bullets: [
        "Free welcome reward when you sign up for account.",
        "Can get any side for free with reward - this includes a large amount of menu items.",
      ],
    },
  ],
};

export default dennys;
