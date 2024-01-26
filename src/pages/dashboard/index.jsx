"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      
      setIsAuthenticated(true);
    } else {
      router.replace("/login");
    }
  }, [router]);
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <h1>Welcome to the Dashboard </h1>
    </>
  );
}
