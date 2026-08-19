import { defaultTheme, defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  base: "/main/",

  title: "buzz (unreleased)",

  description:
    "A small/lightweight statically typed scripting language (in development)",

  head: [
    ["meta", { name: "theme-color", content: "#221328" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  markdown: {
    code: {
      lineNumbers: false,
    },
  },

  theme: defaultTheme({
    repo: "",
    colorMode: "auto",
    editLink: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    logo: "logo.png",
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Reference",
        link: "/reference/",
      },
      {
        text: "Changelog",
        link: "https://github.com/buzz-language/buzz/blob/main/CHANGELOG.md",
      },
      {
        text: "Github",
        link: "https://github.com/buzz-language/buzz",
      },
      {
        text: "Discord",
        link: "https://discord.gg/VnMdNSdpNV",
      },
      {
        text: "Released (0.5.0)",
        link: "https://buzz-lang.dev/0.5.0/",
        target: "_self",
        rel: "",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          children: [
            "building-installing",
            "get-started",
            "syntax",
            "types",
            "functions",
            "enums",
            "control-flow",
            "null-safety",
            "objects",
            "protocols",
            "scope",
            "errors",
            "import-export",
            "package",
            "fibers",
            "calling-native-code",
            "ffi",
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          children: [
            {
              text: "Standard Library",
              children: [
                "/reference/std/buffer",
                "/reference/std/crypto",
                "/reference/std/debug",
                "/reference/std/ffi",
                "/reference/std/fs",
                "/reference/std/gc",
                "/reference/std/http",
                "/reference/std/io",
                "/reference/std/manifest",
                "/reference/std/math",
                "/reference/std/os",
                "/reference/std/serialize",
                "/reference/std/std",
                "/reference/std/testing",
                "/reference/std/toml",
              ],
            },
            {
              text: "Builtins",
              children: [
                "/reference/builtins/strings",
                "/reference/builtins/lists",
                "/reference/builtins/maps",
                "/reference/builtins/patterns",
                "/reference/builtins/fibers",
                "/reference/builtins/ranges",
              ],
            },
          ],
        },
      ],
    },
  }),

  plugins: [
    googleAnalyticsPlugin({
      id: "G-02PDWMQLDK",
    }),
  ],
});
