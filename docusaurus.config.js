// @ts-check
// `npm run start` — dev server
// `npm run build` — production build into `build/`
// `npm run serve` — serve the production build locally

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Expanse User Guide",
  tagline: "Documentation for the Expanse supercomputer at SDSC",
  favicon: "img/favicon.ico",

  // GitHub Pages deployment config
  url: "https://zonca.github.io",
  baseUrl: "/expanse-docusaurus/",
  organizationName: "zonca",
  projectName: "expanse-docusaurus",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Adds an "Edit this page" button on every doc page,
          // linking straight to the file on GitHub
          editUrl: "https://github.com/zonca/expanse-docusaurus/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content:
            "User Guide for the Expanse supercomputer at the San Diego Supercomputer Center",
        },
      ],
      navbar: {
        title: "Expanse User Guide",
        logo: {
          alt: "San Diego Supercomputer Center",
          src: "img/sdsc-logo.svg",
          srcDark: "img/sdsc-logo-white.svg",
          href: "https://www.sdsc.edu",
          target: "_self",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "userGuide",
            position: "left",
            label: "User Guide",
          },
          {
            href: "https://www.sdsc.edu/systems/expanse/index.html",
            label: "Expanse @ SDSC",
            position: "right",
          },
          {
            href: "https://github.com/zonca/expanse-docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Technical Summary", to: "/" },
              { label: "System Access", to: "/system-access" },
              { label: "Running Jobs", to: "/running-jobs" },
            ],
          },
          {
            title: "Expanse",
            items: [
              {
                label: "Expanse @ SDSC",
                href: "https://www.sdsc.edu/systems/expanse/index.html",
              },
              {
                label: "Expanse User Portal",
                href: "https://portal.expanse.sdsc.edu",
              },
              { label: "ACCESS Program", href: "https://access-ci.org/" },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/zonca/expanse-docusaurus",
              },
              {
                label: "SDSC Support",
                href: "https://www.sdsc.edu/support/index.html",
              },
              {
                label: "ACCESS Help Desk",
                href: "https://support.access-ci.org/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} San Diego Supercomputer Center, UC San Diego.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
