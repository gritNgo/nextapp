import Link from "next/link";
import styles from "./footer.module.css";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.created}>
          Built in Next.js & deployed on Vercel
        </div>
        <div className={styles.copyright}>
          Fiorenso Wattalage Fernando © All rights reserved.
        </div>
        <div className={styles.icons}>
          <Link href="https://www.linkedin.com/in/fiorenso-wattalage-fernando/">
            <LinkedIn className={styles.linkedinIcon} />
          </Link>
          <Link href="https://www.github.com/gritNgo">
            <GitHub className={styles.githubIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
