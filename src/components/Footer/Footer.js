import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerInner}>
        <h2 className={styles.footerHeading}>Contact me</h2>
        <div className={styles.footerInfo}>
          <p>nigel.nkomo@icloud.com</p>
          <a className={styles.footerBtn} href="https://github.com/Nigel-Nkomo">
            Github →
          </a>
          <a className={styles.footerBtn} href="https://read.cv/nigelnkomo">
            Read.cv →
          </a>
          <p>+48 729 227 843</p>
        </div>
        <p className={styles.footerCopyright}>
          Copyright © {new Date().getFullYear()} by Nigel Nkomo
        </p>
      </div>
    </footer>
  );
}
