"use client";
import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const contact = () => {

    const router = useRouter();
  
   const handleSubmit = async (e) => {
      e.preventDefault();
      
      const name = e.target[0].value;
      const email = e.target[1].value;
      const message = e.target[2].value;

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      res.status === 201 && router.push("/");
    } catch (err) {
      console.log(err);
    }
    };
  return (
     <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="name" required className={styles.input} />
          <input type="text" placeholder="email" required className={styles.input} />
          <textarea
            className={styles.textArea}
            required
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
          
        </form>
      </div>
    </div>
  )
}

export default contact

