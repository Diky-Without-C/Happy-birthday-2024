import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const setPathName = (dir: string) => {
  return new URL(dir, import.meta.url).pathname;
};

export default defineConfig({
  base: "/Happy-birthday-2024/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": setPathName("./src"),
      "@assets": setPathName("./src/assets"),
      "@components": setPathName("./src/components"),
      "@context": setPathName("./src/context"),
      "@hooks": setPathName("./src/hooks"),
      "@utils": setPathName("./src/utils"),
    },
  },
});
