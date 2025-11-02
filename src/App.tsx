import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ErrorPage from "./error-page";

import "./App.css";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import Home from "./components/Home";
import Social from "./components/Social";
import Archive from "./components/Archive";

import {
  CameraCalibration,
  EEG,
  IntelligentCars,
  SmithChart,
} from "./projectPages";
import { initGoogleAnalytics } from "./config/GoogleAnalytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="page-wrapper">
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  // projects
  {
    path: "/smithchart",
    element: <SmithChart />,
  },
  {
    path: "/cameracalibration",
    element: <CameraCalibration />,
  },
  {
    path: "/eeg",
    element: <EEG />,
  },
  {
    path: "/intelligentcars",
    element: <IntelligentCars />,
  },
]);

export default function App() {
  useEffect(() => {
    initGoogleAnalytics(import.meta.env.GOOGLE_ANALYTICS_TRACKING_ID);
    // do not git add this line!
    // initGoogleAnalytics("G-SQZC7GDC3X");
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
