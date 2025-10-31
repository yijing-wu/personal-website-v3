import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";

import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { myMintGreen, myNavy } from "../MyLibrary/MyColors";
import Logo from "../assets/Logo/Logo-pure.png";

interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar() {
  const navItems = [
    { name: "About", url: "/#about" },
    { name: "Experience", url: "/#experience" },
    { name: "Work", url: "/#work" },
    { name: "Contact", url: "/#contact" },
  ];

  return (
    <HideOnScroll>
      <AppBar style={{ backgroundColor: myNavy }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", md: "flex" },
            }}
          >
            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <img src={Logo} style={{ width: 50, margin: 10 }} alt="Logo" />
            </a>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <a
                href={item.url}
                key={index}
                style={{
                  fontFamily: "SFMono-Regular",
                  padding: 10,
                  fontSize: 13,
                  textDecoration: "none",
                }}
                className="navbar-item"
                onClick={() => {
                  GoogleAnalytics.logEvent(
                    "click-navbar-" + item.name,
                    "navbar",
                    "button"
                  );
                }}
              >
                <span style={{ color: myMintGreen }}>{`0${index + 1}.`}</span>
                {`${item.name}`}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
