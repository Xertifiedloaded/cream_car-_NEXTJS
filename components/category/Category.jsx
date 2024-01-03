import styles from "./category.module.css";
import { categories } from "@utils/Nav";

export default function Category() {
  return (
    <>
      <section className={styles.main}>
        <div style={{ width: "100%" }}>
          <h1>Category</h1>
          <div className={styles.container}>
            {categories.map((category, index) => (
              <CarCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const CarCategory = ({ key, image, content, coming }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image.src})` }}
      className={styles.card}
    >
      <div className={styles.content} key={key}>
        <h2>{content}</h2>
        <p>{coming}</p>
      </div>
    </div>
  );
};
