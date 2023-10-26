// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mojave Express Guide',
  tagline: 'A Viva New Vegas Additions Guide',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.mojaveexpressguide.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mojaveexpressguide', // Usually your GitHub org/user name.
  projectName: 'mojaveexpressguide.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mojaveexpressguide/mojaveexpressguide.github.io/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mojaveexpressguide/mojaveexpressguide.github.io/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
      algolia: {
        appId: "C2T74REROO",
        apiKey: "be135029bc04538979fa65ae5a782501",
        indexName: "mojaveexpressguide",
        contextualSearch: false,
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      image: "img/MojaveExpressBanner.png",
      navbar: {
        title: "Mojave Express Guide",
        logo: {
          alt: "Mojave Express Guide Logo",
          src: "img/MojaveExpressSimpified.png",
        },
        items: [
          {
            type: "doc",
            docId: "Introduction",
            position: "left",
            label: "Guide",
          },
          {
            type: "doc",
            docId: "Appendix/FAQ",
            position: "left",
            label: "FAQ",
          },
          {
            type: "doc",
            docId: "Appendix",
            position: "left",
            label: "Appendix",
          },
          { to: "/blog", label: "Changelog", position: "left" },
          {
            href: "https://github.com/mojaveexpressguide/mojaveexpressguide.github.io",
            //label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Other Guides',
            items: [
              {
                label: 'Viva New Vegas',
                to: 'https://vivanewvegas.moddinglinked.com/index.html',
              },
              {
                label: 'Wasteland Survival Guide',
                to: 'https://wastelandsurvivalguide.com/',
              },
              {
                label: 'Performance Guide',
                to: 'https://performance.moddinglinked.com/falloutnv.html',
              },
              {
                label: 'Texture Guide',
                to: 'https://salamand3r.fail/texture-guide',
              },
              {
                label: 'LOD Guide',
                to: 'https://vivanewvegas.moddinglinked.com/lod.html',
              },
            ],
          },
          {
            title: 'Information',
            items: [
              {
                label: 'Tools to Avoid',
                href: 'https://vivanewvegas.moddinglinked.com/avoid-tools.html',
              },
              {
                label: 'Mods to Avoid',
                href: 'https://vivanewvegas.moddinglinked.com/avoid-mods.html',
              },
              {
                label: 'Dangerous Dogma',
                href: 'https://wastelandsurvivalguide.com/docs/dogma',
              },
              {
                label: 'xEdit: The Basics',
                href: 'https://wastelandsurvivalguide.com/docs/xedit',
              },
              {
                label: 'xEdit: The Method',
                href: 'https://wastelandsurvivalguide.com/docs/themethod',
              },
            ],
          },
          {
            title: 'Communities',
            items: [
              {
                label: 'Mojave Express',
                to: 'https://discord.gg/6brK3Pb8gR',
              },
              {
                label: 'Viva New Vegas',
                href: 'https://discord.com/invite/DhX5S27',
              },
              {
                label: 'xNVSE',
                href: 'https://discord.com/invite/taleoftwowastelands',
              },
              {
                label: 'TTW',
                href: 'https://discord.com/invite/EebN93s',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mojave Express Guide.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = {
  title: 'Mojave Express Guide',
  // ...
  themes: ['@docusaurus/theme-search-algolia'],
  themeConfig: {
    // ...
  },
};
