import React from "react";

import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { Button, Text } from "../MyLibrary";
import {
  myTextGrey,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";

function Contact() {
  return (
    <div
      id="contact"
      style={{
        height: 500,
        textAlign: "center",
        marginLeft: 180,
        marginRight: 180,
      }}
    >
      <Text
        style={{
          fontFamily: "SFMono-Medium",
          fontSize: 16,
          color: myMintGreen,
          marginBottom: 10,
        }}
      >
        {`04. Contact`}
      </Text>

      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 60,
          color: myMilkYellowC0Alpha,
          marginBottom: 10,
        }}
      >
        Get In Touch
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Regular",
          fontSize: 20,
          color: myTextGrey,
          marginBottom: 30,
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
