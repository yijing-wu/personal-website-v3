import * as GoogleAnalytics from "../../config/GoogleAnalytics";
import { Button, Text } from "../../components/atoms";
import {
  myTextGrey,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../../styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Contact() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      id="contact"
      style={{
        minHeight: 420,
        textAlign: "center",
        marginLeft: isMdDown ? 24 : 180,
        marginRight: isMdDown ? 24 : 180,
        paddingBottom: isSmDown ? 80 : 100,
        paddingTop: isSmDown ? 80 : 100,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Medium",
          fontSize: isSmDown ? 14 : 16,
          color: myMintGreen,
          marginBottom: 10,
        }}
      >
        {`04. Contact`}
      </Text>

      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: isSmDown ? 40 : 60,
          color: myMilkYellowC0Alpha,
          marginBottom: 10,
        }}
      >
        Get In Touch
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Regular",
          fontSize: isSmDown ? 17 : 20,
          color: myTextGrey,
          marginBottom: 30,
          lineHeight: 1.6,
        }}
      >
        Thank you for taking the time to view my personal website. Whether you
        have any questions or just want to say hi, feel free to contact me!
      </Text>
      <Button
        link={"mailto:yijingwu.w@gmail.com"}
        onClick={() => {
          GoogleAnalytics.logEvent("click-sayhi", "social", "button");
        }}
      >
        {"Say Hi"}
      </Button>
    </div>
  );
}

export default Contact;
