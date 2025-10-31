import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import * as GoogleAnalytics from "../../config/GoogleAnalytics";
import { Button, Text } from "../../MyLibrary";
import { myMintGreen } from "../../MyLibrary/MyColors";
import { OtherProjectsData } from "../../assets/projectsData";
import OtherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  const [onShowMore, setOnShowMore] = useState(false);

  const _handleShowMore = () => {
    setOnShowMore(!onShowMore);
    if (!onShowMore) {
      GoogleAnalytics.logEvent("click-show-more-projects", "project", "button");
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: 100 }}>
      <Text
        style={{
          fontSize: 32,
          fontFamily: "Calibre-Semibold",
          marginBottom: 10,
        }}
      >
        {"Other Noteworthy Projects"}
      </Text>

      <Text style={{ marginBottom: 40 }}>
        <Link
          className="underline-animation"
          to={"/archive"}
          style={{
            color: myMintGreen,
            fontSize: 14,
            fontFamily: "SFMono-Regular",
          }}
          onClick={() => {
            GoogleAnalytics.logEvent(
              "click-view-archieve-projects",
              "project",
              "button"
            );
          }}
        >
          {"view the archive"}
        </Link>
      </Text>

      <Grid
        container
        spacing={2}
        style={{
          textAlign: "left",
        }}
      >
        {OtherProjectsData.slice(
          0,
          onShowMore ? OtherProjectsData.length : 6
        ).map((project, index) => {
          return <OtherProjectCard key={index} project={project} />;
        })}
      </Grid>
      <div style={{ height: 50 }} />
      <Button fontSize={14} onClick={() => _handleShowMore()}>
        {onShowMore ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
}
