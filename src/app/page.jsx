import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title of homepage</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          alias quasi facilis, tenetur hic ut nulla doloremque distinctio quo
          id! Quidem provident iusto pariatur quas aliquid cumque quam nostrum
          nemo!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image className={styles.brandImg} src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
};

export default Home;

// fill attribute used to fill image container
