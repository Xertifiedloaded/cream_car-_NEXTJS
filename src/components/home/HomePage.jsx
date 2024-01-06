// "use client";
import React from "react";
import Postlayout from "../../../layouts/postlayout";
import Category from "../category/Category";
import Hero from "../hero/Hero";
import RequestPage from "../request/Request";

export default function HomePage() {
  return (
    <>
      <Postlayout>
        <Category />
        <RequestPage />
      </Postlayout>
    </>
  );
}

