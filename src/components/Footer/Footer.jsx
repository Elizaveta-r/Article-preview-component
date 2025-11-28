import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Challenge by
      <a
        className={styles.link}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className={styles.link}
        href="https://www.frontendmentor.io/profile/Elizaveta-r"
        target="_blank"
      >
        Elizaveta
      </a>
      .
    </footer>
  );
};
