import type { Restaurant } from "../types";

const applebees: Restaurant = {
  id: "applebees",
  name: "Applebee's",
  deals: [
    {
      title: "Free Appetizer on Sign-Up",
      summary:
        "Apparently you can get a free appetizer if you sign up for a rewards account.",
      tags: ["free", "rewards", "unverified"],
    },
  ],
};

export default applebees;
