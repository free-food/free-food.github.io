import type { Restaurant } from "../types";
import applebees from "./applebees";
import canyonPizza from "./canyon-pizza";
import chilis from "./chilis";
import crackerBarrel from "./cracker-barrel";
import dairyQueen from "./dairy-queen";
import dennys from "./dennys";
import dominos from "./dominos";
import littleCaesars from "./little-caesars";
import pandaExpress from "./panda-express";
import paneraBread from "./panera-bread";
import popeyes from "./popeyes";
import raisingCanes from "./raising-canes";
import tacoBell from "./taco-bell";
import wendys from "./wendys";
import wingsOver from "./wings-over";

/**
 * All restaurants. To add a new one:
 * 1. Copy _template.ts → your-restaurant.ts and fill it in
 * 2. Import it above
 * 3. Add it to the array below (alphabetical by name is nice)
 */
export const restaurants: Restaurant[] = [
  applebees,
  canyonPizza,
  chilis,
  crackerBarrel,
  dairyQueen,
  dennys,
  dominos,
  littleCaesars,
  pandaExpress,
  paneraBread,
  popeyes,
  raisingCanes,
  tacoBell,
  wendys,
  wingsOver,
];
