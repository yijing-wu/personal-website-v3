import Grid from "@mui/material/Grid";

import ProfilePhoto from "../assets/ProfilePhoto.png";
import { Text, Title } from "../MyLibrary";
import { myTextGrey, myMintGreenC0Alpha } from "../MyLibrary/MyColors";
import { myAboutMe, myEducationList, mySkillList } from "../assets/myData";

export default function About() {
  return (
    <div
      id="about"
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <Title index={1} content={"About Me"} />
      <Grid container>
        <Grid size={{ xs: 7 }}>
          <div
            style={{
              paddingTop: 10,
              marginRight: 30,
            }}
          >
            {myAboutMe.map((paragraph, index) => {
              return (
                <Text
                  key={index}
                  style={{ fontSize: 20, color: myTextGrey, marginTop: 10 }}
                >
                  {paragraph}
                </Text>
              );
            })}
            <div style={{ height: 20 }}></div>
            <Text style={{ fontSize: 20, color: myTextGrey }}>
              {"Education Experience:"}
            </Text>
            <ul className="education-list">
              {myEducationList.map((education, index) => {
                return (
                  <li
                    key={"education" + index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: myMintGreenC0Alpha,
                    }}
                  >
                    <div style={{ marginRight: 10 }}>◇</div>
                    <div>
                      <div style={{ paddingBottom: 3 }}>{education.school}</div>
                      <div style={{ color: myTextGrey, paddingBottom: 8 }}>
                        {education.degree} in {education.major} |{" "}
                        {education.startDate} -{education.endDate}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div style={{ height: 15 }}></div>
            <Text style={{ fontSize: 20, color: myTextGrey }}>
              {"Here are a few technologies I’ve been working with recently:"}
            </Text>
            <ul className="skills-list">
              {mySkillList.map((skill, index) => {
                return (
                  <li
                    key={"skill" + index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontSize: 14,
                      color: myMintGreenC0Alpha,
                      fontFamily: "SFMono-Regular",
                      marginBottom: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    &nbsp;
                    {`${skill}`}
                  </li>
                );
              })}
            </ul>
          </div>
        </Grid>
        <Grid size={{ xs: 5 }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={ProfilePhoto}
              style={{
                width: 300,
                overflow: "hidden",
                borderRadius: "10%",
                marginLeft: 50,
              }}
              alt="ProfilePhoto"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
