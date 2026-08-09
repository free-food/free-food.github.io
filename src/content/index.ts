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
  siteIntro,
  toolLinks,
  surplusApps,
  surplusAppsIntro,
  allTags,
} from "./site";

export { restaurants } from "./restaurants";

export {
  getRestaurantById,
  dealMatchesSearch,
  restaurantMatchesSearch,
  restaurantHasTag,
  getFeaturedDeals,
} from "./utils";
