import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use URLullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),

    pluginReactLynx(),
  ],
  source: {
    entry: "./index.tsx",
    alias: {
      "lynx-uikit$": "./lynx-uikit",
      "@assets": "./assets",
      "@components": "./components",
      "@pages": "./pages",
      "@i18n": "./i18n",
    },
  },
});
