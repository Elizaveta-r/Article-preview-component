import styles from "./Card.module.scss";

export const Card = ({ img, children }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={img} className={styles.img} />
      <div className={styles.text}>{children}</div>
    </div>
  );
};
