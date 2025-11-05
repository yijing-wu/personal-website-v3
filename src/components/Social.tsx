import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import * as GoogleAnalytics from "../config/GoogleAnalytics";

function Social() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const itemStyle = {
    paddingBottom: 15,
    paddingTop: 15,
  };

  return (
    <ul
      className="social-list"
      style={{
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        listStyle: "none",
        margin: 0,
        marginLeft: 10,
        display: isSmDown ? "none" : "block",
      }}
    >
      <li style={itemStyle}>
        <a
          href="https://github.com/yijing-wu"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            GoogleAnalytics.trackSocialClick("github");
          }}
        >
          <GitHubIcon />
        </a>
      </li>
      <li style={itemStyle}>
        <a
          href="https://www.linkedin.com/in/yijing-wu-/"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            GoogleAnalytics.trackSocialClick("linkedin");
          }}
        >
          <LinkedInIcon />
        </a>
      </li>
      <li style={itemStyle}>
        <a
          href="mailto:yijingwu.w@gmail.com"
          onClick={() => {
            GoogleAnalytics.trackSocialClick("email");
          }}
        >
          <MailOutlineIcon />
        </a>
      </li>
    </ul>
  );
}

export default Social;
