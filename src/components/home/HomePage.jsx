"use client";

import Category from "../category/Category";
import Hero from "../hero/Hero";
import RequestPage from "../request/Request";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Category />
      <RequestPage />
    </>
  );
}
