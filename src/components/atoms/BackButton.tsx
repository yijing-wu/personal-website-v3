import { useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import { myMintGreen, myNavy } from "../../styles/colors";
import Text from "./Text";

export interface BackButtonProps {
  isHeading?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function BackButton({
  isHeading = false,
  style,
  children,
  ...rest
}: BackButtonProps) {
  const backButtonStyle = {
    margin: 0,
    padding: 0,
    color: myMintGreen,
    fontFamily: "Calibre-Regular",
    backgroundColor: myNavy,
    display: "flex",
    border: "none",
    cursor: "pointer",
  };

  const navigate = useNavigate();

  return (
    <button
      {...rest}
      style={{ ...backButtonStyle, ...style }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewOutlinedIcon style={{ fontSize: 15, marginRight: 3 }} />
      <Text
        className="underline-animation"
        style={{ fontSize: isHeading ? 18 : 16, color: myMintGreen }}
      >
        {children ?? "Back"}
      </Text>
    </button>
  );
}
