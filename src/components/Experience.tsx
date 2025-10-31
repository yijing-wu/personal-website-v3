import React, { useState } from "react";

import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { Text, Title } from "../MyLibrary";
import { myTextGrey, myMintGreen, myNavy } from "../MyLibrary/MyColors";
import { jobsData } from "../assets/experienceData";

function Experience() {
  const [selected, setSelected] = useState(0);
  const [mouseFocused, setMouseFocused] = useState(-1);

  return (
    <div
      id="experience"
      style={{
        paddingTop: 150,
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          width: 700,
          minHeight: 380,
          margin: "auto",
        }}
      >
        <Title
          index={2}
          content={"Where I've worked"}
          style={{ marginBottom: 40 }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ position: "relative" }}>
            <div
              className="selectedBar"
              style={{
                position: "absolute",
                width: 2,
                height: 40,
                top: 40 * selected,
                backgroundColor: myMintGreen,
                borderRadius: 6,
              }}
            />
            <div style={{ marginRight: 20 }}>
              {jobsData.map((jobData, index) => {
                return (
                  <div key={"jobData" + index}>
                    <button
                      className="jobs-button"
                      style={{
                        minWidth: 120,
                        height: 40,
                        border: "none",
                        borderLeftWidth: 2,
                        borderLeftStyle: "solid",
                        borderLeftColor: myTextGrey,
                        paddingLeft: 20,
                        paddingRight: 20,
                        cursor: "pointer",
                        textAlign: "left",
                        fontFamily: "SFMono-Medium",
                        fontSize: 14,
                        color:
                          index === selected || index === mouseFocused
                            ? myMintGreen
                            : myTextGrey,
                        backgroundColor:
                          index === selected || index === mouseFocused
                            ? "#4a566b"
                            : myNavy,
                      }}
                      onClick={() => {
                        setSelected(index);
                        GoogleAnalytics.logEvent(
                          "click-experience-" + jobData.abbreviation,
                          "experience",
                          "button"
                        );
                      }}
                      onMouseEnter={() => {
                        setMouseFocused(index);
                      }}
                      onMouseLeave={() => {
                        setMouseFocused(-1);
                      }}
                    >
                      {jobData.abbreviation}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Calibre-Medium",
                  fontSize: 22,
                  marginRight: 5,
                }}
              >
                {jobsData[selected].title}
              </Text>
              <Text
                style={{
                  fontFamily: "Calibre-Medium",
                  fontSize: 22,
                  color: myMintGreen,
                }}
              >
                {`@ `}
                {jobsData[selected].link ? (
                  <a
                    className="underline-animation"
                    href={jobsData[selected].link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => {
                      GoogleAnalytics.logEvent(
                        "click-companyweb-" + jobsData[selected].abbreviation,
                        "company-website",
                        "minor-button"
                      );
                    }}
                  >
                    {jobsData[selected].company}
                  </a>
                ) : (
                  `${jobsData[selected].company}`
                )}
              </Text>
            </div>
            <Text
              style={{
                fontFamily: "SFMono-Regular",
                color: myTextGrey,
              }}
            >
              {jobsData[selected].time}
              {", "}
              {jobsData[selected].location}
            </Text>
            {jobsData[selected].duties.map((duty, index) => {
              return (
                <div
                  key={"duty" + index}
                  className="duty"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: index === 0 ? 15 : 10,
                  }}
                >
                  <Text style={{ color: myTextGrey, fontSize: 18 }}>
                    {duty}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
