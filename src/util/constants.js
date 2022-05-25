import { createContext } from "react";

// Game status codes

export const gameStatusCodes = ["WIN", "LOSE", "IN_PLAY"];
export const winGameStatusCode = gameStatusCodes[0];
export const loseGameStatusCode = gameStatusCodes[1];
export const inPlayGameStatusCode = gameStatusCodes[2];

// Game status context

export const GameStatusContext = createContext();

// Words and themes

export const themes = ["Fruit", "Country", "School", "Animal"];
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
    "BALD EAGLE",
    "BRACHIOSAURUS",
    "ELECTRIC EEL",
    "FLYING SQURREL",
    "GERMAN SHEPHERD",
    "HAMMERHEAD SHARK",
    "KOMODO DRAGON",
    "MONITOR LIZARD",
    "NAKED MOLE RAT",
  ],
};

// Media Query Properties

export const DesktopProp = {
  headerProp: {
    fontPercentage: 100,
  },
  drawingProp: {
    width: 250,
    height: 300,
  },
  wordProp: {
    fontPercentage: 150,
  },
  keyProp: {
    sideLengthInRem: 2.15,
    fontPercentage: 150,
    marginInPx: 5,
  },
  popupProp: {
    fontPercentage: 100,
  },
};

export const TabletProp = {
  headerProp: {
    fontPercentage: 80,
  },
  drawingProp: {
    width: 200,
    height: 240,
  },
  wordProp: {
    fontPercentage: 125,
  },
  keyProp: {
    sideLengthInRem: 1.8,
    fontPercentage: 127.5,
    marginInPx: 3,
  },
  popupProp: {
    fontPercentage: 85,
  },
};

export const PhoneProp = {
  headerProp: {
    fontPercentage: 70,
  },
  drawingProp: {
    width: 175,
    height: 210,
  },
  wordProp: {
    fontPercentage: 105,
  },
  keyProp: {
    sideLengthInRem: 1.6,
    fontPercentage: 120,
    marginInPx: 2,
  },
  popupProp: {
    fontPercentage: 70,
  },
};
