"use client";

import { createContext, useContext, useState } from "react";
export const CreateUserContext = createContext();
export default function Context({ children }) {
    const [name,setName]=useState("Olaitan")
  const value = {
    name,
    setName
  };
  return (
    <CreateUserContext.Provider value={value}>
      {children}
    </CreateUserContext.Provider>
  );
}
export const useUserContext = () => {
  const Context = useContext(CreateUserContext);
  if (!useContext) {
    throw new Error("context must be used within the context provider");
  }
  return Context;
};
