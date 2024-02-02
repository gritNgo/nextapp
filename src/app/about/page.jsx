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
        <h1 className={styles.title}>About this Application</h1>
        <div className={styles.desc}>
          In uni I had just one minor module on Web Development. So most of my
          current skills on JavaScript, React, and Next.js I learned by myself
          in 2023 through research and practice from resources on the web. As I
          evidently lack years of expertise that most web developers have, I
          have been working triple time to close this gap by constantly
          improving. This project you see is a 2-in-1 project. It includes:
          1. My portfolio, which I am consistently working on expanding to
          showcase my work 
          2. A blog page that fetches posts via the API of a dummy post provider, to demonstrate ability to work with APIs.
          These posts can be only viewed by being logged in, but created/updated,deleted only by the admin user set in the database. 
          GitHub authentication into this web app is possible via Auth.js.
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>TRIVIA #1</h1>
            <p>About trivia #1</p>
          </div>
          <div className={styles.box}>
            <h1>TRIVIA #2</h1>
            <p>About trivia #2</p>
          </div>
          <div className={styles.box}>
            <h1>TRIVIA #3</h1>
            <p>About trivia #3</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
