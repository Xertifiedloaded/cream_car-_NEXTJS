"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserUseData } from "@/context/DataContext";
const MyNextJSComponent = () => {
  const { data } = UserUseData();

  return (
    <div>
      <h1>Categories:</h1>
      <>
        <ul>
          {data.map((category) => (
            <>
              <li>{category.content}</li>
              <Image src={category.picture} width={200} height={200} />
            </>
          ))}
        </ul>
      </>
    </div>
  );
};

export default MyNextJSComponent;
