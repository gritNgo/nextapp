import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: 'About Page',
  description: 'About Page for Next App',
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About this app PLACEHOLDER</h2>
        <h1 className={styles.title}>HERO TEXT PLACEHOLDER</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rerum
          nostrum quaerat, nam tempora aspernatur fugiat ducimus ipsa nulla eos,
          accusantium error dolorum, cupiditate qui magni esse provident ex
          repudiandae.
        </p>
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
