/**
 * Copy this file, rename it to your-restaurant.ts, fill in the details,
 * then add an import + entry in index.ts below.
 */
import type { Restaurant } from "../types";

const template: Restaurant = {
  id: "your-restaurant", // URL: /restaurant/your-restaurant
  name: "Your Restaurant",
  featured: false, // set true to show deals on the home page
  deals: [
    {
      title: "Deal Name",
      summary: "Short description shown on cards.",
      tags: ["budget"], // free | budget | rewards | unverified | expired | limited-time
      steps: [
        "Step 1: Do this first.",
        "Step 2: Then do this.",
      ],
      bullets: [
        "Optional tip or note.",
      ],
      links: [
        { label: "Official site", href: "https://example.com" },
      ],
    },
  ],
};

export default template;
