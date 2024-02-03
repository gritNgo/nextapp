import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.desc}>
          <p>I chose web development as my career only in 2023.</p>
          <p>
            As I evidently lack years of expertise that many other web
            developers have, I have been working double time to close this gap
            by constantly improving. This first version of the project serves 3
            demonstrative purposes:{" "}
          </p>
        </div>
        <div className={styles.stackContainer}>
          <h2>TECHNOLOGIES I'VE WORKED WITH</h2>
          <div className={styles.stack}>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h3>Portfolio</h3>
          <p>To showcase my work to date</p>
        </div>
        <div className={styles.box}>
          <h3>REST API: Fetching data</h3>
          <p>
            The Blog page fetches fake data from the <i>JSONPlaceholder</i>{" "}
            website, as is usually done when prototyping.
          </p>
        </div>
        <div className={styles.box}>
          <h3>REST API: Authentication</h3>
          <p>
            GitHub authentication is integrated thanks to Auth.js, which
            automatically handles OAuth callbacks. Posts can be viewed only if
            logged in (logged in by default for demo), but only admin can
            create/update/delete posts.
          </p>
          <p>
            (If you like to see for yourself use: username = John, password =
            password)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
