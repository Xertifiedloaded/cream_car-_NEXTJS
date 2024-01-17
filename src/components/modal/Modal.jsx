import React from "react";
import styles from "./modal.module.css";
import Sidebar from "../sideBar/SideBar";
export default function Overlay({ toggleSideBar,sideBar, setSideBar }) {
  return (
    <div
      //   onClick={toggleSideBar}
      onClick={() => setSideBar(false)}
      className={`${styles.overlayy} && ${sideBar ? styles.open : styles.close} }`}
    >
      <Sidebar setSideBar={setSideBar} />
    </div>
  );
}
