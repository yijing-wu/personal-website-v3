import { useState, type ReactNode } from "react";

import Grid from "@mui/material/Grid";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import { Links, Text } from "../../../components/atoms";
import {
  myLightNavy,
  myMilkYellow,
  myMintGreen,
  myTextGrey,
} from "../../../styles/colors";

interface OtherProjectInfo {
  abbreviation: string;
  title: string;
  description: ReactNode;
  tools: string[];
  mainLink?: string;
  isMainLinkExternal?: boolean;
  githubLink?: string;
}

export interface OtherProjectCardProps {
  project: OtherProjectInfo;
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
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease",
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
        <Text
          style={{
            color: myTextGrey,
            marginBottom: 24,
            lineHeight: 1.5,
            fontSize: 15,
          }}
        >
          {project.description}
        </Text>
        <ul
          style={{
            fontFamily: "SFMono-Regular",
            fontSize: 13,
            color: myTextGrey,
            padding: 0,
            marginTop: "auto",
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {project.tools.map((tool: string, index: number) => {
            return (
              <li
                key={index}
                style={{ display: "inline-flex", marginRight: 0 }}
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
