import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-password-input",
    path: "./lib/jb-password-input.ts",
    outputPath: "./dist/jb-password-input.js",
    umdName: "JBPasswordInput",
    external: ["jb-input", "jb-validation"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation": "JBValidation"
    },
  },
];
export const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-password-input-react",
    path: "./react/lib/JBPasswordInput.tsx",
    outputPath: "./react/dist/JBPasswordInput.js",
    external: ["jb-password-input", "jb-input", "jb-input/react", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      "jb-input/react": "JBInputReact"
    },
  },
];