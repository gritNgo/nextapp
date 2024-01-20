import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="About page image"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
