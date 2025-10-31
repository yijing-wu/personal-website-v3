import { useState } from "react";

import Grid from "@mui/material/Grid";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import { Links, Text } from "../../MyLibrary";
import {
  myLightNavy,
  myMilkYellow,
  myMintGreen,
  myTextGrey,
} from "../../MyLibrary/MyColors";

export interface OtherProjectCardProps {
  project: any;
}

export default function OtherProjectCard({ project }: OtherProjectCardProps) {
  const [onCardMouseFocused, setOnCardMouseFocuse] = useState(false);

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} style={{ marginBottom: 20 }}>
      <div
        className="card"
        style={{
          backgroundColor: myLightNavy,
          borderRadius: 6,
          height: "90%",
          padding: 20,
          position: "relative",
          top: onCardMouseFocused ? -5 : 0,
        }}
        onMouseEnter={() => {
          setOnCardMouseFocuse(true);
        }}
        onMouseLeave={() => {
          setOnCardMouseFocuse(false);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <FolderOutlinedIcon
            style={{
              color: myMintGreen,
              fontSize: 40,
              display: "flex",
              justifyContent: "flex-start",
            }}
          />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Links
              iconSize={22}
              marginWidth={10}
              contentAbbreviation={project.abbreviation}
              mainLink={project.mainLink}
              isMainLinkExternal={project.isMainLinkExternal}
              githubLink={project.githubLink}
            />
          </div>
        </div>

        <Text
          style={{
            fontFamily: "Calibre-Medium",
            fontSize: 22,
            marginBottom: 8,
            color: onCardMouseFocused ? myMintGreen : myMilkYellow,
          }}
        >
          {project.title}
        </Text>
        <Text style={{ color: myTextGrey, marginBottom: 30 }}>
          {project.description}
        </Text>
        <ul
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 13,
            color: myTextGrey,
            padding: 0,
            position: "absolute",
            bottom: 10,
          }}
        >
          {project.tools.map((tool: any, index: any) => {
            return (
              <li
                key={index}
                style={{ display: "inline-block", marginRight: 10 }}
              >
                {tool}
              </li>
            );
          })}
        </ul>
      </div>
    </Grid>
  );
}
