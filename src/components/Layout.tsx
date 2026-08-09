import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>🍽</span>
            Free Food
          </Link>
          <div className={styles.headerActions}>
            <nav className={styles.nav}>
              <Link to="/">Home</Link>
              <Link to="/tools">Tools</Link>
              <Link to="/browse">Browse</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Filling meals for $10 or less.</p>
      </footer>
    </div>
  );
}
