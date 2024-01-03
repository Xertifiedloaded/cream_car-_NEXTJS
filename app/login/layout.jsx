import Header from "@components/ui/header/Header";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
