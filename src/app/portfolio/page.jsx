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
      <div className={styles.projects}>
        <div className={styles.project}>
        <a href="" className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/portfolioThumbnail.png"
            alt=""
            width={420}
            height={200}
          />
        </a>
        <div className={styles.desc}>
          <h3>Portfolio</h3>
          <ul>
            <li>
              <p className={styles.stack}>
                  Next.js 14 full-stack app project using app router, server
                  actions, MongoDB, Auth.js.
                
              </p>
            </li>
            <li>
              Posts can be viewed only if logged in (logged in by default for
              demo (username: John, password: password)), but{" "}
              <i>only admin</i> can create/update/delete posts.
            </li>
            <li>
              These are fetched using the <b>JSONPlaceholder</b> website's fake
              data API which works for all posts and single post pages.
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className={styles.projects}>
      <div className={styles.project}>
        <a href="" className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/yako.png"
            alt=""
            width={420}
            height={200}
          />
        </a>
        <div className={styles.desc}>
          <h3>Yako (E-Commerce Store)</h3>
          <ul>
            <li>
              <p className={styles.stack}>
                Full stack shopping application using MERN.
              </p>
            </li>
            <li>
              After logging in user can make payments thanks to Stripe API, and
              Firebase is used as storage for users and products.
            </li>
            <li>Still in production, click to preview.</li>
          </ul>
        </div>
      </div>
      </div>
      <div className={styles.projects}>
      <div className={styles.project}>
        <a href="" className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/catchballThumbnail.png"
            alt=""
            width={420}
            height={200}
          />
        </a>
        <div className={styles.desc}>
          <h3>Catchball (JavaScript Game)</h3>
          <ul>
            <li>
              <p className={styles.stack}>
                Simple 2D game in Vanilla JavaScript.{" "}
              </p>
            </li>
            <li>
              Characters throw the ball to each other using
              mouse-click/press-hold drag. If the other catches, thrower wins.
            </li>
            <li>
              JavaScript is used draw the characters and background on a canvas
              element.
            </li>
            <li>Still in production, click to preview.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PortfolioPage;
