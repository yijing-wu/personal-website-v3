import { useEffect } from "react";
import { useMatches } from "react-router-dom";

import { trackPageView } from "../config/GoogleAnalytics";

export default function RouteMeta() {
  const matches = useMatches();

  useEffect(() => {
    // find the deepest match with a handle.meta
    for (let i = matches.length - 1; i >= 0; i--) {
      const handle = matches[i].handle as unknown;
      if (
        handle &&
        typeof handle === "object" &&
        "meta" in (handle as Record<string, unknown>)
      ) {
        const meta = (handle as Record<string, unknown>).meta as {
          title?: string;
          description?: string;
        };
        const { title, description } = meta;
        if (title) document.title = title;
        if (description) {
          let desc = document.querySelector('meta[name="description"]');
          if (!desc) {
            desc = document.createElement("meta");
            desc.setAttribute("name", "description");
            document.head.appendChild(desc);
          }
          desc.setAttribute("content", description);
        }
        // record a pageview for SPA navigation
        try {
          // use the exported helper from our analytics module
          trackPageView(matches[i].pathname || undefined);
        } catch (e) {
          console.warn("[RouteMeta] trackPageView error", e);
        }
        return;
      }
    }
  }, [matches]);

  return null;
}
