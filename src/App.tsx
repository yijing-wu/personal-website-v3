import { RouterProvider } from "react-router-dom";

import "./styles/app.css";
import { useAnalytics } from "./config/GoogleAnalytics";
import { router } from "./routes";

export default function App() {
  // initialize analytics (disable if no tracking id, no log action in non-production modes)
  useAnalytics(import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
