import React, { useLayoutEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  myLightNavy,
  myMilkYellow,
  myMintGreen,
  myNavy,
  myTextGrey,
} from "../MyLibrary/MyColors";
import { Links, Text } from "../MyLibrary";
import { ArchivedProjectsData } from "../assets/projectsData";

export default function Archive() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const tableHeadStyles = {
    fontSize: 22,
    fontFamily: "Calibre-Semibold",
    color: myTextGrey,
  };

  return (
    <div
      style={{
        paddingTop: 150,
        paddingBottom: 150,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: 80,
          color: myMilkYellow,
        }}
      >
        {"Archive"}
      </Text>
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          fontSize: 16,
          color: myMintGreen,
          marginBottom: 80,
        }}
      >
        {"List of things I've worked on"}
      </Text>

      <TableContainer component={Paper} style={{ backgroundColor: myNavy }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Year</Text>
              </TableCell>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Title</Text>
              </TableCell>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Made at</Text>
              </TableCell>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Built with</Text>
              </TableCell>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Link</Text>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* ordered by year */}
            {ArchivedProjectsData.sort((a, b) => {
              return b.year - a.year;
            }).map((project) => (
              <TableRow
                key={project.title}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&.MuiTableRow-hover": {
                    "&:hover": {
                      backgroundColor: myLightNavy,
                    },
                  },
                }}
                hover
                style={{
                  padding: 0,
                  verticalAlign: "center",
                }}
              >
                <TableCell style={{ border: 0 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "SFMono-Medium",
                      color: myMintGreen,
                    }}
                  >
                    {project.year}
                  </Text>
                </TableCell>
                <TableCell style={{ border: 0 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Calibre-Medium",
                      paddingTop: 5,
                    }}
                  >
                    {project.title}
                  </Text>
                </TableCell>
                <TableCell align="left" style={{ border: 0 }}>
                  <Text
                    style={{ fontSize: 18, color: myTextGrey, paddingTop: 5 }}
                  >
                    {project.location}
                  </Text>
                </TableCell>
                <TableCell align="left" style={{ border: 0 }}>
                  <ul
                    style={{
                      fontFamily: "SFMono-Regular",
                      fontSize: 13,
                      color: myTextGrey,
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {project.tools.map((tool, index) => {
                      return (
                        <li
                          key={index}
                          style={{
                            display: "inline",
                            marginRight: 10,
                            float: "left",
                          }}
                        >
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </TableCell>
                <TableCell
                  align="left"
                  style={{ border: 0, display: "flex", flexDirection: "row" }}
                >
                  <Links
                    rightAlign={false}
                    buttonColor={myTextGrey}
                    iconSize={20}
                    marginWidth={10}
                    buttonHoverColor={myMintGreen}
                    contentAbbreviation={project.abbreviation}
                    mainLink={project.mainLink}
                    isMainLinkExternal={project.isMainLinkExternal}
                    githubLink={project.githubLink}
                  />
                  <div style={{ marginRight: 20 }}></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
