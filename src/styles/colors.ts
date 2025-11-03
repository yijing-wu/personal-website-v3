// Centralized color tokens
export const colors = {
  myNavy: "#354259",
  myLightNavy: "#3b4860",
  myMintGreen: "#C2DED1",
  myMintGreenC0Alpha: "#C2DED1c0",
  myMilkYellow: "#ECE5C7",
  myMilkYellowC0Alpha: "#ece5c7c0",
  myMilkYellow30Alpha: "#ece5c730",
  myTextLightGrey: "#BABABA",
  myTextGrey: "#9A9A9A",
  myBrown: "#CDC2AE",
} as const;

export type Colors = typeof colors;

// Named exports for convenience (so consumers can import tokens directly)
export const myNavy = colors.myNavy;
export const myLightNavy = colors.myLightNavy;
export const myMintGreen = colors.myMintGreen;
export const myMintGreenC0Alpha = colors.myMintGreenC0Alpha;
export const myMilkYellow = colors.myMilkYellow;
export const myMilkYellowC0Alpha = colors.myMilkYellowC0Alpha;
export const myMilkYellow30Alpha = colors.myMilkYellow30Alpha;
export const myTextLightGrey = colors.myTextLightGrey;
export const myTextGrey = colors.myTextGrey;
export const myBrown = colors.myBrown;
