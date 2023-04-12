import styles from "./Project.module.css";
import Arrow from "../Arrow/Arrow";

export default function Project({ imgUrl }) {
  return (
    <section>
      <div className={styles.project}>
        <a href="#" className={styles.projectLink}>
          <div className={styles.arrow}>
            <Arrow />
          </div>
        </a>
        <img src={imgUrl} className={styles.projectImage} />
      </div>
      <div className={styles.projectLinks}>
        <a href="#" className={styles.link}>
          View Code ↗
        </a>
        <a href="#" className={styles.link}>
          View Live Site ↗
        </a>
      </div>
    </section>
  );
}
