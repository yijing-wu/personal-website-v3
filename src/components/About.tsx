import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import ProfilePhoto from "../assets/ProfilePhoto.png";
import { Text, Title } from "../MyLibrary";
import { myTextGrey, myMintGreenC0Alpha } from "../MyLibrary/MyColors";
import { myAboutMe, myEducationList, mySkillList } from "../assets/myData";

export default function About() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="about"
      style={{
        paddingLeft: isMdDown ? 24 : 50,
        paddingRight: isMdDown ? 24 : 50,
        paddingTop: isSmDown ? 80 : 100,
        paddingBottom: isSmDown ? 80 : 100,
      }}
    >
      <Title index={1} content={"About Me"} />
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="stretch"
        sx={{ marginTop: { xs: 3, md: 6 } }}
      >
        <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
          <div
            style={{
              paddingTop: 10,
              marginRight: isMdDown ? 0 : 30,
            }}
          >
            {myAboutMe.map((paragraph, index) => (
              <Text
                key={index}
                style={{
                  fontSize: isSmDown ? 17 : 20,
                  color: myTextGrey,
                  marginTop: 10,
                  lineHeight: 1.5,
                }}
              >
                {paragraph}
              </Text>
            ))}
            <div style={{ height: 20 }}></div>
            <Text style={{ fontSize: isSmDown ? 18 : 20, color: myTextGrey }}>
              {"Education Experience:"}
            </Text>
            <ul className="education-list">
              {myEducationList.map((education, index) => (
                <li
                  key={`education-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: myMintGreenC0Alpha,
                  }}
                >
                  <div style={{ marginRight: 10 }}>◇</div>
                  <div>
                    <div style={{ paddingBottom: 3 }}>{education.school}</div>
                    <div
                      style={{
                        color: myTextGrey,
                        paddingBottom: 8,
                        fontSize: isSmDown ? 15 : 16,
                      }}
                    >
                      {education.degree} in {education.major} |{" "}
                      {education.startDate} -{education.endDate}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ height: 15 }}></div>
            <Text style={{ fontSize: isSmDown ? 18 : 20, color: myTextGrey }}>
              {"Here are a few technologies I’ve been working with recently:"}
            </Text>
            <ul className="skills-list">
              {mySkillList.map((skill, index) => (
                <li
                  key={`skill-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: isSmDown ? 13 : 14,
                    color: myMintGreenC0Alpha,
                    fontFamily: "SFMono-Regular",
                    marginBottom: 3,
                    lineHeight: 1.5,
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            order: { xs: 1, md: 2 },
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div style={{ textAlign: "center", width: "100%" }}>
            <img
              src={ProfilePhoto}
              style={{
                width: isSmDown ? 220 : 300,
                overflow: "hidden",
                borderRadius: "10%",
                marginLeft: isMdDown ? 0 : 50,
                marginBottom: isSmDown ? 18 : 0,
              }}
              alt="ProfilePhoto"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
