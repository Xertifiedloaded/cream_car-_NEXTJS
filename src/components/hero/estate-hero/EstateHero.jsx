import React, { useState } from "react";
import styles from "./estatehero.module.css";
import Cancel from "@/utils/Cancel";
import Search from "@/utils/Search";
import { Button } from "@/utils/Button";
export default function EstateHero() {
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
        <h1 onClick={handleInputChange}>
          REAL <span>ESTATE</span>
        </h1>
        <p>One search is all it takes.</p>
        <div className={styles.collapse}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <Search />
            </div>
            <input
              type="text"
              className={styles.input}
              placeholder="Describe Your Desired House"
              value={searchValue}
              onChange={handleInputChange}
            />
            <div className={styles.cancel}>
              {searchValue && <Cancel onClick={clearSearch} />}
            </div>
          </div>
          <button className={styles.btn} style={Button}>Search <Search/></button>
        </div>
      </section>
    </>
  );
}
