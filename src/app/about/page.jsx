import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About Page for Next App",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.desc}>
          <p>I only chose web development as my career in 2023.
          </p>
          <p>As I evidently lack years of expertise that most web developers have, I
          have been working triple time to close this gap by constantly
          improving. This version of the project presently serves 3 purposes: </p>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>Portfolio</h1>
            <p>To showcase my work to date & tech stack</p>
          </div>
          <div className={styles.box}>
            <h1>REST API: Fetching data</h1>
            <p>The Blog page fetches fake data from the website JSONPlaceholder as usually done for prototyping purposes</p>
          </div>
          <div className={styles.box}>
            <h1>REST API: Authentication</h1>
            <p>GitHub authentication is possible thanks to Auth.js
            Posts can be viewed only if logged in (logged in by default for demonstration purposes)
              (But only admin can create/update/delete posts).
            </p>
            <p>(If you like to see for yourself use: username = John, password = password)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
