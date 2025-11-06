import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../error-page";
import RouteMeta from "./RouteMeta";
import { ROUTES, ROUTE_META } from "./routes";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/home"));
const Archive = lazy(() => import("../pages/archive"));
const CameraCalibration = lazy(
  () => import("../pages/projects/CameraCalibrationPage")
);
const EEG = lazy(() => import("../pages/projects/EEGPage"));
const IntelligentCars = lazy(
  () => import("../pages/projects/IntelligentCarsPage")
);
const SmithChart = lazy(() => import("../pages/projects/SmithChartPage"));
const BlogIndex = lazy(() => import("../pages/blogs/BlogIndexPage"));
const BlogPostPage = lazy(() => import("../pages/blogs/BlogPostPage"));

export const router = createBrowserRouter([
  {
    // root layout — ensures NavBar, Social, Footer live inside the router context
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
        handle: { meta: ROUTE_META[ROUTES.HOME] },
      },
      {
        path: ROUTES.ARCHIVE,
        element: <Archive />,
        handle: { meta: ROUTE_META[ROUTES.ARCHIVE] },
      },
      // projects
      {
        path: ROUTES.SMITH_CHART,
        element: <SmithChart />,
        handle: { meta: ROUTE_META[ROUTES.SMITH_CHART] },
      },
      {
        path: ROUTES.CAMERA_CALIBRATION,
        element: <CameraCalibration />,
        handle: { meta: ROUTE_META[ROUTES.CAMERA_CALIBRATION] },
      },
      {
        path: ROUTES.EEG,
        element: <EEG />,
        handle: { meta: ROUTE_META[ROUTES.EEG] },
      },
      {
        path: ROUTES.INTELLIGENT_CARS,
        element: <IntelligentCars />,
        handle: { meta: ROUTE_META[ROUTES.INTELLIGENT_CARS] },
      },
      {
        path: ROUTES.BLOG,
        element: <BlogIndex />,
        handle: { meta: ROUTE_META[ROUTES.BLOG] },
      },
      {
        path: ROUTES.BLOG_POST,
        element: <BlogPostPage />,
        handle: { meta: ROUTE_META[ROUTES.BLOG_POST] },
      },
      // invisible route that attaches RouteMeta so it runs on each navigation
      {
        path: "*",
        element: <RouteMeta />,
      },
    ],
  },
]);
