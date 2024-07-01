"use client";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
        toast.success("Thank you for your message!");
      } else {
        setStatus("error");
        toast.error(
          "There was an error submitting your message. Please try again."
        );
      }
    } catch (e) {
      console.log(e);
      toast.error(
        "There was an error submitting your message. Please try again."
      );
    }
  };

  return (
    <div>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          Name
          <label htmlFor="username" className={styles.label}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className={mulish.className}
              value={user.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          Email
          <label htmlFor="Email" className={styles.label}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={mulish.className}
              value={user.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          Phone
          <label htmlFor="Phone" className={styles.label}>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              className={mulish.className}
              value={user.phone}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className={styles.input_field}>
          Message
          <label htmlFor="message" className={styles.label}>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={5}
              className={mulish.className}
              value={user.message}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div>
          <button type="submit" className={mulish.className}>
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
