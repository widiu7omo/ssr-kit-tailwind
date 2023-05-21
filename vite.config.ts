import react from "@vitejs/plugin-react-swc";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      "#app": __dirname,
    },
  },
};

export default config;
