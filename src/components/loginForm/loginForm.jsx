"use client";

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

//   useEffect(() => {
//     state?.success && router.push("/login");
//   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button className={styles.login}>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have have an account?"} <b className={styles.register}>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
