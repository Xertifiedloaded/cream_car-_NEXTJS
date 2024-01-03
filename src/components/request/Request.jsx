
import styles from "./request.module.css";
export default function RequestPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Don’t fret, if you couldn’t find what you are searching for.</h1>
          <p>
            Just click on “Make A Request” and describe your desired property or
            automobile.
          </p>
          <p>
            Vendors and agents that have access to your desired property or
            automobile would reach out to you through the contact details you
            provide.
          </p>
          <button>Make a request</button>
        </div>
      </main>
    </>
  );
}
