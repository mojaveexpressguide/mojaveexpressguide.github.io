import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 class="black-text-shadow" className="hero__title">{siteConfig.title}</h1>
        <b class="black-text-shadow"> A Viva New Vegas Extension Guide (This guide is no longer actively supported and soon to be archived 31/03/2024.) </b>
        <br />
        <br />
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/Overview">
            To Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Viva New Vegas Extension Guide"      
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}