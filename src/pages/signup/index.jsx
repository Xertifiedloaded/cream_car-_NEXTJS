"use client";
import React, { useState } from "react";
import styles from "./signup.module.css";
import Link from "next/link";

export default function SignUp() {
  const url = "https://ola-gdx8.onrender.com/api/admin/v1/signup";
  const [payLoad, setPayLoad] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });
      console.log("User data sent successfully");
      if (response.ok) {
        const data = await response.json();

        console.log("User data sent successfully");

        setPayLoad({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
        });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Cream</h1>
            <p>Welcome to CREAM!</p>
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            className={styles.form}
            action="/signup"
          >
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.firstName}
                value={payLoad.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Your First Name e.g Olaitan"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.lastName}
                onChange={handleChange}
                value={payLoad.lastName}
                name="lastName"
                type="text"
                placeholder="Your Last Name e.g Olaitan"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.email}
                onChange={handleChange}
                value={payLoad.email}
                name="email"
                type="email"
                placeholder="Your Email e.g makindeolaitan01@gmail.com"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.phoneNumber}
                onChange={handleChange}
                value={payLoad.phoneNumber}
                name="phoneNumber"
                type="text"
                placeholder="Phone Number e.g 08050726434"
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
              <div className={styles.btn}>
                <button type="submit">SignUp</button>
              </div>
              <div className={styles.signup}>
                Already have an Account? <Link href="/login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
