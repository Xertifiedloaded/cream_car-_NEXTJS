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
        const { token } = await response.json();
        localStorage.setItem("token", token);
        setUser({ token });
        console.log("login successfully");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
