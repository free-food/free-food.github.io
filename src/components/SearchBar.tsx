import { useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  onFocus?: () => void;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search restaurants and deals…",
  autoFocus = false,
  onFocus,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.icon} aria-hidden>
        🔍
      </span>
      <input
        ref={inputRef}
        type="search"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        aria-label="Search"
      />
      {value && (
        <button
          type="button"
          className={styles.clear}
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
