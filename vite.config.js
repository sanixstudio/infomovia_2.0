import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
    __APP_ENV__: env.APP_ENV,
  },
  plugins: [react()],
});
