// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mojave Express Wabbajack',
  tagline: 'A quality wabbajack with curated mods',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.mojaveexpressguide.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

    plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mojaveexpressguide', // Usually your GitHub org/user name.
  projectName: 'mojaveexpressguide.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mojaveexpressguide/mojaveexpressguide.github.io/edit/master',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    colorMode: {
    defaultMode: 'dark',
    disableSwitch: false, // Optional: true disables the toggle switch
    respectPrefersColorScheme: false, // Optional: false ignores the user's OS theme
    },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mojave Express Wabbajack',
        logo: {
          alt: 'MEW Logo',
          src: 'img/MojaveExpressWabbajack.png',
          },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Wabbajack',
            position: 'left',
            label: 'Wabbajack',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Benchmarks',
            position: 'left',
            label: 'Benchmarks',
          },
          {
            type: 'docSidebar',
            sidebarId: 'FAQ',
            position: 'left',
            label: 'FAQ',
          },

          {to: '/blog', label: 'Changelog', position: 'left'},
          {
            href: "https://github.com/mojaveexpressguide/mojaveexpressguide.github.io",
            //label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: 'https://discord.gg/SFpZYpAuUz',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
                href: 'https://moddinglinked.com/dogmas.html',
              },
              {
                label: 'xEdit: The Basics',
                href: 'https://moddinglinked.com/xedit.html',
              },
              {
                label: 'xEdit: The Method',
                href: 'https://moddinglinked.com/themethod.html',
              },
            ],
          },
          {
            title: 'Other Guides',
            items: [
              {
                label: 'Viva New Vegas',
                to: 'https://vivanewvegas.moddinglinked.com/index.html',
              },
              {
                label: 'Wasteland Survival Guide',
                to: 'https://wastelandsurvival.guide/',
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
        copyright: `Copyright © ${new Date().getFullYear()} Mojave Express Wabbajack.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
