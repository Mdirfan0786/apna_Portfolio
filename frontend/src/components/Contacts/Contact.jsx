import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Styles from "./Contact.module.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs;
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        },
      );

    e.target.reset();
  };
  return (
    <section className={Styles.Contact_Section}>
      {/* Custom Alert */}
      {status === "success" && (
        <div className={Styles.alertSuccess}>Message sent successfully!</div>
      )}

      {status === "error" && (
        <div className={Styles.alertError}>Failed to send message.</div>
      )}

      <h2 className={Styles.Contact_title}>Contact</h2>

      <p className={Styles.Contact_desc}>
        Feel free to reach out if you want to collaborate on a project, have a
        question, or just want to connect.
      </p>

      <div className={Styles.Contact_container}>
        {/* Contact Info */}
        <div className={Styles.Contact_info}>
          <p>
            <strong>Email:</strong> rn555666777@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/md-irfan-2623b4210/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/md-irfan-2623b4210
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Mdirfan0786/"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Mdirfan0786
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className={Styles.Contact_form}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
