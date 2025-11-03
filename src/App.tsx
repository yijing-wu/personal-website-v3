import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import "./styles/app.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Social from "./components/Social";

import { initGoogleAnalytics } from "./config/GoogleAnalytics";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    initGoogleAnalytics(import.meta.env.GOOGLE_ANALYTICS_TRACKING_ID);
  });

  return (
    <div className="App">
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
            <RouterProvider router={router} />
            <Footer />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 1 }}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
      </Grid>
    </div>
  );
}
