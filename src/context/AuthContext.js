'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
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
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
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

        console.log("User data sent successfully");

      } else {
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
  }, []);


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
    setLoggedIn
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
