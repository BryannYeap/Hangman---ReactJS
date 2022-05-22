import { createContext } from "react";

// Game status codes

export const gameStatusCodes = ["WIN", "LOSE", "IN_PLAY"];
export const winGameStatusCode = gameStatusCodes[0];
export const loseGameStatusCode = gameStatusCodes[1];
export const inPlayGameStatusCode = gameStatusCodes[2];

// Game status context

export const GameStatusContext = createContext();

// Words and themes

export const themes = ["Fruit", "Country", "School"];
export const words = {
  Fruit: [
    "APPLE",
    "BANANA",
    "CHERRY",
    "LEMON",
    "LIME",
    "ORANGE",
    "PEACH",
    "RASPBERRY",
    "STRAWBERRY",
    "WATERMELON",
  ],
  Country: [
    "AUSTRALIA",
    "FINLAND",
    "GERMANY",
    "JAMAICA",
    "MADAGASCAR",
    "PAKISTAN",
    "SINGAPORE",
    "SOUTH AFRICA",
    "SWITZERLAND",
    "ZIMBABWE",
  ],
  School: [
    "ASSEMBLY",
    "CAFETERIA",
    "DETENTION",
    "DISCIPLINE MASTER",
    "HOMEWORK",
    "PHYSICAL EDUCATION",
    "STATIONERY",
    "UNIFORM",
    "VALEDICTORIAN",
  ],
  Animal: [
    "ALLIGATOR",
    "BLUE RINGED OCTOPUS",
    "BRACHIOSAURUS",
    "DADDY LONG LEGS",
    "ELECTRIC EEL",
    "FLYING SQURREL",
    "HAMMERHEAD SHARK",
    "KOMODO DRAGON",
    "MONITOR LIZARD",
    "NAKED MOLE RAT",
  ],
};
