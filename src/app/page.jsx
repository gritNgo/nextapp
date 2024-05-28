import Image from "next/image";
import styles from "./home.module.css";
import { GitHub, LinkedIn} from "@mui/icons-material";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Hi, I'm Fiorenso.
        </h1>
        <div className={styles.desc}>
          <h3 className={styles.subHeading}>
          I am a developer on the journey to
            become an expert in using .NET, with my present focus on ASP .NET Core & EF Core.
          </h3>
          <p>
            <b>I have a degree in Computing from London</b>, and after putting a 
            brief pause to my career I have now resumed it. I have a 
            strong foundation in C#, Cloud Computing and with decent JavaScript basics. I am taking the AI-900 exam in June to 
            solidify my understanding of Azure's AI workloads and Machine 
            Learning basics, and keep expanding my knowledge by completing 
            different paths on Azure and other technologies.
            Moving to this beautiful country had always been a dream of mine so
            I began 2024 by making the move from London which was my home for
            nearly a decade, and am now looking for an opportunity where I will
            be able to contribute in creating meaningful work with my
            creativity, and great team spirit.
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
              href="/pdf/FiorensoWattalageFernando_May2024_CV.pdf"
              target="_blank"
            >
              Résumé 
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
      
    </div>
  );
};

export default Home;
