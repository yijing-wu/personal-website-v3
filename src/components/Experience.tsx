import { useState } from "react";

import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { Text, Title } from "../MyLibrary";
import { myTextGrey, myMintGreen, myNavy } from "../MyLibrary/MyColors";
import { jobsData } from "../assets/experienceData";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Experience() {
  const [selected, setSelected] = useState(0);
  const [mouseFocused, setMouseFocused] = useState(-1);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="experience"
      style={{
        paddingTop: isSmDown ? 100 : 150,
        paddingBottom: isSmDown ? 60 : 80,
      }}
    >
      <div
        style={{
          width: isMdDown ? "100%" : 700,
          minHeight: isMdDown ? "auto" : 380,
          margin: "0 auto",
          paddingLeft: isMdDown ? 16 : 0,
          paddingRight: isMdDown ? 16 : 0,
        }}
      >
        <Title
          index={2}
          content={"Where I've worked"}
          style={{ marginBottom: isSmDown ? 30 : 40 }}
        />

        {isMdDown ? (
          // Small and Medium screens: Table layout
          <div style={{ width: "100%" }}>
            {jobsData.map((jobData, index) => (
              <div
                key={"jobData" + index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: 20,
                  marginBottom: 20,
                  borderBottom:
                    index < jobsData.length - 1
                      ? `1px solid ${myTextGrey}33`
                      : "none",
                }}
              >
                <div style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      fontFamily: "Calibre-Medium",
                      fontSize: isSmDown ? 18 : 20,
                      color: "white",
                      marginBottom: 4,
                    }}
                  >
                    {jobData.title}
                  </Text>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <Text
                    style={{
                      fontFamily: "Calibre-Medium",
                      fontSize: isSmDown ? 16 : 18,
                      color: myMintGreen,
                    }}
                  >
                    {jobData.link ? (
                      <a
                        className="underline-animation"
                        href={jobData.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => {
                          GoogleAnalytics.logEvent(
                            "click-companyweb-" + jobData.abbreviation,
                            "company-website",
                            "minor-button"
                          );
                        }}
                      >
                        {jobData.company}
                      </a>
                    ) : (
                      jobData.company
                    )}
                  </Text>
                </div>
                <div>
                  <Text
                    style={{
                      fontFamily: "SFMono-Regular",
                      fontSize: isSmDown ? 13 : 14,
                      color: myTextGrey,
                    }}
                  >
                    {jobData.time} • {jobData.location}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Large screens: Original layout
          <div
            style={{
              display: "flex",
              flexDirection: isMdDown ? "column" : "row",
              gap: isMdDown ? 24 : 0,
            }}
          >
            <div style={{ position: "relative" }}>
              {!isMdDown && (
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
              )}
              <div
                style={{
                  marginRight: isMdDown ? 0 : 20,
                  display: "flex",
                  flexDirection: isMdDown ? "row" : "column",
                  gap: isMdDown ? 12 : 0,
                  overflowX: isMdDown ? "auto" : "visible",
                  paddingBottom: isMdDown ? 6 : 0,
                }}
              >
                {jobsData.map((jobData, index) => {
                  return (
                    <div key={"jobData" + index}>
                      <button
                        className="jobs-button"
                        style={{
                          minWidth: isMdDown ? 100 : 120,
                          height: 40,
                          border: "none",
                          borderLeftWidth: isMdDown ? 0 : 2,
                          borderLeftStyle: isMdDown ? "none" : "solid",
                          borderLeftColor: myTextGrey,
                          borderBottom: isMdDown
                            ? `2px solid ${
                                index === selected || index === mouseFocused
                                  ? myMintGreen
                                  : "transparent"
                              }`
                            : "none",
                          paddingLeft: isMdDown ? 14 : 20,
                          paddingRight: isMdDown ? 14 : 20,
                          borderRadius: isMdDown ? 8 : 0,
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
                              : isMdDown
                              ? "transparent"
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

            <div style={{ maxWidth: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: isMdDown ? "column" : "row",
                  gap: isMdDown ? 4 : 0,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Calibre-Medium",
                    fontSize: isMdDown ? 20 : 22,
                    marginRight: isMdDown ? 0 : 5,
                  }}
                >
                  {jobsData[selected].title}
                </Text>
                <Text
                  style={{
                    fontFamily: "Calibre-Medium",
                    fontSize: isMdDown ? 20 : 22,
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
                  fontSize: isMdDown ? 13 : 14,
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
                    <Text
                      style={{
                        color: myTextGrey,
                        fontSize: isMdDown ? 16 : 18,
                        lineHeight: 1.5,
                      }}
                    >
                      {duty}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
