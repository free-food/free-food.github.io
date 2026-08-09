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

export type NestedBullet =
  | string
  | {
      text: string;
      bullets?: NestedBullet[];
    };

export type Step =
  | string
  | {
      text: string;
      bullets?: NestedBullet[];
    };

export type Deal = {
  title: string;
  summary?: string;
  tags?: Tag[];
  steps?: Step[];
  bullets?: string[];
  links?: Link[];
};

export type Restaurant = {
  /** URL slug - becomes /restaurant/{id}. Use lowercase letters, numbers, hyphens. */
  id: string;
  name: string;
  /** Show on home page featured section */
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
