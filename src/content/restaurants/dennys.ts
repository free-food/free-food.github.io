import type { Restaurant } from "../types";

const dennys: Restaurant = {
  id: "dennys",
  name: "Denny's",
  deals: [
    {
      title: "Free Welcome Reward",
      summary: "Needs more investigation.",
      tags: ["free", "rewards", "unverified"],
      bullets: [
        "Free welcome reward when you sign up for account.",
        "Can get any side for free with reward — stack of pancakes is best value.",
      ],
    },
  ],
};

export default dennys;
