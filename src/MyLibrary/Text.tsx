import React from "react";

import { myMilkYellow } from "./MyColors";

export interface TextProps {
  isHeading?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Text({
  isHeading = false,
  style,
  children,
  ...rest
}: TextProps) {
  const textStyle = {
    margin: 0,
    padding: 0,
    color: myMilkYellow,
    fontFamily: "Calibre-Regular",
    size: 20,
  };

  return (
    <div {...rest} style={{ ...textStyle, ...style }}>
      {children}
    </div>
  );
}
