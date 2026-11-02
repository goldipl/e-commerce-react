import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages serves the project from https://goldipl.github.io/e-commerce-react/
  base: "/e-commerce-react/",
  plugins: [react()],
});
