/// <reference types="vitest/config" />
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

// Nach dem Umschalten muss der Devserver neu gestartet werden.
const enableReactCompiler = false;

// https://vite.dev/config/
export default defineConfig({
  // Vite bündelt eine Abhängigkeit erst vor, wenn sie zum ersten Mal importiert
  // wird, und lädt die Seite danach neu. Mitten in einer Vorführung wäre der
  // Zustand der Anwendung damit weg. Diese Liste nennt deshalb alles, was im
  // Laufe des Workshops noch dazukommt, damit der Devserver es beim Start
  // erledigt.
  optimizeDeps: {
    include: [
      "@hookform/resolvers/zod",
      "@tanstack/react-query",
      "@tanstack/react-query-devtools",
      "dayjs",
      "react",
      "react-dom/client",
      "react-error-boundary",
      "react-hook-form",
      "zod",
    ],
  },
  plugins: [
    // https://tailwindcss.com/docs/installation/using-vite
    tailwindcss(),
    react(),
    // https://react.dev/learn/react-compiler
    ...(enableReactCompiler
      ? [babel({ presets: [reactCompilerPreset()] })]
      : []),
  ],
  test: {
    projects: [
      {
        test: {
          name: "unit",
          include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
          setupFiles: ["./vitest.setup.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "browser",
          include: ["src/**/*.{browsertest,spec}.?(c|m)[jt]s?(x)"],
          browser: {
            enabled: true,
            provider: playwright(),
            // https://vitest.dev/guide/browser/playwright
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
