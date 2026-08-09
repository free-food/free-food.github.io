export const siteIntro =
  "Anything with no info means it hasn't been tried yet but will be filled in in the future. Everything here is aimed at a full-on filling meal for $10 or less spent.";

export type Tag =
  | "free"
  | "budget"
  | "rewards"
  | "unverified"
  | "expired"
  | "limited-time";

export type Link = {
  label: string;
  href: string;
};

export type Deal = {
  title: string;
  summary?: string;
  tags?: Tag[];
  steps?: string[];
  bullets?: string[];
  links?: Link[];
};

export type Restaurant = {
  id: string;
  name: string;
  featured?: boolean;
  deals: Deal[];
};

export type ToolLink = {
  id: string;
  name: string;
  description?: string;
  href: string;
};

export type SurplusApp = {
  id: string;
  name: string;
  description?: string;
};

export const toolLinks: ToolLink[] = [
  {
    id: "temp-mail",
    name: "Temporary Email",
    description: "Useful for signing up for rewards accounts without cluttering your inbox.",
    href: "https://temp-mail.org",
  },
  {
    id: "birthday-freebies",
    name: "Birthday Rewards",
    description: "Up-to-date birthday freebies — also other good things on that site.",
    href: "https://www.heyitsfree.net/birthday-freebies/",
  },
];

export const surplusApps: SurplusApp[] = [
  {
    id: "too-good-to-go",
    name: "Too Good To Go",
    description:
      "Highly depends on the area — stores give out unsold food at end of day. Can be hit or miss on if it's food you like, but usually pretty cheap. Works better in cities.",
  },
  { id: "res-q-club", name: "Res-Q Club" },
  { id: "foodsi", name: "Foodsi" },
  { id: "karma", name: "Karma — Save Food With a Tap" },
  { id: "olio", name: "Olio" },
  { id: "flashfood", name: "Flashfood" },
  { id: "foodhero", name: "FoodHero" },
  { id: "misfits-market", name: "Misfits Market" },
];

export const surplusAppsIntro =
  "Stores and restaurants give you a random assortment of unsold food to eat that day. Below are some apps to check out:";

