// This file tells the app how to build itself
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", // This saves the offline files in the public folder
  cacheOnFrontEndNav: true, // This helps the app feel fast
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true, // Refreshes the page when internet returns [cite: 70]
  register: true,
  skipWaiting: true,
});

export default withPWA({
  // my other Next JS settings go here if you need them later
});