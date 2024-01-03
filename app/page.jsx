"use client";
import Category from "@components/category/Category";
import Hero from "@components/hero/Hero";
import RequestPage from "@components/request/Request";
import React from "react";

export default function Landing() {
  
  return (
    <>
      <div>
        <Hero />
        <Category />
        <RequestPage />
      </div>
    </>
  );
}
