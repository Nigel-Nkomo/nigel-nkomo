import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#home" className={styles.navLogo}>
        nigel
      </a>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
