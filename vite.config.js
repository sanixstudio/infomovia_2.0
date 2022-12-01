import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  root: "src",
  publicDir: "public",
  plugins: [react()],
});
