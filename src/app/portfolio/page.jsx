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
        <div className={styles.card}>
          <a href="#" className={styles.link}>
            <Image
              className={styles.image}
              src="/thumbnails/portfolioThumbnail.png"
              alt=""
              width={420}
              height={210}
            />
          </a>
          <div className={styles.desc}>
            <a href="#">
              <h3 className={styles.title}>Portfolio</h3>
            </a>
            <ul>
              <li>
                <p className={styles.stack}>
                  Next.js 14 full-stack app using app router, server actions,
                  middleware, MongoDB, and Auth.js.
                </p>
              </li>
              <li>
                Posts can be viewed only if logged in (with arbitrary
                credentials (username: john, password: 123456) or GitHub) but{" "}
                <i>only admin</i> can create/update/delete posts .
              </li>
              <li>
                These are fetched using the <b>JSONPlaceholder</b> website's
                fake data REST API which works for all posts and single post
                pages.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <a href="#" className={styles.link}>
            <Image
              className={styles.image}
              src="/thumbnails/yakoThumbnail.png"
              alt=""
              width={420}
              height={210}
            />
          </a>
          <div className={styles.desc}>
            <a href="#">
              <h3 className={styles.title}>Yako (E-Commerce Store)</h3>
            </a>
            <ul>
              <li>
                <p className={styles.stack}>
                  Full stack MERN shopping application.
                </p>
              </li>
              <li>
                Once shopping cart has been filled and after logging in, user
                can make payments thanks to Stripe API. Firebase is used as
                storage of users and products.
              </li>
              <li>Will be ready on 19/02/2024.</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <a href="#" className={styles.link}>
            <Image
              className={styles.image}
              src="/thumbnails/catchballThumbnail.png"
              alt=""
              width={420}
              height={210}
            />
          </a>
          <div className={styles.desc}>
            <a href="#">
              <h3 className={styles.title}>Ballcatcher (JavaScript Game)</h3>
            </a>
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
                JavaScript is used draw the characters and background on a
                canvas element.
              </li>
              <li>Will be ready on 19/02/2024.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
