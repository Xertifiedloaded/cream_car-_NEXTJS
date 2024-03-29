'use client'
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://ola-gdx8.onrender.com/api/admin/v1/login";
  const urlAccount = "https://ola-gdx8.onrender.com/api/admin/v1/accounts"
  const login = async (payLoad) => {

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          const token = data.data.admin.token;
          const userName = data.data.admin.lastName;
          setUser({
            token: token,
            name: userName,
          });

          localStorage.setItem('token', token);
          const accountsResponse = await fetch(urlAccount, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });
          console.log("Accounts Response:", await accountsResponse.json());
          console.log("login and subsequent request successful");
        } else {
          console.error("Login failed");
        }
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "An error occurred";
        console.error("Error:", errorMessage);
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setError(error.message);
    }

  };



  const signup = async (payLoad) => {
    const url = "https://ola-gdx8.onrender.com/api/admin/v1/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad),
      });

      if (response.ok) {
        setLoggedIn(true);
        router.push('/login');
        console.log("User data sent successfully");

      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "An error occurred";
        console.error("Error:", errorMessage);
        setError(errorMessage);
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
      console.error("Error:", error);
    }
  };
  // check if token is stored in local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, [isLoggedIn]);
  // log out
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setLoggedIn(false);
  };





  const value = {
    user,
    login,
    logout,
    signup,
    isLoggedIn,
    setLoggedIn,
    error,
    setError
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
