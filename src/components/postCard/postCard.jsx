import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>25/01/2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo labore
          minus suscipit odit aliquid temporibus veniam laudantium quos,
          consectetur illum culpa possimus vero! Laboriosam molestiae quisquam
          et accusamus hic repellat?
        </p>
        <Link href="/blog/post" className={styles.link}>Read</Link>
      </div>
    </div>
  );
};

export default PostCard;
