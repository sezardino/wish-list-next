export const ListColors = [
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

export type ListColors = (typeof ListColors)[number];

export const ListColorsBackgroundMap: Record<ListColors, string> = {
  black: "bg-gradient-to-tr from-black to-black shadow-black/40",
  veryDarkGray:
    "bg-gradient-to-tr from-veryDarkGray to-veryDarkGray shadow-veryDarkGray/40",
  darkGray: "bg-gradient-to-tr from-darkGray to-darkGray shadow-darkGray/40",
  indigo: "bg-gradient-to-tr from-indigo to-indigo shadow-indigo/40",
  darkSlateGray:
    "bg-gradient-to-tr from-darkSlateGray to-darkSlateGray shadow-darkSlateGray/40",
  darkBlue: "bg-gradient-to-tr from-darkBlue to-darkBlue shadow-darkBlue/40",
  darkRed: "bg-gradient-to-tr from-darkRed to-darkRed shadow-darkRed/40",
  darkSlateBlue:
    "bg-gradient-to-tr from-darkSlateBlue to-darkSlateBlue shadow-darkSlateBlue/40",
  seaGreen: "bg-gradient-to-tr from-seaGreen to-seaGreen shadow-seaGreen/40",
  darkOliveGreen:
    "bg-gradient-to-tr from-darkOliveGreen to-darkOliveGreen shadow-darkOliveGreen/40",
  orangeRed:
    "bg-gradient-to-tr from-orangeRed to-orangeRed shadow-orangeRed/40",
  tomato: "bg-gradient-to-tr from-tomato to-tomato shadow-tomato/40",
  deepPink: "bg-gradient-to-tr from-deepPink to-deepPink shadow-deepPink/40",
  gold: "bg-gradient-to-tr from-gold to-gold shadow-gold/40",
  darkOrange:
    "bg-gradient-to-tr from-darkOrange to-darkOrange shadow-darkOrange/40",
  orchid: "bg-gradient-to-tr from-orchid to-orchid shadow-orchid/40",
  mediumSlateBlue:
    "bg-gradient-to-tr from-mediumSlateBlue to-mediumSlateBlue shadow-mediumSlateBlue/40",
  hotPink: "bg-gradient-to-tr from-hotPink to-hotPink shadow-hotPink/40",
  dodgerBlue:
    "bg-gradient-to-tr from-dodgerBlue to-dodgerBlue shadow-dodgerBlue/40",
  darkTurquoise:
    "bg-gradient-to-tr from-darkTurquoise to-darkTurquoise shadow-darkTurquoise/40",
  slateBlue:
    "bg-gradient-to-tr from-slateBlue to-slateBlue shadow-slateBlue/40",
  steelBlue:
    "bg-gradient-to-tr from-steelBlue to-steelBlue shadow-steelBlue/40",
  cadetBlue:
    "bg-gradient-to-tr from-cadetBlue to-cadetBlue shadow-cadetBlue/40",
  teal: "bg-gradient-to-tr from-teal to-teal shadow-teal/40",
  slateGray:
    "bg-gradient-to-tr from-slateGray to-slateGray shadow-slateGray/40",
  rebeccaPurple:
    "bg-gradient-to-tr from-rebeccaPurple to-rebeccaPurple shadow-rebeccaPurple/40",
  blueViolet:
    "bg-gradient-to-tr from-blueViolet to-blueViolet shadow-blueViolet/40",
  chocolate:
    "bg-gradient-to-tr from-chocolate to-chocolate shadow-chocolate/40",
  brown: "bg-gradient-to-tr from-brown to-brown shadow-brown/40",
  fireBrick:
    "bg-gradient-to-tr from-fireBrick to-fireBrick shadow-fireBrick/40",
  midnightBlue:
    "bg-gradient-to-tr from-midnightBlue to-midnightBlue shadow-midnightBlue/40",
  mediumBlue:
    "bg-gradient-to-tr from-mediumBlue to-mediumBlue shadow-mediumBlue/40",
  darkCyan: "bg-gradient-to-tr from-darkCyan to-darkCyan shadow-darkCyan/40",
  lightSeaGreen:
    "bg-gradient-to-tr from-lightSeaGreen to-lightSeaGreen shadow-lightSeaGreen/40",
  royalBlue:
    "bg-gradient-to-tr from-royalBlue to-royalBlue shadow-royalBlue/40",
  oliveDrab:
    "bg-gradient-to-tr from-oliveDrab to-oliveDrab shadow-oliveDrab/40",
  mediumSeaGreen:
    "bg-gradient-to-tr from-mediumSeaGreen to-mediumSeaGreen shadow-mediumSeaGreen/40",
  forestGreen:
    "bg-gradient-to-tr from-forestGreen to-forestGreen shadow-forestGreen/40",
};

export const tailwindListColors: Record<ListColors, string> = {
  black: "#000000",
  veryDarkGray: "#1A1A1A",
  darkGray: "#333333",
  indigo: "#4B0082",
  darkSlateGray: "#2F4F4F",
  darkBlue: "#00008B",
  darkRed: "#8B0000",
  darkSlateBlue: "#483D8B",
  seaGreen: "#2E8B57",
  darkOliveGreen: "#556B2F",
  orangeRed: "#FF4500",
  tomato: "#FF6347",
  deepPink: "#FF1493",
  gold: "#FFD700",
  darkOrange: "#FF8C00",
  orchid: "#DA70D6",
  mediumSlateBlue: "#7B68EE",
  hotPink: "#FF69B4",
  dodgerBlue: "#1E90FF",
  darkTurquoise: "#00CED1",
  slateBlue: "#6A5ACD",
  steelBlue: "#4682B4",
  cadetBlue: "#5F9EA0",
  teal: "#008080",
  slateGray: "#708090",
  rebeccaPurple: "#663399",
  blueViolet: "#8A2BE2",
  chocolate: "#D2691E",
  brown: "#A52A2A",
  fireBrick: "#B22222",
  midnightBlue: "#191970",
  mediumBlue: "#0000CD",
  darkCyan: "#008B8B",
  lightSeaGreen: "#20B2AA",
  royalBlue: "#4169E1",
  oliveDrab: "#6B8E23",
  mediumSeaGreen: "#3CB371",
  forestGreen: "#228B22",
};
