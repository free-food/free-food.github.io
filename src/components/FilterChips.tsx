import type { Tag } from "../content/deals";
import { allTags } from "../content/deals";
import styles from "./FilterChips.module.css";

type Props = {
  selected: Tag[];
  onChange: (tags: Tag[]) => void;
};

export default function FilterChips({ selected, onChange }: Props) {
  const toggle = (tag: Tag) => {
    if (selected.includes(tag)) {
      onChange(selected.filter((t) => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className={styles.chips} role="group" aria-label="Filter by tag">
      {allTags.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`${styles.chip} ${selected.includes(id) ? styles.active : ""}`}
          onClick={() => toggle(id)}
          aria-pressed={selected.includes(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
