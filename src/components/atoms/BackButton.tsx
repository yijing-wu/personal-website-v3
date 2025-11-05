import { useNavigate } from "react-router-dom";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import { myMintGreen } from "../../styles/colors";
import Text from "./Text";
import Button from "./Button";

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
}: BackButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      style={{
        margin: 0,
        padding: 0,
        color: myMintGreen,
        fontFamily: "Calibre-Regular",
        backgroundColor: "transparent",
        display: "flex",
        border: "none",
        cursor: "pointer",
        ...(style ?? {}),
      }}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <ArrowBackIosNewOutlinedIcon style={{ fontSize: 15, marginRight: 6 }} />
      <Text
        className="underline-animation"
        style={{
          fontSize: isHeading ? 18 : 16,
          color: myMintGreen,
          paddingTop: 3,
        }}
      >
        {children ?? "Back"}
      </Text>
    </Button>
  );
}
