export const ListCardColors = [
  "black",
  "veryDarkGray",
  "darkGray",
  "indigo",
  "darkSlateGray",
  "darkBlue",
  "darkRed",
  "darkSlateBlue",
  "seaGreen",
  "darkOliveGreen",
  "orangeRed",
  "tomato",
  "deepPink",
  "gold",
  "darkOrange",
  "orchid",
  "mediumSlateBlue",
  "hotPink",
  "dodgerBlue",
  "darkTurquoise",
  "slateBlue",
  "steelBlue",
  "cadetBlue",
  "teal",
  "slateGray",
  "rebeccaPurple",
  "blueViolet",
  "chocolate",
  "brown",
  "fireBrick",
  "midnightBlue",
  "mediumBlue",
  "darkCyan",
  "lightSeaGreen",
  "royalBlue",
  "oliveDrab",
  "mediumSeaGreen",
  "forestGreen",
] as const;

export type ListCardColors = (typeof ListCardColors)[number];

export const colorMap: Record<ListCardColors, string> = {
  black: "from-black-600 to-black-400 shadow-black-500/40",
  veryDarkGray:
    "from-veryDarkGray-600 to-veryDarkGray-400 shadow-veryDarkGray-500/40",
  darkGray: "from-darkGray-600 to-darkGray-400 shadow-darkGray-500/40",
  indigo: "from-indigo-600 to-indigo-400 shadow-indigo-500/40",
  darkSlateGray:
    "from-darkSlateGray-600 to-darkSlateGray-400 shadow-darkSlateGray-500/40",
  darkBlue: "from-darkBlue-600 to-darkBlue-400 shadow-darkBlue-500/40",
  darkRed: "from-darkRed-600 to-darkRed-400 shadow-darkRed-500/40",
  darkSlateBlue:
    "from-darkSlateBlue-600 to-darkSlateBlue-400 shadow-darkSlateBlue-500/40",
  seaGreen: "from-seaGreen-600 to-seaGreen-400 shadow-seaGreen-500/40",
  darkOliveGreen:
    "from-darkOliveGreen-600 to-darkOliveGreen-400 shadow-darkOliveGreen-500/40",
  orangeRed: "from-orangeRed-600 to-orangeRed-400 shadow-orangeRed-500/40",
  tomato: "from-tomato-600 to-tomato-400 shadow-tomato-500/40",
  deepPink: "from-deepPink-600 to-deepPink-400 shadow-deepPink-500/40",
  gold: "from-gold-600 to-gold-400 shadow-gold-500/40",
  darkOrange: "from-darkOrange-600 to-darkOrange-400 shadow-darkOrange-500/40",
  orchid: "from-orchid-600 to-orchid-400 shadow-orchid-500/40",
  mediumSlateBlue:
    "from-mediumSlateBlue-600 to-mediumSlateBlue-400 shadow-mediumSlateBlue-500/40",
  hotPink: "from-hotPink-600 to-hotPink-400 shadow-hotPink-500/40",
  dodgerBlue: "from-dodgerBlue-600 to-dodgerBlue-400 shadow-dodgerBlue-500/40",
  darkTurquoise:
    "from-darkTurquoise-600 to-darkTurquoise-400 shadow-darkTurquoise-500/40",
  slateBlue: "from-slateBlue-600 to-slateBlue-400 shadow-slateBlue-500/40",
  steelBlue: "from-steelBlue-600 to-steelBlue-400 shadow-steelBlue-500/40",
  cadetBlue: "from-cadetBlue-600 to-cadetBlue-400 shadow-cadetBlue-500/40",
  teal: "from-teal-600 to-teal-400 shadow-teal-500/40",
  slateGray: "from-slateGray-600 to-slateGray-400 shadow-slateGray-500/40",
  rebeccaPurple:
    "from-rebeccaPurple-600 to-rebeccaPurple-400 shadow-rebeccaPurple-500/40",
  blueViolet: "from-blueViolet-600 to-blueViolet-400 shadow-blueViolet-500/40",
  chocolate: "from-chocolate-600 to-chocolate-400 shadow-chocolate-500/40",
  brown: "from-brown-600 to-brown-400 shadow-brown-500/40",
  fireBrick: "from-fireBrick-600 to-fireBrick-400 shadow-fireBrick-500/40",
  midnightBlue:
    "from-midnightBlue-600 to-midnightBlue-400 shadow-midnightBlue-500/40",
  mediumBlue: "from-mediumBlue-600 to-mediumBlue-400 shadow-mediumBlue-500/40",
  darkCyan: "from-darkCyan-600 to-darkCyan-400 shadow-darkCyan-500/40",
  lightSeaGreen:
    "from-lightSeaGreen-600 to-lightSeaGreen-400 shadow-lightSeaGreen-500/40",
  royalBlue: "from-royalBlue-600 to-royalBlue-400 shadow-royalBlue-500/40",
  oliveDrab: "from-oliveDrab-600 to-oliveDrab-400 shadow-oliveDrab-500/40",
  mediumSeaGreen:
    "from-mediumSeaGreen-600 to-mediumSeaGreen-400 shadow-mediumSeaGreen-500/40",
  forestGreen:
    "from-forestGreen-600 to-forestGreen-400 shadow-forestGreen-500/40",
};
