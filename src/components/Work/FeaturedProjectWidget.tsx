import React from "react";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import * as GoogleAnalytics from "../../config/GoogleAnalytics";
import { Button, Links, Text } from "../../MyLibrary";
import {
  myLightNavy,
  myMilkYellow,
  myMintGreen,
  myTextGrey,
} from "../../MyLibrary/MyColors";

interface FeaturedProjectImageProps {
  picture?: any;
  title: string;
}

function FeaturedProjectImage({ picture, title }: FeaturedProjectImageProps) {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#35425980", // myNavy with 80 Aplha
          position: "absolute",
          zIndex: 1,
          height: "100%",
        }}
      />
      <img
        src={picture}
        style={{ width: "100%" }}
        alt={title + " profile Picture"}
      />
    </>
  );
}

interface FeaturedProjectDetailsProps {
  textRightAlign: boolean;
  title: string;
  abbreviation: string;
  description: React.ReactNode;
  tools: string[];
  mainLink?: string;
  isMainLinkExternal?: boolean;
  githubLink?: string;
}

function FeaturedProjectDetails({
  textRightAlign,
  title,
  abbreviation,
  description,
  tools,
  mainLink,
  isMainLinkExternal,
  githubLink,
}: FeaturedProjectDetailsProps) {
  return (
    <>
      <Text
        style={{
          color: myMintGreen,
          fontFamily: "SFMono-Regular",
          fontSize: 13,
          marginBottom: 10,
        }}
      >
        Featured Project
      </Text>
      <Text
        style={{
          fontFamily: "Calibre-Medium",
          fontSize: 28,
          color: myMilkYellow,
        }}
      >
        {title}
      </Text>

      <div style={{ position: "relative", top: 10, zIndex: 2 }}>
        <div
          style={{
            backgroundColor: myLightNavy,
            width: "120%",
            left: textRightAlign ? "-20%" : "0%",
            position: "relative",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              padding: 20,
              color: myTextGrey,
              fontSize: 18,
              textAlign: "left",
            }}
          >
            {description}
          </Text>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <ul
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 13,
            color: myTextGrey,
            listStyle: "none",
            marginTop: 25,
            marginBottom: 20,
            padding: 0,
          }}
        >
          {tools.map((tool, index) => {
            return (
              <li
                key={index}
                style={{
                  display: "inline",
                  marginLeft: textRightAlign ? 10 : 0,
                  marginRight: textRightAlign ? 0 : 10,
                }}
              >
                {tool}
              </li>
            );
          })}
        </ul>
        {mainLink || githubLink ? (
          githubLink ? (
            <div style={{ marginBottom: 10 }}>
              <Links
                rightAlign={textRightAlign}
                buttonColor={myMilkYellow}
                marginWidth={15}
                buttonHoverColor={myMintGreen}
                contentAbbreviation={abbreviation}
                mainLink={mainLink}
                isMainLinkExternal={isMainLinkExternal}
                githubLink={githubLink}
              />
            </div>
          ) : (
            <Button>
              {isMainLinkExternal ? (
                <a
                  href={mainLink ? mainLink : ""}
                  style={{ textDecoration: "none", color: myMintGreen }}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    GoogleAnalytics.logEvent(
                      "click-mainLink-of-" + abbreviation,
                      "project",
                      "button"
                    );
                  }}
                >
                  {"Learn More"}
                </a>
              ) : (
                <Link
                  to={mainLink ? mainLink : ""}
                  style={{ textDecoration: "none", color: myMintGreen }}
                  onClick={() => {
                    GoogleAnalytics.logEvent(
                      "click-mainLink-of-" + abbreviation,
                      "project",
                      "button"
                    );
                  }}
                >
                  {"Learn More"}
                </Link>
              )}
            </Button>
          )
        ) : null}
      </div>
    </>
  );
}

export interface FeaturedProjectWidgetProps {
  index: number;
  picture?: any;
  title: string;
  abbreviation: string;
  description: React.ReactNode;
  tools: string[];
  mainLink?: string;
  isMainLinkExternal?: boolean;
  githubLink?: string;
}

export default function FeaturedProjectWidget({
  index,
  picture,
  title,
  abbreviation,
  description,
  tools,
  mainLink,
  isMainLinkExternal = false,
  githubLink,
}: FeaturedProjectWidgetProps) {
  const isOdd = index % 2 === 1;

  return (
    <Grid container style={{ marginBottom: 100 }}>
      {!isOdd ? (
        <>
          <Grid size={{ xs: 7 }} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} />
          </Grid>
          <Grid size={{ xs: 5 }} style={{ textAlign: "right", marginTop: 10 }}>
            <FeaturedProjectDetails
              textRightAlign={!isOdd}
              title={title}
              description={description}
              abbreviation={abbreviation}
              tools={tools}
              mainLink={mainLink}
              isMainLinkExternal={isMainLinkExternal}
              githubLink={githubLink}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid size={{ xs: 5 }} style={{ textAlign: "left", marginTop: 10 }}>
            <FeaturedProjectDetails
              textRightAlign={!isOdd}
              title={title}
              abbreviation={abbreviation}
              description={description}
              tools={tools}
              mainLink={mainLink}
              isMainLinkExternal={isMainLinkExternal}
              githubLink={githubLink}
            />
          </Grid>
          <Grid size={{ xs: 7 }} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} />
          </Grid>
        </>
      )}
    </Grid>
  );
}
