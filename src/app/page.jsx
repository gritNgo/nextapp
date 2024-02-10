import Image from "next/image";
import styles from "./home.module.css";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <br></br>
          Hi, I'm Fiorenso
          <span className={styles.wave} role="img" aria-labelledby="wave">
            👋🏽
          </span>
        </h1>
        <div className={styles.desc}>
          <p>
            I am a junior Full Stack JavaScript developer on the journey to
            become an expert.
          </p>
          <p>
            After getting my Computing degree in London in 2022 I started
            traveling for about a year while working part-time, which was a much
            needed break after years of studying.{" "}
          </p>
          <p>
            Moving to this beautiful country had always been a dream of mine. I
            began 2024 by finally making the move from where I called home for
            nearly a decade, and am now looking for an opportunity where I will
            be able to contribute in creating meaningful work through my
            creativity and great team spirit.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link href="https://www.linkedin.com/in/fiorenso-wattalage-fernando/">
            <button className={styles.linkedinButton}>
              <LinkedIn className={styles.linkedinIcon} />
              LinkedIn
            </button>
          </Link>
          <Link href="https://www.github.com/gritNgo">
            <button className={styles.githubButton}>
              <GitHub className={styles.githubIcon} />
              GitHub
            </button>
          </Link>
          <button className={styles.resumeButton}>
            <a
              href="/pdf/FiorensoWattalageFernandoCV.pdf"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
        <div className={styles.contact}>
          <span className={styles.contactText}>
            Get In Touch <span className={styles.contactEmoji}>👉🏽</span>
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
          src="/home.jpg"
          alt=""
          width={300}
          height={420}
          priority
        />
      </div>
    </div>
  );
};

export default Home;
