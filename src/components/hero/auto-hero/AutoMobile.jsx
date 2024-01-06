import React, { useState } from "react";
import styles from "../estate-hero/estatehero.module.css";
import Search from "@/utils/Search";
import Cancel from "@/utils/Cancel";
import { Button } from "@/utils/Button";
export default function AutoMobileHero() {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const clearSearch = () => {
    setSearchValue("");
  };
  return (
    <>
      <section className={styles.section}>
        <h1 onClick={handleInputChange}>AUTOMOBILE</h1>
        <p>Find new and preowned cars for sale.</p>
        <div className={styles.collapse}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <Search />
            </div>
            <input
              type="text"
              className={styles.input}
              placeholder="Describe Your Desired Car"
              value={searchValue}
              onChange={handleInputChange}
            />
            <div className={styles.cancel}>
              {searchValue && <Cancel onClick={clearSearch} />}
            </div>
          </div>
          <button className={styles.btn} style={Button}>
            Search <Search />
          </button>
        </div>
      </section>
    </>
  );
}
