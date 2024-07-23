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
          I am an Italian-Sri Lankan from London with the goal to become an excellent .NET developer. 
          I have a foundation in C# and Azure and keep expanding my knowledge continuously every day. 
          Having moved to Bilthoven in February, I have been upgrading my computing skills from early morning 
          while working at a hotel in the evening, and am now looking for an opportunity
           where I will be able to contribute in creating meaningful work with my creativity, great team spirit, and tenacity.
          </h3>
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
              href="/pdf/FiorensoWattalageFernando_July2024_CV.pdf"
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
