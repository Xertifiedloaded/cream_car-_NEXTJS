"use client";
import React, { useState } from "react";
import styles from "./signup.module.css";
import Link from "next/link";
import { useUserContext } from "@context/Context";
export default function Login() {
  const {name,setName}=useUserContext()
  const [isFocused, setFocused] = useState(false);
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (payLoad.name === "olaitan" && payLoad.password === "password123") {
      console.log(payLoad);
      setError("");
    } else if (payLoad.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      console.log(error);
    } else {
      setError("Incorrect email or password. Please try again.");
      console.log(error);
    }
  };

  const handleFocus = () => {
    setFocused(!isFocused);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  // focused
  const toggleFocus = () => {
    setFocus(!focus);
  };
  const toggleBlur = () => {
    setFocus(false);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Cream</h1>
            <p>Welcome to CREAM!</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form} action="">
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.name}
                value={payLoad.name}
                onChange={handleChange}
                name="firstName"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ borderColor: isFocused ? "#fcba03" : "black" }}
                type="text"
                placeholder="Your Firs Name e.g Olaitan"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.password}
                onChange={handleChange}
                value={payLoad.password}
                name="lastName"
                onFocus={toggleFocus}
                onBlur={toggleBlur}
                style={{ borderColor: focus ? "#fcba03" : "black" }}
                type="text"
                placeholder="Your Last Name e.g Olaitan"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.password}
                onChange={handleChange}
                value={payLoad.password}
                name="password"
                onFocus={toggleFocus}
                onBlur={toggleBlur}
                style={{ borderColor: focus ? "#fcba03" : "black" }}
                type="email"
                placeholder="Your Email e.g makindeolaitan01@gmail.com"
              />
            </div>
            <div className={styles.inputField}>
              <input
                autoComplete={payLoad.password}
                onChange={handleChange}
                value={payLoad.password}
                name="password"
                onFocus={toggleFocus}
                onBlur={toggleBlur}
                style={{ borderColor: focus ? "#fcba03" : "black" }}
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
                onFocus={toggleFocus}
                onBlur={toggleBlur}
                style={{ borderColor: focus ? "#fcba03" : "black" }}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.forget}>
              <div className={styles.btn}>
                <button>SignUp</button>
              </div>
              <div className={styles.signup}>
               Already have an Account? <Link href="signup">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
