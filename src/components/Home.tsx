import React from "react";

import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { Button, Text } from "../MyLibrary";
import {
  myTextGrey,
  myMilkYellowC0Alpha,
  myMintGreen,
} from "../MyLibrary/MyColors";
import { myName, myTitle, myBriefIntro } from "../assets/myData";

function Home() {
  return (
    <div
      id="head"
      style={{
        paddingTop: 200,
        paddingBottom: 150,
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
      <Text style={{ fontFamily: "Calibre-Semibold", fontSize: 80 }}>
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
      <div style={{ width: "65%", marginBottom: 30 }}>
        <Text style={{ fontSize: 24, color: myTextGrey, lineHeight: 1.3 }}>
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

export default Home;
