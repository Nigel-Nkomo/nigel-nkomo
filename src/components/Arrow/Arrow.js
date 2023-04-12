import styles from "./Arow.module.css";

export default function Arrow() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#fff"
        viewBox="0 0 256 256"
        className={styles.arow}
      >
        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
      </svg>
    </>
  );
}
