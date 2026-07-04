import type { ReactComponentBuildConfig, WebComponentBuildConfig } from "../../tasks/build/builder/src/types.ts";

export const webComponentList: WebComponentBuildConfig[] = [
  {
    name: "jb-password-input",
    path: "./web-component/lib/jb-password-input.ts",
    outputPath: "./web-component/dist/jb-password-input.js",
    tsConfigPath: "./web-component/tsconfig.json",
    umdName: "JBPasswordInput",
    external: ["jb-input", "jb-validation","jb-core","jb-core/i18n"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation": "JBValidation",
      "jb-core":"JBCore",
      "jb-core/i18n":"JBCoreI18N"
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
      "jb-password-input": "JBPasswordInput",
      "jb-input/react": "JBInputReact"
    },
    umdName: "JBPasswordInputReact",
    dir: "./react"
  },
];
