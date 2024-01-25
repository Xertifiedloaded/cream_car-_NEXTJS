"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
export default function Login() {
  const [payLoad, setPayLoad] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayLoad((data) => {
      return { ...data, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch( "https://ola-gdx8.onrender.com/api/admin/v1/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      });

      if (response.ok) {
        const { token } = await response.json();
        console.log("login successfully");
        localStorage.setItem('token', token);

      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };


 

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
                autoComplete={payLoad.name}
                value={payLoad.name}
                onChange={handleChange}
                name="name"
               
                type="text"
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
                <button>Login</button>
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
