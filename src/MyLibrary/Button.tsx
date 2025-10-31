import React from "react";

import MUIButton from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { myMintGreen } from "./MyColors";

export interface ButtonProps {
  buttonPrimaryColor?: string;
  link?: string;
  fontSize?: number;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  buttonPrimaryColor = myMintGreen,
  link,
  fontSize = 14,
  children,
  onClick,
}: ButtonProps) {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: buttonPrimaryColor,
      },
      secondary: {
        main: "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={buttonTheme}>
      <MUIButton
        variant="outlined"
        onClick={onClick ? onClick : () => {}}
        href={link}
        style={{
          fontFamily: "SFMono-Regular",
          fontSize: fontSize,
        }}
      >
        {children}
      </MUIButton>
    </ThemeProvider>
  );
}
