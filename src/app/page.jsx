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
        <p className={styles.desc}>
          I am a junior Full Stack JavaScript developer on the journey to become
          an expert in the field. I am looking for an opportunity where I will
          be able to contribute in creating meaningful work and prove that I am
          a capable individual that will provide value in the team.
          <br></br>
          <span className={styles.initials}>
            {" "}
            (FWF are my initials if you were wondering 😁)
          </span>
        </p>
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
                className={styles.highlight}
              ></a>
              fiorenso.fernando8@gmail.com
            </span>
          </span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
};

export default Home;
