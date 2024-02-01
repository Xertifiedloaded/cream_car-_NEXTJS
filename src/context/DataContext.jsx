import env from 'dotenv'
env.config()
import { HeroImages } from "@/utils/Images";
import React, { createContext, useContext, useEffect, useState } from "react";
export const UserCreateData = createContext();
export default function DataContext({ children }) {
  const [heroImage, setHeroImage] = useState(HeroImages);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_ENDPOINT="https://ola-gdx8.onrender.com/api/category/v1/allcategories"


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevImage) => (prevImage + 1) % heroImage.length);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [heroImage.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error("error Fetching category");
        }
        const result = await response.json();
        setData(result.data.getCategory);
  
      } catch (error) {
        console.log(error);
      }finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  const value = {
    current,
    heroImage,
    data,
    loading
  };
  return (
    <>
      <UserCreateData.Provider value={value}>
        {children}
      </UserCreateData.Provider>
    </>
  );
}
export const UserUseData = () => {
  const useUserData = useContext(UserCreateData);
  if (!useUserData) {
    throw new Error("data is not inside the useContext");
  }
  return useUserData;
};
