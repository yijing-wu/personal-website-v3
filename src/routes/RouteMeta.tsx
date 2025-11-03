import { useEffect } from "react";
import { useMatches } from "react-router-dom";

export default function RouteMeta() {
  const matches = useMatches();

  useEffect(() => {
    // find the deepest match with a handle.meta
    for (let i = matches.length - 1; i >= 0; i--) {
      const h = matches[i].handle as any;
      if (h && h.meta) {
        const { title, description } = h.meta as {
          title?: string;
          description?: string;
        };
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
        return;
      }
    }
  }, [matches]);

  return null;
}
