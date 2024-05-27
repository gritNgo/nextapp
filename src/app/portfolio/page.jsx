import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Page",
  description: "Portfolio Page for Next App",
};

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/stackThumbnail.PNG"
            alt=""
            width={420}
            height={210}
          />
          <div className={styles.desc}>
            <h3 className={styles.title}>Stack (C#)</h3>
            <p className={styles.para}>
              Simulation of the data structure “stack”, where objects can be
              pushed onto the stack and when popped will be displayed on the
              console. Demonstrates use of defensive programming and error
              handling.
            </p>
          </div>
        </div>   

        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/stopwatchThumbnail.PNG"
            alt=""
            width={420}
            height={210}
          />
          <div className={styles.desc}>
            <h3 className={styles.title}>Stopwatch (C#)</h3>
            <p className={styles.para}>
              Simulation of a stopwatch with methods for starting and stopping
              that print duration on the console. Demonstrates use of
              encapsulation and fundamental knowledge of loops and conditional
              statements.
            </p>
          </div>
        </div>     

        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/comingsoon.jpg"
            alt=""
            width={420}
            height={210}
          />
          <div className={styles.desc}>
            <a href="#">
              <h3 className={styles.title}>DbConnectCmd (C#)</h3>
            </a>
            <p className={styles.para}>
              Simulation of connection to 2 different databases (SQL Server and
              Oracle) by using derived classes that contain override methods
              which provide the missing implementation for the abstract parent
              class. Demonstrates use of all four principles of Object-Oriented
              Programming.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.image}
            src="/thumbnails/comingsoon.jpg"
            alt=""
            width={420}
            height={210}
          />
          <div className={styles.desc}>
            <a href="#">
              <h3 className={styles.title}>WorkflowEngine (C#)</h3>
            </a>
            <p className={styles.para}>
              Simulation of a workflow engine that implements an interface to
              execute different implementations of the same method (Execute) in
              different workflows (UploadTrack and UploadVideo). Designed
              following the Open-closed principle in SOLID design, where the
              behavior of the application is output on the console and can be
              changed only by adding new classes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
