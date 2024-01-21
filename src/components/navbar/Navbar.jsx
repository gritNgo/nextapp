import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>My NEXT App</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar

// TODO: Make sidebar close on link click