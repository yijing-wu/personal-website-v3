import React, { useLayoutEffect } from "react";

import { BackButton, Text } from "../MyLibrary";

import { myMilkYellow, myTextLightGrey } from "../MyLibrary/MyColors";

import {
  intelligentCar,
  intelligentCars3DComponents,
  intelligentCarsCollections,
} from "../assets/projects/intelligentCars";
import { intelligentCars } from "../assets/projectsData";

export default function IntelligentCars() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="project-page">
      <BackButton />
      <Text style={{ fontSize: 20, color: myTextLightGrey }}>
        <h1 style={{ color: myMilkYellow, marginTop: 30 }}>
          Electromagnetic Guiding Intelligent Cars
        </h1>
        <Text style={{ fontSize: 20, color: myTextLightGrey, marginTop: 10 }}>
          <div>{intelligentCars.description}</div>
        </Text>
        <div style={{ height: 20 }}></div>
        <div style={{ display: "flex" }}>
          <iframe
            width="680"
            height="385"
            src="https://www.youtube.com/embed/HqJdTv5lLRQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ margin: "auto" }}
          />
        </div>
        <br />
        <div>
          Hightlights:
          <ul>
            <li style={{ marginBottom: 4 }}>
              Built a purely electromagnetic guided smart car, which can perform
              obstacle detection and pass race tracks with various terrains,
              including straights, curves, ramps, intersections open-circuits
              and barricades.
            </li>
            <li style={{ marginBottom: 4 }}>
              Took charge of the assembling of electromagnetic detection circuit
              boards, andmain control circuit board
            </li>
            <li style={{ marginBottom: 4 }}>
              Cooperated with two other teammates to construct smart car and
              conduct parameter tuning
            </li>
            <li style={{ marginBottom: 4 }}>
              Won Second prize in East China Division of "NXP" Cup Intelligent
              Car Competition for National College Students in 2019
            </li>
          </ul>
        </div>
        <br />
        <div className="figure">
          <img src={intelligentCar} width="30%" alt="Intelligent Car" />
          <div className="figure-footnote"> Our Intelligent Car </div>
        </div>
        <br />
        <div className="figure">
          <img
            src={intelligentCars3DComponents}
            width="50%"
            alt="Intelligent Car 3D Printing Components"
          />
          <div className="figure-footnote">
            {" "}
            Intelligent Car 3D Printing Components{" "}
          </div>
        </div>
        <br />
        <div className="figure">
          <img
            src={intelligentCarsCollections}
            width="50%"
            alt="Intelligent Car Collections"
          />
          <div className="figure-footnote"> Intelligent Car Collections </div>
        </div>
      </Text>
    </div>
  );
}
