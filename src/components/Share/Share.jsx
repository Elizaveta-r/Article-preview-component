import styles from "./Share.module.scss";
import { useMediaQuery } from "react-responsive";
import { IconShare } from "../../assets/img/IconShare";
import { IconFacebook } from "../../assets/img/IconFacebook";
import { IconTwitter } from "../../assets/img/IconTwitter";
import { IconPinterest } from "../../assets/img/IconPinterest";

const renderData = [
  { icon: <IconFacebook /> },
  { icon: <IconTwitter /> },
  { icon: <IconPinterest /> },
];

export const Share = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className={styles.share}>
      <div className={styles.wrapper}>
        <div className={styles.triangle} />

        <div className={styles.shareText}>
          <p className={styles.text}>share</p>
          <div className={styles.icons}>
            {renderData.map((item, index) => (
              <div key={index} className={styles.icon}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        {isMobile && <IconShare />}
      </div>
    </div>
  );
};
