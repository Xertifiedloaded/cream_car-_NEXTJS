import { categories } from "@/utils/Nav";
import styles from "./category.module.css";

import SkeletonLoader from "../lazy-load/Loader";
import Image from "next/image";
import { Card } from "@/utils/Button";
import { UserUseData } from "@/context/DataContext";
export default function Category() {
  const { data, loading } = UserUseData();
  return (
    <>
      <section className={styles.main}>
        <div style={{ width: "100%" }}>
          <h1>Category</h1>
          <div className={styles.container}>
            {data.map((category, index) => (
              <CarCategory loading={loading} {...category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const CarCategory = ({ paragraph,data,loading, picture, content }) => {
  return (
    <>
      
        <div className={styles.card}>
          (
          <Image
            layout="fill"
            alt="category img"
            objectFit="cover"
            src={picture}
          />
          )
          <div className={styles.content}>
            <h2>{content}</h2>
            <p>{paragraph}</p>
          </div>
        </div>
      
    </>
  );
};
