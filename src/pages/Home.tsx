import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  siteIntro,
  restaurants,
  getFeaturedDeals,
} from "../content";
import SearchBar from "../components/SearchBar";
import TagBadge from "../components/TagBadge";
import styles from "./Home.module.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const featured = getFeaturedDeals();

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.trim()) {
      navigate(`/browse?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Discounts, Good Value Deals, Free Stuff &amp; Rewards
        </h1>
        <p className={styles.intro}>{siteIntro}</p>
        <div className={styles.search}>
          <SearchBar value={search} onChange={handleSearch} />
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{restaurants.length}</span>
            <span className={styles.statLabel}>Restaurants</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>
              {restaurants.reduce((n, r) => n + r.deals.length, 0)}
            </span>
            <span className={styles.statLabel}>Deals</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Featured Deals</h2>
          <Link to="/browse">View all →</Link>
        </div>
        <div className={styles.featuredGrid}>
          {featured.map(({ restaurant, deal }) => (
            <Link
              key={`${restaurant.id}-${deal.title}`}
              to={`/restaurant/${restaurant.id}`}
              className={styles.featuredCard}
            >
              <span className={styles.featuredRestaurant}>{restaurant.name}</span>
              <span className={styles.featuredDeal}>{deal.title}</span>
              {deal.tags && (
                <div className={styles.featuredTags}>
                  {deal.tags.slice(0, 2).map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.quickLinks}>
        <Link to="/tools" className={styles.quickLink}>
          <span className={styles.quickIcon}>🛠</span>
          <span>
            <strong>Tools</strong>
            <small>Temp email, birthday freebies, surplus apps</small>
          </span>
        </Link>
        <Link to="/browse" className={styles.quickLink}>
          <span className={styles.quickIcon}>🍕</span>
          <span>
            <strong>Browse Deals</strong>
            <small>Search and filter all restaurants</small>
          </span>
        </Link>
      </section>
    </div>
  );
}
