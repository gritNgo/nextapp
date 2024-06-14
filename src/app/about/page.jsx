import styles from "./about.module.css";
import { Computer, WbIncandescent, Construction} from "@mui/icons-material";


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.stackContainer}>
          <div className={styles.stackTitle}><Computer className={styles.computerIcon} />TECH STACK</div>
          <div className={styles.stack}>
          <div className={styles.logo}>
              <img src="/svg/azure-original.svg" alt="Azure" width="50" height="50" />
            </div>
          <div className={styles.logo}>
              <img src="/svg/csharp.svg" alt="CSharp" width="50" height="50" />
            </div>
            
            
            <div className={styles.logo}>
              <img src="/svg/mysql.svg" alt="MySQL" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img
                src="/svg/mongodb.svg"
                alt="MongoDB"
                width="50"
                height="50"
              />
            </div>
            <div className={styles.logo}>
              <img
                src="/svg/javascript.svg"
                alt="JavaScript"
                width="50"
                height="50"
              />
            </div>
            <div className={styles.logo}>
              <img src="/svg/css.svg" alt="CSS" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/html.svg" alt="HTML5" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/linux.svg" alt="Linux" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/git.svg" alt="Git" width="50" height="50" />
            </div>
            <div className={styles.logo}>
              <img src="/svg/github.svg" alt="GitHub" width="50" height="50" />
            </div>
          </div>
        </div>
      <div className={styles.textContainer}>
      </div>
      </div>
      <div className={styles.boxes}> 
        <div className={styles.box}>
            <h3 className={styles.boxHeading}><Construction className={styles.toolsIcon} /> Tools</h3>
          <ul className={styles.list}>
            <li className={styles.checked}>Visual Studio</li>
            <li className={styles.checked}>Visual Studio Code</li>
            <li className={styles.checked}>MySQL Workbench</li>
            <li className={styles.checked}>Chrome Dev Tools</li>
            <li className={styles.checked}>Azure Portal</li>
          </ul>
        </div>
        <div className={styles.box}>
            <h3 className={styles.boxHeading}><WbIncandescent className={styles.bulbIcon} /> Knowledge</h3>
          <ul className={styles.list}>
            <li className={styles.checked}>Unit Testing (MSTest)</li>
            <li className={styles.checked}>Entity Framework Core</li>
            <li className={styles.checked}>Agile</li>
            <li className={styles.checked}>SCRUM</li>
            <li className={styles.checked}>SDLC</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
