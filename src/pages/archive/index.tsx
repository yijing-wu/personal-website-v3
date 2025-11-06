import { useLayoutEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import {
  myNavyLight,
  myMilkYellow,
  myMintGreen,
  myNavy,
  myTextGrey,
} from "../../styles/colors";
import { BackButton, Links, Text } from "../../components/atoms";
import { ArchivedProjectsData } from "../../assets/projectsData";

export default function ArchivePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const tableHeadStyles = {
    fontSize: isSmDown ? 18 : 22,
    fontFamily: "Calibre-Semibold",
    color: myTextGrey,
  };

  return (
    <div
      style={{
        paddingTop: isSmDown ? 120 : 150,
        paddingBottom: isSmDown ? 120 : 150,
        paddingLeft: isSmDown ? 16 : 10,
        paddingRight: isSmDown ? 16 : 10,
      }}
    >
      <BackButton />
      <div style={{ height: isSmDown ? 40 : 60 }}></div>
      <Text
        style={{
          fontFamily: "Calibre-Semibold",
          fontSize: isSmDown ? 48 : 80,
          color: myMilkYellow,
        }}
      >
        {"Archive"}
      </Text>
      <Text
        style={{
          fontFamily: "SFMono-Regular",
          fontSize: isSmDown ? 14 : 16,
          color: myMintGreen,
          marginBottom: 80,
        }}
      >
        {"List of things I've worked on"}
      </Text>

      <TableContainer
        component={Paper}
        style={{ backgroundColor: myNavy }}
        sx={{ overflowX: "auto" }}
      >
        <Table
          sx={{ minWidth: isMdDown ? 0 : 650 }}
          size={isSmDown ? "small" : "medium"}
          aria-label="archive table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Year</Text>
              </TableCell>
              <TableCell align="left" style={{ border: 0 }}>
                <Text style={tableHeadStyles}>Project</Text>
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
                      backgroundColor: myNavyLight,
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
                      fontSize: isSmDown ? 14 : 16,
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
                      fontSize: isSmDown ? 18 : 20,
                      fontFamily: "Calibre-Medium",
                      paddingTop: 5,
                    }}
                  >
                    {project.title}
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
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    {project.tools.map((tool: string, index: number) => {
                      return (
                        <li
                          key={index}
                          style={{
                            display: "inline-flex",
                            marginRight: 0,
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
