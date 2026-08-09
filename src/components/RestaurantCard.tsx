import { Link } from "react-router-dom";
import type { Restaurant } from "../content/deals";
import TagBadge from "./TagBadge";
import styles from "./RestaurantCard.module.css";

type Props = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: Props) {
  const allTags = [
    ...new Set(restaurant.deals.flatMap((d) => d.tags ?? [])),
  ];
  const topDeal = restaurant.deals[0];

  return (
    <Link to={`/restaurant/${restaurant.id}`} className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.name}>
          {restaurant.name}
          {restaurant.featured && (
            <span className={styles.featured} title="Featured">
              ★
            </span>
          )}
        </h2>
        <span className={styles.count}>
          {restaurant.deals.length} deal
          {restaurant.deals.length !== 1 ? "s" : ""}
        </span>
      </div>
      {topDeal && (
        <p className={styles.preview}>
          {topDeal.summary ?? topDeal.title}
        </p>
      )}
      {allTags.length > 0 && (
        <div className={styles.tags}>
          {allTags.slice(0, 4).map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </Link>
  );
}
