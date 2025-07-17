import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
} from "unocss";

export default defineConfig({
    content: {
      pipeline: {
        include: ["**/*.html", "**/*.nunjucks", "**/*.njk", "**/*.js", "**/*.ts"],
        exclude: ["node_modules", ".git"],
      },
    },
    presets: [
      presetAttributify(),
      presetWind4(),
      presetTypography(),
      presetWebFonts({
        provider: "bunny",
        fonts: {
          sans: "Inter",
          inter: [{
            name: "Inter",
            weights: [
              "100",
              "200",
              "300",
              "400",
              "500",
              "600",
              "700",
              "800",
              "900",
            ],
            italic: true,
          }],
        },
      }),
      presetIcons({
        collections: {
          tabler: () => import("@iconify-json/tabler/icons.json"),
        },
      }),
    ],
    theme: {
      colors: {
        primary: "#3b82f6",

        //light
        light: "#ffffff",
        "divider-light": "#e2e2e3",
        "elevated-light": "#f6f6f7",
        "body-text-color-light": "#222222",
        "body-text-secondary-light": "#717171",

        //dark
        dark: "#1b1b1f",
        "divider-dark": "#2e2e32",
        "elevated-dark": "#161618",
        "body-text-color-dark": "#f3f4f6",
        "body-text-secondary-dark": "#98989f",
      },
    },
    shortcuts: [{
      "app-container": "2xl:container px-3 2xl:px-0 mx-auto",
    }],
});