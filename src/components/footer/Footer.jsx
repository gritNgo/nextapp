import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>My NEXT app</div>
      <div className={styles.text}>My Next App © All rights reserved.</div>
    </div>
  );
};

export default Footer;
