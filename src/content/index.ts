import content from "../generated/content.json";
import type {
  Restaurant,
  Tag,
  ToolLink,
  SurplusApp,
} from "./types";

export const siteIntro = content.siteIntro;
export const toolLinks = content.toolLinks as ToolLink[];
export const surplusApps = content.surplusApps as SurplusApp[];
export const surplusAppsIntro = content.surplusAppsIntro;
export const allTags = content.allTags as { id: Tag; label: string }[];
export const restaurants = content.restaurants as Restaurant[];

export type {
  Tag,
  Link,
  NestedBullet,
  Step,
  Deal,
  Restaurant,
  ToolLink,
  SurplusApp,
} from "./types";

export {
  getRestaurantById,
  dealMatchesSearch,
  restaurantMatchesSearch,
  restaurantHasTag,
  getFeaturedDeals,
} from "./utils";
