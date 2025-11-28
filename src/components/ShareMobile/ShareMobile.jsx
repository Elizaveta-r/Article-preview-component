import { IconFacebook } from "../../assets/img/IconFacebook";
import { IconPinterest } from "../../assets/img/IconPinterest";
import { IconShare } from "../../assets/img/IconShare";
import { IconTwitter } from "../../assets/img/IconTwitter";
import styles from "./ShareMobile.module.scss";

const renderData = [
  { icon: <IconFacebook /> },
  { icon: <IconTwitter /> },
  { icon: <IconPinterest /> },
];

export const ShareMobile = ({ setVisible }) => {
  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div className={styles.share}>
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

      <div className={styles.shareIcon} onClick={handleClick}>
        <IconShare fill="hsl(210, 46%, 95%)" />
      </div>
    </div>
  );
};
