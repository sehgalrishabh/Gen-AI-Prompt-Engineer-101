import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part 1: Foundations',
      items: [
        'chapters/the-rise-of-prompt-engineer',
        'chapters/how-llms-actually-think',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: Art of Crafting',
      items: [
        'chapters/the-anatomy-of-a-perfect-prompt',
        'chapters/zero-shot-vs-few-shot-prompting',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Science of Reasoning',
      items: [
        'chapters/chain-of-thought-and-tree-of-thought',
        'chapters/the-co-star-framework-and-system-prompts',
        'chapters/multimodal-prompting-images-video-audio',
      ],
    },
    {
      type: 'category',
      label: 'Part 4: Professional Edge',
      items: [
        'chapters/building-a-prompt-portfolio',
        'chapters/monetization-freelancing-consulting-prompt-marketplaces',
        'chapters/future-prompting-for-ai-agents-and-autonomous-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendices/appendix-1-prompt-engineering-cheatsheets',
        'appendices/appendix-2-useful-tools',
      ],
    },
  ],
};

export default sidebars;
