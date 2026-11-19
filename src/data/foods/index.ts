import type { FoodInput } from "../schema";
import generated from "../generated/foods.json";
import avocado from "./avocado";
import chickpeas from "./chickpeas";
import feta from "./feta";
import garlic from "./garlic";
import hummus from "./hummus";
import lentils from "./lentils";
import pomegranate from "./pomegranate";
import strawberries from "./strawberries";
import sweetPotato from "./sweet-potato";
import tahini from "./tahini";

// One file per food. Every number cites sources in ../sources.ts (research: research/food-facts/).
export const FOODS_RAW: FoodInput[] = [avocado, chickpeas, feta, garlic, hummus, lentils, pomegranate, strawberries, sweetPotato, tahini];

// M2 foods, imported from research/m2 by scripts/import-m2.ts (validated there and again at build).
export const ALL_FOODS_RAW: FoodInput[] = [...FOODS_RAW, ...(generated as FoodInput[])];
