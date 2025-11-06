import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import { ROUTES } from "../routes/routes";
import * as GoogleAnalytics from "../config/GoogleAnalytics";
import { myMintGreen, myNavy, myMilkYellow } from "../styles/colors";
import Logo from "../assets/Logo/Logo-pure.png";
import "../styles/navbar.css";

interface HideOnScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  isMobile?: boolean;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window, isMobile } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window. This hook must be called on every render.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  // If on mobile, keep the AppBar visible regardless of scroll trigger.
  const shouldShow = isMobile ? true : !trigger;

  return (
    <Slide appear={false} direction="down" in={shouldShow}>
      {children}
    </Slide>
  );
}

export default function NavBar() {
  const theme = useTheme();
  // md and above: show horizontal navigation; below md: show hamburger menu + full-screen overlay
  // isMdDown: the viewport width < md
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "About", url: "/#about" },
    { name: "Experience", url: "/#experience" },
    { name: "Work", url: "/#work" },
    { name: "Contact", url: "/#contact" },
  ];

  // Lock body scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [menuOpen]);

  return (
    <HideOnScroll isMobile={isMdDown}>
      <AppBar
        style={{ backgroundColor: myNavy }}
        elevation={0}
        position="fixed"
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, sm: 72 },
            px: { xs: 2, sm: 3 },
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, display: "flex" }}>
            <a
              href="/"
              style={{ display: "flex", alignItems: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={Logo}
                style={{ width: 48, height: 48, objectFit: "contain" }}
                alt="Logo"
              />
            </a>
          </Typography>
          {/* md+ keep original multi-item navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item, index) => (
              <a
                href={item.url}
                key={index}
                style={{
                  fontFamily: "SFMono-Regular",
                  padding: 10,
                  fontSize: 13,
                  textDecoration: "none",
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  backgroundColor: "transparent",
                  touchAction: "manipulation",
                }}
                className="navbar-item"
                onClick={() => {
                  GoogleAnalytics.trackMenuClick(item.name, item.url);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = myMintGreen)
                }
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                onTouchStart={(e) =>
                  (e.currentTarget.style.color = myMintGreen)
                }
                onTouchEnd={(e) => (e.currentTarget.style.color = "")}
                onFocus={(e) => (e.currentTarget.style.color = myMintGreen)}
                onBlur={(e) => (e.currentTarget.style.color = "")}
              >
                <span style={{ color: myMintGreen }}>{`0${index + 1}.`}</span>
                {`${item.name}`}
              </a>
            ))}

            <a
              href={ROUTES.BLOG}
              className="nav-button nav-button--desktop"
              onClick={() =>
                GoogleAnalytics.trackMenuClick("blog", ROUTES.BLOG)
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.background = myMintGreen;
                e.currentTarget.style.color = myNavy;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = myMintGreen;
              }}
              onFocus={(e) => (e.currentTarget.style.background = myMintGreen)}
              onBlur={(e) => (e.currentTarget.style.background = "transparent")}
              style={{ color: myMintGreen, border: `1px solid ${myMintGreen}` }}
            >
              Blog
            </a>
          </Box>
          {/* md and sm  */}
          {isMdDown && (
            <IconButton
              aria-label={menuOpen ? "close navigation" : "open navigation"}
              onClick={() => setMenuOpen((v) => !v)}
              className="mui-menu-reset"
              sx={{
                color: myMintGreen,
                display: "flex",
                position: "relative",
                zIndex: 1301, // make sure it's above the overlay menu
                p: 0,
              }}
              size="large"
            >
              <span
                className="menu-button"
                aria-hidden="true"
                role="presentation"
              >
                <div className={menuOpen ? "menu active" : "menu"} />
              </span>
            </IconButton>
          )}
        </Toolbar>
        {/* full-screen overlay menu (with fade-in animation) */}
        <Fade in={menuOpen} timeout={300} unmountOnExit>
          <Box
            role="dialog"
            aria-modal="true"
            aria-label="navigation menu"
            sx={{
              position: "fixed",
              inset: 0,
              background: `linear-gradient(180deg, rgba(8,18,30,0.98) 0%, rgba(10,24,40,0.96) 100%)`,
              color: "rgba(225, 245, 238, 0.98)",
              zIndex: 1300,
              display: "flex",
              flexDirection: "column",
              pt: 10,
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                px: 4,
              }}
            >
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setMenuOpen(false);
                    GoogleAnalytics.trackMenuClick(item.name, item.url);
                  }}
                  style={{
                    fontFamily: "Calibre-Semibold",
                    fontSize: 28,
                    textDecoration: "none",
                    color: myMilkYellow,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    transition: "color 160ms ease, transform 200ms ease",
                    WebkitTapHighlightColor: "transparent",
                    WebkitTouchCallout: "none",
                    backgroundColor: "transparent",
                    touchAction: "manipulation",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = myMintGreen)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = myMilkYellow)
                  }
                  onTouchStart={(e) =>
                    (e.currentTarget.style.color = myMintGreen)
                  }
                  onTouchEnd={(e) =>
                    (e.currentTarget.style.color = myMilkYellow)
                  }
                  onFocus={(e) => (e.currentTarget.style.color = myMintGreen)}
                  onBlur={(e) => (e.currentTarget.style.color = myMilkYellow)}
                >
                  <span
                    style={{
                      fontFamily: "SFMono-Regular",
                      fontSize: 14,
                      color: myMintGreen,
                      opacity: 0.95,
                    }}
                  >{`0${index + 1}.`}</span>
                  {item.name}
                </a>
              ))}
              <a
                href={ROUTES.BLOG}
                onClick={() => {
                  setMenuOpen(false);
                  GoogleAnalytics.trackMenuClick("blog", ROUTES.BLOG);
                }}
                className="nav-button nav-button--mobile"
                style={{
                  color: myMintGreen,
                  background: "transparent",
                  border: `1px solid ${myMintGreen}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = myMintGreen;
                  e.currentTarget.style.color = myNavy;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = myMintGreen;
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.background = myMintGreen;
                  e.currentTarget.style.color = myNavy;
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = myMintGreen;
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.background = myMintGreen)
                }
                onBlur={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                Blog
              </a>
            </Box>
          </Box>
        </Fade>
      </AppBar>
    </HideOnScroll>
  );
}
