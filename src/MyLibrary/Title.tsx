import React from "react";

import { myMilkYellow30Alpha, myMintGreen } from "./MyColors";
import Text from "./Text";

export interface TitleProps {
  index?: number;
  content?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Title({
  index = 1,
  content,
  style,
  children,
  ...rest
}: TitleProps) {
  const titleStyle = {
    margin: 0,
    padding: 0,
    display: "flex",
  };

  return (
    <div {...rest} style={{ ...titleStyle, ...style }}>
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          fontSize: 20,
          color: myMintGreen,
          marginRight: 10,
        }}
      >{`0${index}.`}</Text>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 32,
          lineHeight: 0.9,
          marginRight: 20,
        }}
      >
        {content}
      </Text>
      <div
        style={{
          width: "35%",
          height: 1,
          backgroundColor: myMilkYellow30Alpha,
          marginTop: 10,
        }}
      />
    </div>
  );
}
