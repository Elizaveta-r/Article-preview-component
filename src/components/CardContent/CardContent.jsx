import { AuthorInfo } from "../AuthorInfo/AuthorInfo";
import styles from "./CardContent.module.scss";

export const CardContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
      <AuthorInfo />
    </div>
  );
};
