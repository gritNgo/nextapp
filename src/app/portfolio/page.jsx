import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Page",
  description: "Portfolio Page for Next App",
};

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div className={styles.card}>
      <Image
          className={styles.image}
          src="/thumbnails/final3.png"
          alt=""
          width={420}
          height={200}
          />
          </div>
        <div className={styles.desc}>
          <h3>This Portfolio</h3>
          <ul>
            <li>#1</li>
            <li>#2</li>
            <li>#3</li>
          </ul>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.card}>
      <Image
          className={styles.image}
          src="/thumbnails/ecommerceThumbnail.png"
          alt=""
          width={420}
          height={200}
          />
          </div>
        <div className={styles.desc}>
          <h3>Yako (E-Commerce Store)</h3>
          <ul>
            <li>#1</li>
            <li>#2</li>
            <li>#3</li>
          </ul>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.card}>
      <Image
          className={styles.image}
          src="/thumbnails/catchballThumbnail.png"
          alt=""
          width={420}
          height={200}
          />
          </div>
        <div className={styles.desc}>
          <h3>Catchball (JavaScript Game)</h3>
          <ul>
            <li>#1</li>
            <li>#2</li>
            <li>#3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

/**
 * Catch-the-ball (JavaScript Game)
 * Yako (E-Commerce)
 * Portfolio
 * Posts can be viewed only if logged in (logged in by default for demo),
          but only admin can create/update/delete posts
*  (If you like to see for yourself use: username = John, password =
          password)
 */
