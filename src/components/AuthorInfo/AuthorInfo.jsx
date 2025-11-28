import styles from "./AuthorInfo.module.scss";
import Michelle from "../../assets/img/avatar-michelle.jpg";
import { IconShare } from "../../assets/img/IconShare";
import { useState } from "react";
import { Share } from "../Share/Share";
import { useMediaQuery } from "react-responsive";
import { ShareMobile } from "../ShareMobile/ShareMobile";

export const AuthorInfo = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const [isVisibleShare, setVisibleShare] = useState(false);

  const handleMouseEnter = () => {
    setVisibleShare(true);
  };

  const handleMouseLeave = () => {
    setVisibleShare(false);
  };

  const handleToggle = () => {
    setVisibleShare(!isVisibleShare);
  };

  return (
    <div className={styles.bottom}>
      <div className={styles.author}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatar}
            src={Michelle}
            alt="Michelle's avatar"
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>Michelle Appleton</p>
          <p className={styles.date}>28 Jun 2020</p>
        </div>
      </div>
      <div
        className={styles.share}
        onClick={isMobile ? handleToggle : undefined}
        onMouseEnter={isMobile ? undefined : handleMouseEnter}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
      >
        <IconShare />

        {!isMobile && (
          <div
            className={`${styles.sharePopover} ${
              isVisibleShare ? styles.visible : ""
            }`}
          >
            <Share />
          </div>
        )}
      </div>
      {isMobile && (
        <div
          className={`${styles.sharePopoverMobile} ${
            isVisibleShare ? styles.visible : ""
          }`}
        >
          <ShareMobile setVisible={setVisibleShare} />
        </div>
      )}
    </div>
  );
};
