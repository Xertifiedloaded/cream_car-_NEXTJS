import React from "react";
import classes from "./homehero.module.css";
import { Button } from "@/utils/Button";
export default function HomeHero() {
  return (
    <div className={classes.content}>
      <div className={classes.heroContentNew}>
        <h1>CREAM</h1>
      </div>
      <p>The intelligent Market space</p>
      <div className={classes.btn}>
        <button style={Button}>Explore</button>
        <button>Download App</button>
      </div>
    </div>
  );
}
