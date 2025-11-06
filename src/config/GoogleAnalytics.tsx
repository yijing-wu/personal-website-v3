import { useEffect } from "react";
import GA4React from "ga-4-react";

/** Internal state */
let ga4react: GA4React | null = null;
let initialized = false;
const mode = (import.meta.env.VITE_MODE ?? "development") as string;

/**
 * Initialize Google Analytics safely.
 * - Noops when no trackingId provided.
 * - Avoids initializing in non-production mode.
 */
export async function initGoogleAnalytics(trackingId?: string) {
  if (!trackingId) return;
  if (initialized) return;

  if (mode !== "production") {
    console.log("GA initGoogleAnalytics mode:", mode);
  }

  try {
    ga4react = new GA4React(trackingId);
    await ga4react.initialize();
    initialized = true;
    // record initial page view (use safe getter)
    trackPageView();
    if (mode !== "production") {
      console.info("[GA] initialized with ID:", trackingId);
    }
  } catch (error) {
    console.warn("[GA] init failed:", error);
    ga4react = null;
    initialized = false;
  }
}

// -----------------------------
// Utilities
// -----------------------------
function safeEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  if (!initialized || !ga4react) {
    return;
  }

  try {
    if (mode === "production") {
      ga4react.gtag("event", eventName, params);
    } else {
      console.log(`[GA] event: ${eventName}`, params);
    }
  } catch (error) {
    console.warn(`[GA] Event failed: ${eventName}`, error);
  }
}

// -----------------------------
// Base Events
// -----------------------------
export function trackPageView(pagePath: string = window.location.pathname) {
  safeEvent("page_view", { page_location: pagePath });
}

export function trackScroll(
  percentScrolled: number,
  pagePath: string = window.location.pathname
) {
  safeEvent("scroll", {
    percent_scrolled: percentScrolled,
    page_location: pagePath,
  });
}

// -----------------------------
// Semantic Events
// -----------------------------
export function trackMenuClick(menuItem: string, destination: string) {
  safeEvent("click_menu_item", { menu_item: menuItem, destination });
}

export function trackSocialClick(platform: "github" | "linkedin" | "email") {
  safeEvent("click_social_icon", { platform });
}

export function trackCompanyClick(companyName: string, destination: string) {
  safeEvent("click_company_link", { company_name: companyName, destination });
}

export function trackProjectLinkClick(
  projectName: string,
  destination: string
) {
  safeEvent("click_project_link", { project_name: projectName, destination });
}

export function trackBlogView(
  title: string,
  tags?: string[],
  description?: string
) {
  safeEvent("view_blog_post", { title, tags, description });
}

export function trackBlogTagClick(tag: string) {
  safeEvent("click_blog_tag", { tag });
}

// -----------------------------
// Generic tracker (for custom events)
// -----------------------------
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  safeEvent(eventName, params);
}

// -----------------------------
// State check
// -----------------------------

export function isAnalyticsInitialized() {
  return initialized;
}

/**
 * React hook: initializes GA on mount when trackingId provided (or falls back to
 * `import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID`). Returns helpers.
 */
export function useAnalytics(trackingId?: string) {
  useEffect(() => {
    // prefer explicit trackingId, else read from env (Vite client env vars must be prefixed with VITE_)
    const env = (import.meta.env ?? {}) as Record<string, string | undefined>;
    const id = trackingId ?? env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;
    // Only run init if id exists and is not empty
    if (id) {
      void initGoogleAnalytics(id);
    } else {
      // helpful debug message to explain why GA didn't initialize
      console.info(
        "[GA] tracking id missing; set VITE_GOOGLE_ANALYTICS_TRACKING_ID in your .env to enable analytics"
      );
    }
  }, [trackingId]);

  return {
    trackPageView,
    trackScroll,
    trackMenuClick,
    trackSocialClick,
    trackCompanyClick,
    trackProjectLinkClick,
    trackBlogView,
    trackBlogTagClick,
    trackEvent,
    isAnalyticsInitialized,
  };
}
