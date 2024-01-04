"use client";

import Category from "../category/Category";
import Hero from "../hero/Hero";
import RequestPage from "../request/Request";
import HomeLayout from "./layout";

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Category />
      <RequestPage />
    </>
  );
}
