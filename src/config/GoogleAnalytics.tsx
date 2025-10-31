import GA4React from "ga-4-react";

let ga4react: GA4React;

export async function initGoogleAnalytics(tracking_id: string) {
  if (!GA4React.isInitialized()) {
    ga4react = new GA4React(tracking_id);
    try {
      await ga4react.initialize();
      logPageView();
    } catch (error) {
      console.error(error);
    }
  }
}

function logPageView() {
  ga4react.pageview(window.location.pathname);
}

export function logEvent(action: string, label: string, category: string) {
  ga4react.event(action, label, category);
}
