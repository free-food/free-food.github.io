import type { Deal, Restaurant, Tag } from "./types";
import { restaurants } from "./restaurants";

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
