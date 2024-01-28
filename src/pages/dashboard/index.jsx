"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../components/styles/dashboard.module.css";
import { textAccordions } from "@/utils/accordions";
import axios from "axios";
export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    paragraph: "",
    headline:""
  });
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
  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("paragraph", formData.paragraph);
      formDataToSend.append("headline", formData.headline);

      await axios.post("http://localhost:4500/api/admin/v1/post", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        image: null,
        content: "",
        paragraph: "",
        headline:""
      });
  
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.heading}>
          <button>View site</button>
          <div className={styles.details}>
            <p>Howdy,</p>
            <p>Olaitan</p>
            <img src="" alt="image" />
          </div>
        </div>
        <main className={styles.main}>
          <aside className={styles.widget}>
            <h1>DashBoard</h1>
            <div className={styles.list}>
              <ul>
                {textAccordions.map((text, index) => {
                  return (
                    <>
                      <div className={styles.box}>
                        <li key={index} onClick={() => handleItemClick(index)}>
                          {text.heading}
                        </li>

                        {index === openIndex && (
                          <div className={styles.accordions}>
                            <li>{text.content}</li>
                            <li>{text.text}</li>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })}
              </ul>
            </div>
          </aside>
          <div className={styles.textBody}>
            <div className={styles.postForm}>
              <h2>Add New Post</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input type="file" onChange={handleImageChange} />
                <div className={styles.inputs}>
                  <input
                    type="text"
                    placeholder="Content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                  />
                
                </div>
                <div className={styles.inputs}>
                <input
                    type="text"
                    placeholder="headline"
                    name="headline"
                    value={formData.headline}
                    onChange={handleChange}
                  />
                
                </div>
                <textarea
                  className={styles.textArea}
                  placeholder="Paragraph"
                  name="paragraph"
                  value={formData.paragraph}
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
