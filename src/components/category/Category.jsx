import { categories } from "@/utils/Nav";
import styles from "./category.module.css";
import Image from "next/image";

import { useEffect, useState } from "react";
import SkeletonLoader from "../lazy-load/Loader";

export default function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_ENDPOINT =
    "https://ola-gdx8.onrender.com/api/category/v1/allcategories";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error("Error fetching category");
        }
        const result = await response.json();
        setData(result.data.getCategory);
        console.log(result.data.getCategory);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className={styles.main}>
        <div style={{ width: "100%" }}>
          <h1>Category</h1>

          <div className={styles.container}>
            {data.map((category, index) => (
              <div key={index} className={styles.card}>
             
                  <Image
                    layout="fill"
                    alt="category img"
                    objectFit="cover"
                    src={category.picture}
                  />
                
                <div className={styles.content}>
                  <h2>{category.content}</h2>
                  <p>{category.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
