import { useState } from "react";
import type { Deal } from "../content/deals";
import TagBadge from "./TagBadge";
import styles from "./DealCard.module.css";

type Props = {
  deal: Deal;
  defaultOpen?: boolean;
};

export default function DealCard({ deal, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const hasDetails =
    (deal.steps && deal.steps.length > 0) ||
    (deal.bullets && deal.bullets.length > 0) ||
    (deal.links && deal.links.length > 0);

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.header}
        onClick={() => hasDetails && setOpen(!open)}
        aria-expanded={hasDetails ? open : undefined}
        disabled={!hasDetails}
      >
        <div className={styles.headerContent}>
          <h3 className={styles.title}>{deal.title}</h3>
          {deal.summary && <p className={styles.summary}>{deal.summary}</p>}
          {deal.tags && deal.tags.length > 0 && (
            <div className={styles.tags}>
              {deal.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
        {hasDetails && (
          <span className={`${styles.chevron} ${open ? styles.open : ""}`}>
            ›
          </span>
        )}
      </button>

      {open && hasDetails && (
        <div className={styles.body}>
          {deal.links && deal.links.length > 0 && (
            <div className={styles.links}>
              {deal.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
          {deal.steps && deal.steps.length > 0 && (
            <ol className={styles.steps}>
              {deal.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}
          {deal.bullets && deal.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {deal.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
