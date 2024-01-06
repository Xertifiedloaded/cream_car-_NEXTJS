import Hero from "@/components/hero/Hero";
import React from "react";

export default function Postlayout({ children,title, }) {
  return (
    <>
      <div>
        <Hero  />
      </div>
      {children}
    </>
  );
}
