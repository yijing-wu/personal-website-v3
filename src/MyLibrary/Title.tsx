import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

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
  ...rest
}: TitleProps) {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

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
          fontSize: isSmDown ? 16 : 20,
          color: myMintGreen,
          marginRight: 10,
        }}
      >{`0${index}.`}</Text>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: isSmDown ? 22 : isMdDown ? 26 : 32,
          lineHeight: 1,
          marginRight: 20,
        }}
      >
        {content}
      </Text>
      <div
        style={{
          width: isSmDown ? "20%" : "35%",
          height: 1,
          backgroundColor: myMilkYellow30Alpha,
          marginTop: 10,
        }}
      />
    </div>
  );
}
