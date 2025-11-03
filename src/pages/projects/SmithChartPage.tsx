import { useLayoutEffect } from "react";
import { smithChart } from "../../assets/projectsData";

import { BackButton, Text } from "../../components/atoms";
import { myTextGrey, myMilkYellow } from "../../styles/colors";

export default function SmithChartPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="project-page">
      <BackButton />
      <h1 style={{ color: myMilkYellow, marginTop: 30, marginBottom: 30 }}>
        Smith Chart Tool
      </h1>

      <Text style={{ fontSize: 20, color: myTextGrey, marginTop: 10 }}>
        <div>{smithChart.description}</div>
      </Text>

      <br />

      <div style={{ display: "flex" }}>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/y--zI1X6_XY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ margin: "auto" }}
        />
      </div>
      <Text style={{ paddingTop: 30, fontSize: 20, color: myTextGrey }}>
        <p>
          Smith Chart is a graphical calculator or nomogram designed for
          electrical and electronics engineers specializing in radio frequency
          (RF) engineering to assist in solving problems with transmission lines
          and matching circuits.
        </p>
        <p>
          According to the relationship between impedance and reflection
          coefficient, the impedance circle diagram which contains a series of
          circles and arcs can be drawn on the reflection coefficient complex
          plane. These circles and arcs represent the magnitude of impedance,
          admittance, standing wave ratio, etc. Their values can be easily and
          intuitively read out within the unit circle of the reflection
          coefficients. It is an effective tool for selecting and calculating
          matching impedance in high-frequency and microwave circuit design.
        </p>
      </Text>
    </div>
  );
}
