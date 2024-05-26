"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);


  return (
    <div className={styles.container}>
      <a
        href="#"
        className={styles.toggleButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        
      </div>
      
    </div>
  );
};

export default Links;
