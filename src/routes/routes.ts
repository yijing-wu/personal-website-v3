export const ROUTES = {
  HOME: "/",
  ARCHIVE: "/archive",
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",
  SMITH_CHART: "/smith-chart",
  CAMERA_CALIBRATION: "/camera-calibration",
  EEG: "/eeg",
  INTELLIGENT_CARS: "/intelligent-cars",
};

export const ROUTE_META: Record<
  string,
  { title: string; description?: string }
> = {
  [ROUTES.HOME]: {
    title: "Home | Yijing Wu",
    description:
      "Personal website of Yijing Wu — projects, experience and blog.",
  },
  [ROUTES.ARCHIVE]: {
    title: "Archive | Yijing Wu",
    description: "Archive of posts and notes.",
  },
  [ROUTES.SMITH_CHART]: {
    title: "Smith Chart | Projects",
    description: "Project: Smith Chart — notes and demo.",
  },
  [ROUTES.CAMERA_CALIBRATION]: {
    title: "Camera Calibration | Projects",
    description:
      "Project: Camera Calibration — camera calibration results and code.",
  },
  [ROUTES.EEG]: {
    title: "EEG | Projects",
    description: "Project: EEG — data and visualizations.",
  },
  [ROUTES.INTELLIGENT_CARS]: {
    title: "Intelligent Cars | Projects",
    description: "Project: Intelligent Cars — simulations and collections.",
  },
  [ROUTES.BLOG]: {
    title: "Blog | Yijing Wu",
    description: "All blog posts.",
  },
};
