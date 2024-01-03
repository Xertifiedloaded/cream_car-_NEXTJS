"use client"
import { FooterItems } from "@utils/Nav";
import styles from "./footer.module.css"
import React from "react";


export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.section}>
          {FooterItems.map((footer, idx) => {
            return (
              <>
                <ul item={idx}>
                  <h3>{footer.headline}</h3>
                  <li>{footer.About}</li>
                  <li>{footer.contact}</li>
                  <li>{footer.blog}</li>
                  <li>{footer.terms}</li>
                </ul>
              </>
            )
          })}
        </section>
      </footer>
    </>
  );
}
