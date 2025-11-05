// Centralized color tokens
export const colors = {
  // Base colors
  myNavy: "#354259", // Primary background
  myNavyLight: "#3b4860", // Light background / card background
  myBorder: "#505B73", // Divider / border color

  // Text & titles
  myMilkYellow: "#ECE5C7", // Headings / primary text on dark background
  myMilkYellowC0Alpha: "#ece5c7c0",
  myMilkYellow30Alpha: "#ece5c730",
  myTextGrey: "#A8A8A8", // Regular text
  myTextLight: "#BFBFBF", // Secondary / disabled text
  myTextDark: "#2E3A50", // Text on light background

  // Links & accents
  myMintGreen: "#C2DED1", // Link / accent color
  myMintGreenC0Alpha: "#C2DED1c0",
  myMintGreenHover: "#D0E7DC", // Hover state for links

  // Status colors
  mySuccess: "#A8D5A5", // Success state
  myWarning: "#E8D28D", // Warning state
  myError: "#D97D7D", // Error state

  // Gradient
  myGradient1: "linear-gradient(135deg, #354259 0%, #44506B 100%)",
};

export type Colors = typeof colors;

// Named exports for convenience (so consumers can import tokens directly)
// Named exports for convenience — destructured from `colors` so we only need
// to maintain the tokens in one place above.
export const {
  // Base colors
  myNavy,
  myNavyLight,
  myBorder,

  // Text & titles
  myMilkYellow,
  myMilkYellowC0Alpha,
  myMilkYellow30Alpha,
  myTextGrey,
  myTextLight,
  myTextDark,

  // Links & accents
  myMintGreen,
  myMintGreenC0Alpha,
  myMintGreenHover,

  // Status colors
  mySuccess,
  myWarning,
  myError,

  // Gradient
  myGradient1,
} = colors;
