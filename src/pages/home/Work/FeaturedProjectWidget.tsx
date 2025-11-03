import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import * as GoogleAnalytics from "../../../config/GoogleAnalytics";
import { Button, Links, Text } from "../../../components/atoms";
import {
  myLightNavy,
  myMilkYellow,
  myMintGreen,
  myTextGrey,
} from "../../../styles/colors";

interface FeaturedProjectImageProps {
  picture?: string;
  title: string;
  isMobile?: boolean;
}

function FeaturedProjectImage({
  picture,
  title,
  isMobile,
}: FeaturedProjectImageProps) {
  return (
    <>
      {!isMobile && (
        <div
          style={{
            width: "100%",
            backgroundColor: "#35425980",
            position: "absolute",
            zIndex: 1,
            height: "100%",
            borderRadius: 12,
          }}
        />
      )}
      <img
        src={picture}
        style={{ width: "100%", display: "block", borderRadius: 12 }}
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
  isMobile?: boolean;
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
  isMobile = false,
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
            width: isMobile ? "100%" : "120%",
            left: isMobile ? "0%" : textRightAlign ? "-20%" : "0%",
            position: "relative",
            borderRadius: 6,
            boxShadow: isMobile ? "0 12px 30px rgba(0,0,0,0.25)" : undefined,
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
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: isMobile
              ? "flex-start"
              : textRightAlign
              ? "flex-end"
              : "flex-start",
          }}
        >
          {tools.map((tool, index) => {
            return (
              <li
                key={index}
                style={{
                  display: "inline-flex",
                  marginLeft: 0,
                  marginRight: 0,
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
                rightAlign={isMobile ? false : textRightAlign}
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
  picture?: string;
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
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const showRightAlign = !isMdDown && index % 2 === 0;

  return (
    <Grid
      container
      spacing={{ xs: 3, md: 6 }}
      alignItems="center"
      style={{ marginBottom: isSmDown ? 60 : 100 }}
    >
      {isMdDown ? (
        <>
          <Grid size={{ xs: 12 }} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} isMobile />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FeaturedProjectDetails
              textRightAlign={false}
              title={title}
              abbreviation={abbreviation}
              description={description}
              tools={tools}
              mainLink={mainLink}
              isMainLinkExternal={isMainLinkExternal}
              githubLink={githubLink}
              isMobile
            />
          </Grid>
        </>
      ) : showRightAlign ? (
        <>
          <Grid size={{ xs: 12, md: 7 }} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 5 }}
            style={{ textAlign: "right", marginTop: 10 }}
          >
            <FeaturedProjectDetails
              textRightAlign
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
          <Grid
            size={{ xs: 12, md: 5 }}
            style={{ textAlign: "left", marginTop: 10 }}
          >
            <FeaturedProjectDetails
              textRightAlign={false}
              title={title}
              abbreviation={abbreviation}
              description={description}
              tools={tools}
              mainLink={mainLink}
              isMainLinkExternal={isMainLinkExternal}
              githubLink={githubLink}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} style={{ position: "relative" }}>
            <FeaturedProjectImage picture={picture} title={title} />
          </Grid>
        </>
      )}
    </Grid>
  );
}
