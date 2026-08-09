import type { Restaurant } from "../types";

const paneraBread: Restaurant = {
  id: "panera-bread",
  name: "Panera Bread",
  featured: true,
  deals: [
    {
      title: "Unlimited Free Drinks - Sip Club Trial",
      summary: "3-month free trial of Sip Club Membership. Expired, for now.",
      tags: ["free", "expired", "rewards"],
      links: [
        {
          label: "Sip Club registration",
          href: "https://www.panerabread.com/en-us/app/subscription/1/registration-flow.html",
        },
      ],
      steps: [
        "Click Join with Email (works on new accounts, maybe any account that hasn't paid before).",
        "Use your actual phone number and email since it lasts three months.",
        "Click create account.",
        "Make sure the $5/month for 3 months plan is selected.",
        "Scroll to Promo Code under Payment Terms, click the pencil.",
        "Type in the code (3MOSIPS - expired; will update if new code comes out).",
        "Total should drop to zero; you may still need to enter your card (cancel before it rolls over).",
        "Once a Sip Club member, click rewards → redeem free beverage.",
      ],
    },
    {
      title: "Free Pastry/Sweet with Any Purchase",
      tags: ["free", "rewards"],
      steps: [
        "Create a new account - no verification code needed, use random email and phone.",
        "Best value: Buy a cinnamon crunch bagel (sliced and toasted w/ butter) and redeem a Kitchen Sink cookie. Total ~$2.",
      ],
    },
  ],
};

export default paneraBread;
