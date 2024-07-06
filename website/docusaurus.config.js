// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PlayStation Stars API',
  tagline: 'Documentation for the PlayStation Stars API',
  url: 'https://andshrew.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'andshrew', // Usually your GitHub org/user name.
  projectName: 'PlayStation-Stars', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          routeBasePath: '/', // Serve the docs at the site's root (docs only mode)
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/andshrew/PlayStation-Stars/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PlayStation Stars API',
        //style: 'dark' ,
        logo: {
          alt: 'PlayStation Stars Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'dropdown',
            label: 'Other APIs',
            position: 'left',
            items: [
              {
                label: 'PlayStation Trophies',
                href: 'https://andshrew.github.io/PlayStation-Trophies/#/',
              },
              {
                label: 'PS5 Backwards Compatibility',
                href: 'https://andshrew.github.io/supreme-enigma/',
              },
            ],
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/andshrew/PlayStation-Stars',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'PlayStation Stars',
                to: '/',
              },
            ],
          },
          {
            title: 'Other APIs',
            items: [
              {
                label: 'PlayStation Trophies',
                href: 'https://andshrew.github.io/PlayStation-Trophies/#/',
              },
              {
                label: 'PS5 Backwards Compatibility',
                href: 'https://andshrew.github.io/supreme-enigma/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/andshrew',
              },
              {
                label: 'PS1HD PlayStation Emulator',
                href: 'https://ps1hd.pages.dev/',
              },
              {
                label: 'PS3 HDD Adventures',
                href: 'https://ps3hdd.pages.dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.<br>This website is not affiliated with Sony Interactive Entertainment Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error-next-line',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      metadata: [{name: 'keywords', content: 'playstation, api, documentation, sony, stars, playstation stars, ps'}],
    }),
};

module.exports = config;
