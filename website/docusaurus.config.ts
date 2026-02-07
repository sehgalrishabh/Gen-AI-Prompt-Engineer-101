import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gen AI Prompt Engineer 101',
  tagline: 'From Basics to Mastery (2026 Edition)',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://sehgalrishabh.github.io',
  baseUrl: '/Gen-AI-Prompt-Engineer-101/',

  organizationName: 'sehgalrishabh',
  projectName: 'Gen-AI-Prompt-Engineer-101',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          include: ['intro.md', 'chapters/**/*.{md,mdx}', 'appendices/**/*.{md,mdx}'],
          editUrl:
            'https://github.com/sehgalrishabh/Gen-AI-Prompt-Engineer-101/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gen AI Prompt Engineer 101',
      logo: {
        alt: 'Gen AI Prompt Engineer 101 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Chapters',
        },
        {
          href: 'https://github.com/sehgalrishabh/Gen-AI-Prompt-Engineer-101',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Chapter 1',
              to: '/docs/chapters/the-rise-of-prompt-engineer',
            },
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sehgalrishabh/Gen-AI-Prompt-Engineer-101',
            },
          ],
        },
        {
          title: 'Appendices',
          items: [
            {
              label: 'Cheatsheets',
              to: '/docs/appendices/appendix-1-prompt-engineering-cheatsheets',
            },
            {
              label: 'Useful Tools',
              to: '/docs/appendices/appendix-2-useful-tools',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gen AI Prompt Engineer 101. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
