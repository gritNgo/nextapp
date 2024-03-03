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
                  Full stack MERN shopping application with Stripe payment
                </p>
              </li>
              <li>
                Once shopping cart has been filled user
                can make payments thanks to Stripe API. Firebase is used as
                storage of users and products.
              </li>
              <li>Product Catalog: Range of products with images and prices
              </li>
              <li>
                Shopping Cart: Manage selected items, view total cost, and
                proceed to checkout
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <a href="#" className={styles.link}>
            <Image
              className={styles.image}
              src="/thumbnails/rocketzThumbnail.PNG"
              alt=""
              width={420}
              height={210}
            />
          </a>
          <div className={styles.desc}>
            <a href="#">
              <h3 className={styles.title}>Rocketz (JavaScript Game)</h3>
            </a>
            <ul>
              <li>
                <p className={styles.stack}>
                  Simple 2D game in Vanilla JavaScript.{" "}
                </p>
              </li>
              <li>
                Characters shoot rockets at each other using
                mouse-click/press-hold drag. If the other gets shot, shooter wins.
              </li>
              <li>
                JavaScript is used draw the characters and background on a
                canvas element.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
