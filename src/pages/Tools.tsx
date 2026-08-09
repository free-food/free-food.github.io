import {
  toolLinks,
  surplusApps,
  surplusAppsIntro,
} from "../content/deals";
import styles from "./Tools.module.css";

export default function Tools() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Tools</h1>
        <p>Helpful resources for finding and claiming deals.</p>
      </header>

      <section className={styles.section}>
        <h2>Utilities</h2>
        <div className={styles.grid}>
          {toolLinks.map((tool) => (
            <a
              key={tool.id}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.toolCard}
            >
              <h3>{tool.name}</h3>
              {tool.description && <p>{tool.description}</p>}
              <span className={styles.link}>Open ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Surplus Restaurant &amp; Grocery Apps</h2>
        <p className={styles.intro}>{surplusAppsIntro}</p>
        <div className={styles.appList}>
          {surplusApps.map((app) => (
            <details key={app.id} className={styles.appItem}>
              <summary>{app.name}</summary>
              {app.description && <p>{app.description}</p>}
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
