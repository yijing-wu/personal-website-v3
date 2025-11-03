import React from "react";
import { myTextLightGrey } from "../../styles/colors";

export interface HighlightProps<T extends React.ElementType = "span"> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Highlight<T extends React.ElementType = "span">({
  as,
  children,
  className,
  style,
}: HighlightProps<T>) {
  const Comp = (as || ("span" as unknown)) as React.ElementType;
  const baseStyle: React.CSSProperties = {
    display: "inline",
    fontFamily: "Calibre-Medium",
    color: myTextLightGrey,
  };

  return (
    <Comp className={className} style={{ ...baseStyle, ...style }}>
      {children}
    </Comp>
  );
}
