import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  restaurants,
  restaurantMatchesSearch,
  restaurantHasTag,
  type Tag,
} from "../content";
import SearchBar from "../components/SearchBar";
import FilterChips from "../components/FilterChips";
import RestaurantCard from "../components/RestaurantCard";
import styles from "./Browse.module.css";

export default function Browse() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(initialQuery);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const fromSearch = searchParams.has("q");

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const matchesSearch =
        !search.trim() || restaurantMatchesSearch(r, search.trim());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => restaurantHasTag(r, tag));
      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Browse Deals</h1>
        <p>Search and filter {restaurants.length} restaurants.</p>
      </header>

      <div className={styles.controls}>
        <SearchBar value={search} onChange={setSearch} autoFocus={fromSearch} />
        <FilterChips selected={selectedTags} onChange={setSelectedTags} />
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>
          No restaurants match your search. Try different keywords or clear
          filters.
        </p>
      ) : (
        <>
          <p className={styles.resultCount}>
            Showing {filtered.length} restaurant
            {filtered.length !== 1 ? "s" : ""}
          </p>
          <div className={styles.grid}>
            {filtered.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
