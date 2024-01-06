import { HeroImages } from "@/utils/Images";
import React, { createContext, useContext, useEffect, useState } from "react";
export const UserCreateData = createContext();
export default function DataContext({ children }) {
  const [heroImage, setHeroImage] = useState(HeroImages);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevImage) => (prevImage + 1) % heroImage.length);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [heroImage.length]);

  const value = {
    current,
    heroImage
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
