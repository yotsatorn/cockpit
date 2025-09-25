import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "cockpit-icon.svg"],
      manifest: {
        name: "Cockpit Application PWA",
        short_name: "Cockpit App",
        description: "This is Cockpit Application for PWA",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          // --- Android / maskable ---
          {
            src: "android/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "android/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },

          // --- iOS ---
          { src: "ios/120.png", sizes: "120x120", type: "image/png" },
          { src: "ios/152.png", sizes: "152x152", type: "image/png" },
          { src: "ios/180.png", sizes: "180x180", type: "image/png" },
          { src: "ios/512.png", sizes: "512x512", type: "image/png" },

          // --- Windows / small tile (monochrome) ---
          {
            src: "windows11/Square44x44Logo.scale-100.png",
            sizes: "44x44",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "windows11/Square44x44Logo.scale-200.png",
            sizes: "88x88",
            type: "image/png",
            purpose: "monochrome",
          },

          // --- Windows / medium tile ---
          {
            src: "windows11/Square150x150Logo.scale-100.png",
            sizes: "150x150",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "windows11/Square150x150Logo.scale-200.png",
            sizes: "300x300",
            type: "image/png",
            purpose: "any",
          },

          // --- Windows / wide tile ---
          {
            src: "windows11/Wide310x150Logo.scale-100.png",
            sizes: "310x150",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "windows11/Wide310x150Logo.scale-200.png",
            sizes: "620x300",
            type: "image/png",
            purpose: "any",
          },

          // --- Windows / large tile ---
          {
            src: "windows11/LargeTile.scale-100.png",
            sizes: "310x310",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "windows11/LargeTile.scale-200.png",
            sizes: "620x620",
            type: "image/png",
            purpose: "any",
          },

          // --- Windows / Store logo ---
          {
            src: "windows11/StoreLogo.scale-100.png",
            sizes: "50x50",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "windows11/StoreLogo.scale-200.png",
            sizes: "100x100",
            type: "image/png",
            purpose: "any",
          },

          // --- Windows / Splash screen ---
          {
            src: "windows11/SplashScreen.scale-200.png",
            sizes: "1240x600",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/screenshot-wide.jpg",
            type: "image/jpeg",
            sizes: "2727x1538",
            form_factor: "wide",
          },
          {
            src: "/screenshot-mobile.jpg",
            sizes: "700x410",
            type: "image/jpeg",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-cache",
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@core": path.resolve(__dirname, "./src/core/"),
      "@features": path.resolve(__dirname, "./src/features/"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
