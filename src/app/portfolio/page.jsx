import Image from "next/image";
import styles from "./portfolio.module.css";

export const metadata = {
  title: 'Portfolio Page',
  description: 'Portfolio Page for Next App',
}

const PortfolioPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      
    </div>
  );
};

export default PortfolioPage;
