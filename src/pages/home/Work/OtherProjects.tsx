import { useState } from "react";

import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import * as GoogleAnalytics from "../../../config/GoogleAnalytics";
import { Button, Text } from "../../../components/atoms";
import { ROUTES } from "../../../routes/routes";
import { myMintGreen } from "../../../styles/colors";
import { OtherProjectsData } from "../../../assets/projectsData";
import OtherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  const [onShowMore, setOnShowMore] = useState(false);

  const _handleShowMore = () => {
    setOnShowMore(!onShowMore);
    if (!onShowMore) {
      GoogleAnalytics.trackEvent("chores:click_show_more_projects", {
        action: "show_more",
      });
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
          to={ROUTES.ARCHIVE}
          style={{
            color: myMintGreen,
            fontSize: 14,
            fontFamily: "SFMono-Regular",
          }}
          onClick={() => {
            GoogleAnalytics.trackPageView(ROUTES.ARCHIVE);
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
