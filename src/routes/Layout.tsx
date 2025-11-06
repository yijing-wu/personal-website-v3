import { Outlet } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Social from "../components/Social";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={{ xs: 0, md: 4 }}
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: { xs: 10, sm: 12 },
          paddingLeft: { xs: 0, md: 0 },
          paddingRight: { xs: 0, md: 0 },
        }}
      >
        <Grid
          size={{ xs: 12, md: 1 }}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-start",
          }}
        >
          <Social />
        </Grid>
        <Grid size={{ xs: 12, md: 10 }}>
          <Box sx={{ paddingBottom: 6 }}>
            {/* rendered route content */}
            <Outlet />
            <Footer />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 1 }}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
      </Grid>
    </>
  );
}
