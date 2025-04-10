import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const tsconfigPaths = (await import("vite-tsconfig-paths")).default;

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
  },
});
