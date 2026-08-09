import type { Restaurant } from "../types";

const wingsOver: Restaurant = {
  id: "wings-over",
  name: "Wings Over",
  deals: [
    {
      title: "Code 6BLPACK - Free Wings & Fries",
      summary:
        "On any new account: free 6-piece boneless wings and one serving of fries (multiple flavors).",
      tags: ["free", "rewards"],
      bullets: [
        "Must redeem with purchase of any other item - cheapest is toasted roll for $1.",
        "Must use real phone number to verify. No VOIP numbers. Cannot reuse the same number, even on a new account.",
      ],
    },
  ],
};

export default wingsOver;
