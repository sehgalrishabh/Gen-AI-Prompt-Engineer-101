import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const tracks = [
  {
    title: 'Part 1: Foundations',
    description: 'Build a robust mental model for LLM behavior and prompt quality.',
    href: '/docs/chapters/the-rise-of-prompt-engineer',
  },
  {
    title: 'Part 2: Art of Crafting',
    description: 'Master prompt anatomy and choose between zero-shot and few-shot patterns.',
    href: '/docs/chapters/the-anatomy-of-a-perfect-prompt',
  },
  {
    title: 'Part 3: Science of Reasoning',
    description: 'Apply CoT, ToT, CO-STAR, and multimodal workflows for advanced tasks.',
    href: '/docs/chapters/chain-of-thought-and-tree-of-thought',
  },
  {
    title: 'Part 4: Professional Edge',
    description: 'Package skills into portfolio-ready assets and monetizable services.',
    href: '/docs/chapters/building-a-prompt-portfolio',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Gen AI Prompt Engineer 101"
      description="Beginner to master prompt engineering course published with Docusaurus.">
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.kicker}>2026 EDITION</p>
          <Heading as="h1" className={styles.title}>
            Gen AI Prompt Engineer 101
          </Heading>
          <p className={styles.subtitle}>
            A structured beginner-to-master curriculum for prompt engineering, multimodal systems, and agent workflows.
          </p>
          <div className={styles.ctaRow}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start Learning
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/appendices/appendix-1-prompt-engineering-cheatsheets">
              Open Cheatsheets
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Course Tracks
          </Heading>
          <div className={styles.grid}>
            {tracks.map((track) => (
              <article key={track.title} className={styles.card}>
                <Heading as="h3">{track.title}</Heading>
                <p>{track.description}</p>
                <Link to={track.href}>Go to track</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
