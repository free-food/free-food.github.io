import { Link, useParams } from "react-router-dom";
import { getRestaurantById } from "../content";
import DealCard from "../components/DealCard";
import styles from "./RestaurantDetail.module.css";

export default function RestaurantDetail() {
  const { id } = useParams<{ id: string }>();
  const restaurant = id ? getRestaurantById(id) : undefined;

  if (!restaurant) {
    return (
      <div className={styles.notFound}>
        <h1>Restaurant not found</h1>
        <Link to="/browse">← Back to browse</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link to="/browse" className={styles.back}>
        ← Back to browse
      </Link>

      <header className={styles.header}>
        <h1>
          {restaurant.name}
          {restaurant.featured && (
            <span className={styles.featured} title="Featured">
              ★
            </span>
          )}
        </h1>
        <p>
          {restaurant.deals.length} deal
          {restaurant.deals.length !== 1 ? "s" : ""} available
        </p>
      </header>

      <div className={styles.deals}>
        {restaurant.deals.map((deal, i) => (
          <DealCard key={deal.title} deal={deal} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}
