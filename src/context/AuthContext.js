'use client'
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const url = "https://ola-gdx8.onrender.com/api/admin/v1/login";
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
          let token = data.data.admin.token
          console.log(token)
          localStorage.setItem('token',token)
        }
   
        console.log("login successfully");
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
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };


  const value = {
    user,
    login,
    logout,
    signup
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
