import styles from './loader.module.css'
export default function SkeletonLoader() {
    return (
      <div className={styles.SkeletalLoading}>
        <div className={styles.skeletalItems}></div>
        <div className={styles.skeletalItems}></div>
        <div className={styles.skeletalItems}></div>
      </div>
    );
}