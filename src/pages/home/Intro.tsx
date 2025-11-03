import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Text } from "../../components/atoms";
import { myTextGrey, myMintGreen } from "../../styles/colors";
import { myName, myBriefIntro } from "../../assets/myData";

export default function Intro() {
  const theme = useTheme();
  const isTabletDown = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="head"
      style={{
        paddingTop: isMobile ? 120 : isTabletDown ? 160 : 200,
        paddingBottom: isMobile ? 100 : isTabletDown ? 120 : 150,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          marginBottom: 30,
          color: myMintGreen,
        }}
      >
        Hi, this is
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: isMobile ? 48 : isTabletDown ? 64 : 80,
          lineHeight: 1.05,
          paddingBottom: 20,
        }}
      >
        {myName}
      </Text>
      {/* <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 80,
          color: myMilkYellowC0Alpha,
        }}
      >
        {myTitle}
      </Text> */}
      <div
        style={{
          width: isTabletDown ? "100%" : "65%",
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: isMobile ? 18 : 24,
            color: myTextGrey,
            lineHeight: 1.5,
          }}
        >
          {myBriefIntro}
        </Text>
      </div>
      {/* Resume: updated on Sep 4th, 2023 */}
      {/* <Button
        onClick={() => {
          // window.open(
          //   "https://drive.google.com/file/d/1U-nazBTQMz54kme54UCse3lFwpQVe7gY/view?usp=sharing",
          //   "_blank"
          // );
          window.open(
            process.env.PUBLIC_URL + "/Yijing_Wu_Resume.pdf",
            "_blank"
          );
          GoogleAnalytics.logEvent("click-resume", "click-resume", "button");
        }}
      >
        <div style={{ padding: 5, fontSize: 15 }}>{"RESUME"}</div>
      </Button> */}
    </div>
  );
}
