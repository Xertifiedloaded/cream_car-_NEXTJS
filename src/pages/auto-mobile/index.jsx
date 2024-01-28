import React from "react";
import Postlayout from "../../../layouts/postlayout";
import RequestPage from "@/components/request/Request";
import Car from "@/components/car/Car";

export default function AutoMobile() {
  return (
    <>
      <RequestPage />
      <Car />
    </>
  );
}
AutoMobile.Layout = Postlayout;
