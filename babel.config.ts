import { ConfigAPI } from "@babel/core";

export default function (api: ConfigAPI) {
  api.cache.forever(); // Cache the configuration permanently

  return {
    presets: [
      "@babel/preset-env",      // Transpile modern JavaScript for older environments
      "@babel/preset-react",    // Handle JSX syntax
      "@babel/preset-typescript", // Support TypeScript
    ],
    plugins: [
      // Add Babel plugins here if needed
    ],
  };
}
