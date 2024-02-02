import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <br></br>
          Hi, I'm Fiorenso
          <span className={styles.wave} role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <div className={styles.desc}>
          <p>
            I am a junior Full Stack JavaScript developer on a journey to become
            an expert in the field.
          </p>
          <p>
            After getting my Computing degree in London in 2022 I started
            traveling for about a year while working part-time, which was a much
            needed break after years of studying.{" "}
          </p>
          <p>Moving to this beautiful country had always been a dream of mine and I
          began 2024 by finally making the move from where I called home for nearly the last decade, and am now looking for an
          opportunity where I will be able to contribute in creating meaningful
          work and prove that I am a capable individual that will provide value
          in the team.</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Portfolio</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.contact}>
          <span className={styles.contactText}>
            Get In Touch <span className={styles.contactEmoji}>👉</span>
            <span>
              <a
                href="mailto:fiorenso.fernando8@gmail.com"
                target="blank"
                className={styles.email}
              >
                fiorenso.fernando8@gmail.com
              </a>
            </span>
          </span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.heroImg}
          src="/amps8.jpeg"
          alt=""
          width={350}
          height={450}
        />
      </div>
    </div>
  );
};

export default Home;