export const restaurants: Restaurant[] = [
  {
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
  },
  {
    id: "canyon-pizza",
    name: "Canyon Pizza",
    deals: [
      {
        title: "$6 Combo",
        summary: "Two slices of pizza, canned soda, two huge breadsticks.",
        tags: ["budget"],
        bullets: [
          "If you are especially hungry, buy two additional breadsticks for $1, or swap the combo breadsticks for the pepperoni roll ($2 value, doesn't increase price), then spend the $1 extra on two breadsticks (definitely worth the price).",
        ],
      },
      {
        title: "Deep Dish Pizza",
        summary: "$10, recommended to share.",
        tags: ["budget"],
      },
    ],
  },
  {
    id: "chilis",
    name: "Chili's",
    deals: [
      {
        title: "Free Chips & Salsa Every Visit",
        summary:
          "No need to churn accounts — sign into your account on the checkout tablet for free chips & salsa on every visit.",
        tags: ["free", "rewards"],
      },
    ],
  },
  {
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
          "Make up a random phone number and remember it — no SMS verification needed.",
          "Option 1: Pay at register and type in phone number when asked if you are part of rewards program.",
          "Option 2: Scan QR on receipt to pay at table, go to rewards section and apply the reward at checkout.",
        ],
      },
    ],
  },
  {
    id: "dairy-queen",
    name: "Dairy Queen",
    deals: [
      {
        title: "Free Small Milkshake with $1 Purchase",
        summary:
          "Only needs an email (no verification), no real phone number required.",
        tags: ["free", "budget", "rewards"],
        steps: [
          "Add a small milkshake of any flavor to order.",
          "Add two dipping 59¢ sauces (total $1.25).",
          "Click rewards at the top of the menu, select free milkshake, and check out.",
        ],
      },
    ],
  },
  {
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
  },
  {
    id: "dominos",
    name: "Domino's",
    deals: [
      {
        title: "1-Topping Large Pizza for $8",
        summary: "Or medium pan pizza (better) — CARRYOUT ONLY.",
        tags: ["budget"],
      },
      {
        title: "Pick 2 for $6.99 Each",
        tags: ["budget"],
        bullets: [
          "There are two deals under this same name — one pizzas only, the other has a few other items you can mix and match.",
        ],
      },
      {
        title: "Free 16-Piece Parmesan Bread Bites",
        summary: "Every other order.",
        tags: ["free"],
        bullets: ["You WILL want to get the garlic cup for these."],
      },
      {
        title: "Well-Done Bake + Square Cut Tip",
        summary:
          "Always order pizza as well-done bake and square cut — if they mess up (not cooking long enough or not square cut), you can get a full refund or coupon for a free pizza.",
        tags: ["free"],
      },
    ],
  },
  {
    id: "little-caesars",
    name: "Little Caesar's",
    deals: [
      {
        title: "More for $9.99 Menu",
        summary: "Decent amount of food for a decent price.",
        tags: ["budget"],
        bullets: ["Always check the LTO section as well."],
      },
    ],
  },
  {
    id: "panda-express",
    name: "Panda Express",
    deals: [
      {
        title: "25% Off First Order",
        summary:
          "Make a rewards account — Plate ~$7.75, Bigger Plate ~$8.95.",
        tags: ["budget", "rewards"],
      },
      {
        title: "Wednesday Game Coupon",
        summary:
          "Every Wednesday play a game for a coupon with free/discounted food.",
        tags: ["free", "limited-time"],
      },
    ],
  },
  {
    id: "panera-bread",
    name: "Panera Bread",
    featured: true,
    deals: [
      {
        title: "Unlimited Free Drinks — Sip Club Trial",
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
          "Type in the code (3MOSIPS — expired; will update if new code comes out).",
          "Total should drop to zero; you may still need to enter your card (cancel before it rolls over).",
          "Once a Sip Club member, click rewards → redeem free beverage.",
        ],
      },
      {
        title: "Free Pastry/Sweet with Any Purchase",
        tags: ["free", "rewards"],
        steps: [
          "Create a new account — no verification code needed, use random email and phone.",
          "Best value: Buy a cinnamon crunch bagel (sliced and toasted w/ butter) and redeem a Kitchen Sink cookie. Total ~$2.",
        ],
      },
    ],
  },
  {
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
          "Pay for the large drink and get your receipt — reuse within thirty days.",
        ],
      },
    ],
  },
  {
    id: "raising-canes",
    name: "Raising Cane's",
    deals: [
      {
        title: "Free Box Meal on Sign-Up",
        summary:
          "Apparently you can get a free Box Meal within a few days of signing up.",
        tags: ["free", "rewards", "unverified"],
      },
    ],
  },
  {
    id: "taco-bell",
    name: "Taco Bell",
    featured: true,
    deals: [
      {
        title: "Free Food on Account Creation",
        summary: "Nothing required besides temp email.",
        tags: ["free", "rewards"],
        links: [{ label: "tacobell.com", href: "http://tacobell.com" }],
        steps: [
          "Go to tacobell.com and make an account using a temporary email (must do on browser or reward might not populate).",
          "Sign into the account on the mobile app.",
          "Go to rewards and choose your welcome reward.",
          "Pick one for free: 2 Chicken Bacon Ranch Chalupas, Beefy 5-Layer Burrito, Cantina Chicken Crispy Taco, or Soft Taco.",
          "Complete the rest of your order as normal.",
        ],
      },
      {
        title: "Tuesday 5PM Freebie",
        summary:
          "Every Tuesday at 5PM they give away a free or heavily discounted item, often no purchase required.",
        tags: ["free", "limited-time"],
      },
      {
        title: "Build Your Own Luxe Cravings Box",
        summary: "~$7 depending on location.",
        tags: ["budget"],
        bullets: [
          "Crunchwrap Supreme — Customize → Make it Grilled",
          "Beefy 5-Layer Burrito — Customize → Make it Grilled",
          "Chips and Queso or Cheesy Fiesta Potatoes",
          "Upgrade medium drink to large for only $0.10 extra",
        ],
      },
      {
        title: "Meal for 2",
        summary: "~$7 per person.",
        tags: ["budget"],
        bullets: [
          "Two Crunchwrap Supreme",
          "Two Bean Burritos",
          "Two Soft Tacos",
          "2 Chips/Queso",
        ],
      },
    ],
  },
  {
    id: "wendys",
    name: "Wendy's",
    deals: [
      {
        title: "Free 10pc Nuggets & Junior Frosty",
        tags: ["free", "rewards"],
        steps: [
          "Sign up for a new rewards account with TempMail.",
          "Wait about five to ten minutes.",
          "Go to offers in app and redeem each.",
          "For nuggets, make a purchase to redeem — buy the cheapest thing on the menu.",
        ],
      },
      {
        title: "Free Frosties & $2 Kids Meals",
        summary: "October only.",
        tags: ["free", "budget", "limited-time"],
        steps: [
          "Buy the Boo Book on the app — five free junior frosties and one $2 kids meal w/ purchase.",
          "To qualify for the $2 kids meal, buy another boo book.",
          "Buy as many as you want during the month; expires at end of year.",
          "Kids meal: small entree (cheeseburger or 4 pc nugget), small refillable drink, small fry, and toy.",
        ],
      },
    ],
  },
  {
    id: "wings-over",
    name: "Wings Over",
    deals: [
      {
        title: "Code 6BLPACK — Free Wings & Fries",
        summary:
          "On any new account: free 6-piece boneless wings and one serving of fries (multiple flavors).",
        tags: ["free", "rewards"],
        bullets: [
          "Must redeem with purchase of any other item — cheapest is toasted roll for $1.",
          "Must use real phone number to verify. No VOIP numbers. Cannot reuse the same number, even on a new account.",
        ],
      },
    ],
  },
];

export const allTags: { id: Tag; label: string }[] = [
  { id: "free", label: "Free" },
  { id: "budget", label: "Under $10" },
  { id: "rewards", label: "Rewards signup" },
  { id: "unverified", label: "Unverified" },
  { id: "expired", label: "Expired" },
  { id: "limited-time", label: "Limited time" },
];

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}

export function dealMatchesSearch(deal: Deal, query: string): boolean {
  const q = query.toLowerCase();
  const parts = [
    deal.title,
    deal.summary,
    ...(deal.steps ?? []),
    ...(deal.bullets ?? []),
  ];
  return parts.some((p) => p?.toLowerCase().includes(q));
}

export function restaurantMatchesSearch(
  restaurant: Restaurant,
  query: string,
): boolean {
  const q = query.toLowerCase();
  if (restaurant.name.toLowerCase().includes(q)) return true;
  return restaurant.deals.some((d) => dealMatchesSearch(d, q));
}

export function restaurantHasTag(restaurant: Restaurant, tag: Tag): boolean {
  return restaurant.deals.some((d) => d.tags?.includes(tag));
}

export function getFeaturedDeals(): { restaurant: Restaurant; deal: Deal }[] {
  const results: { restaurant: Restaurant; deal: Deal }[] = [];
  for (const restaurant of restaurants) {
    if (!restaurant.featured) continue;
    for (const deal of restaurant.deals) {
      if (!deal.tags?.includes("expired")) {
        results.push({ restaurant, deal });
      }
    }
  }
  return results.slice(0, 6);
}
