import type { Tag, ToolLink, SurplusApp } from "./types";

export const siteIntro =
  "Anything with no info means it hasn't been tried yet but will be filled in in the future. Everything here is aimed at a full-on filling meal for $10 or less spent.";

export const toolLinks: ToolLink[] = [
  {
    id: "temp-mail",
    name: "Temporary Email",
    description:
      "Useful for signing up for rewards accounts without cluttering your inbox.",
    href: "https://temp-mail.org",
  },
  {
    id: "temp-number",
    name: "Temporary Phone Number",
    description:
      "Useful for rewards signups that ask for a phone number you won't need long-term.",
    href: "https://temp-number.com/countries/united-states",
  },
  {
    id: "birthday-freebies",
    name: "Birthday Rewards",
    description:
      "Up-to-date birthday freebies - also other good things on that site.",
    href: "https://www.heyitsfree.net/birthday-freebies/",
  },
];

export const surplusAppsIntro =
  "Stores and restaurants give you a random assortment of unsold food to eat that day. Below are some apps to check out:";

export const surplusApps: SurplusApp[] = [
  {
    id: "too-good-to-go",
    name: "Too Good To Go",
    description:
      "Highly depends on the area - stores give out unsold food at end of day. Can be hit or miss on if it's food you like, but usually pretty cheap. Works better in cities.",
  },
  { id: "res-q-club", name: "Res-Q Club" },
  { id: "foodsi", name: "Foodsi" },
  { id: "karma", name: "Karma - Save Food With a Tap" },
  { id: "olio", name: "Olio" },
  { id: "flashfood", name: "Flashfood" },
  { id: "foodhero", name: "FoodHero" },
  { id: "misfits-market", name: "Misfits Market" },
];

export const allTags: { id: Tag; label: string }[] = [
  { id: "free", label: "Free" },
  { id: "budget", label: "Under $10" },
  { id: "rewards", label: "Rewards signup" },
  { id: "unverified", label: "Unverified" },
  { id: "expired", label: "Expired" },
  { id: "limited-time", label: "Limited time" },
];
