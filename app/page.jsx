'use client'
import Category from "@components/category/Category";
import Hero from "@components/hero/Hero";
import { useRouter } from "next/navigation";
import React from "react";

export default function Landing() {
  const location = useRouter();
  const homePage = location.pathname === "/";
  console.log(homePage)
  return (
    <>

      <div>
      <Hero />
        <Category />
      </div>

    </>
  );
}
