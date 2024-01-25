"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [payLoad, setPayLoad] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayLoad((data) => {
      return { ...data, [name]: value };
    });
  };


  // const url = "https://ola-gdx8.onrender.com/api/admin/v1/login";
  // const [loading, setLoading] = useState(false);
  // const [payLoad, setPayLoad] = useState({
  //   email: "",
  //   password: "",
  // });
  // const router = useRouter();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPayLoad((data) => {
  //     return { ...data, [name]: value };
  //   });
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payLoad),
  //     });
  //     if (response.ok) {
  //       const { token } = await response.json();
  //       localStorage.setItem("token", token);
  //       console.log("login successfully");
  //       setPayLoad({
  //         email: "",
  //         password: "",
  //       });
  //       console.log(router);
  //       router.push("/dashboard");
  //     } else {
  //       console.error("Login failed");
  //     }
  //   } catch (error) {
  //     console.error("Error during authentication:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Cream</h1>
            <p>welcome Back, We missed you!</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form} action="">
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.email}
                value={payLoad.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter your Name here"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.password}
                onChange={handleChange}
                value={payLoad.password}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.forget}>
              <p>
                Forgotten Password? <Link href=""> Click Here</Link>
              </p>
              <div className={styles.btn}>
                <button disabled={loading}>
                  {loading ? <div class={styles.loader}></div> : "Login"}
                </button>
              </div>
              <div className={styles.signup}>
                Don't have an account? <Link href="/signup"> Register</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
