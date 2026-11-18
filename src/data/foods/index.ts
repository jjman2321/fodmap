import type { FoodInput } from "../schema";
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
