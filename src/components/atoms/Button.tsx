import React from "react";
import MUIButton from "@mui/material/Button";
import type { ButtonProps as MUIButtonProps } from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { myMintGreen } from "../../styles/colors";

// Extend the MUI Button props with a couple of convenience props used in the codebase
export interface ButtonProps extends Omit<MUIButtonProps, "color"> {
  buttonPrimaryColor?: string; // hex color to use as primary/main in theme
  fontSize?: number;
  // `link` is a convenience prop used across the codebase as an alias
  // for `href` (useful for mailto: links).
  link?: string;
}

export default function Button({
  buttonPrimaryColor = myMintGreen,
  fontSize = 14,
  children,
  style,
  sx,
  link,
  ...rest
}: ButtonProps) {
  const buttonTheme = createTheme({
    palette: {
      primary: {
        main: buttonPrimaryColor,
      },
    },
  });

  return (
    <ThemeProvider theme={buttonTheme}>
      <MUIButton
        variant={rest.variant ?? "outlined"}
        {...(rest as MUIButtonProps)}
        href={link ?? (rest as MUIButtonProps).href}
        onClick={rest.onClick}
        sx={{
          fontFamily: "SFMono-Regular",
          fontSize: fontSize,
          ...(sx as object),
        }}
        style={{ ...(style as React.CSSProperties) }}
      >
        {children}
      </MUIButton>
    </ThemeProvider>
  );
}
