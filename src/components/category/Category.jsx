import { categories } from "@/utils/Nav";
import styles from "./category.module.css";
import { useUserContext } from "@/context/ContextApi";
import SkeletonLoader from "../lazy-load/Loader";
import Image from "next/image";
import { Card } from "@/utils/Button";
export default function Category() {
  const { loading } = useUserContext();
  return (
    <>
      <section className={styles.main}>
        <div style={{ width: "100%" }}>
          <h1>Category</h1>
          <div className={styles.container}>
            {categories.map((category, index) => (
              <CarCategory key={index} loading={loading} {...category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const CarCategory = ({ key, image, content, loading, coming }) => {
  return (
    <>
      <div
          key={key}
          className={styles.card}
        >
          <Image  
          layout="fill"
          alt="category img"
          objectFit="cover" src={image} />
          <div className={styles.content}>
            <h2>{content}</h2>
            <p>{coming}</p>
          </div>
        </div>
    </>
  );
};
