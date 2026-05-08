import { useState } from "react";
import Styles from "./Contact.module.css";

import AlertMessage from "../../components/contact/alertMessage/AlertMessage";
import ContactInfo from "../../components/contact/contactInfo/ContactInfo";
import ContactForm from "../../components/contact/contactForm/ContactForm";

const Contact = () => {
  const [status, setStatus] = useState({ type: "", message: "" });

  return (
    <section className={Styles.Contact_Section}>
      <AlertMessage status={status} />

      <h2 className={Styles.Contact_title}>Contact</h2>

      <p className={Styles.Contact_desc}>
        Feel free to reach out if you want to collaborate on a project, have a
        question, or just want to connect.
      </p>

      <div className={Styles.Contact_container}>
        <ContactInfo />

        <ContactForm setStatus={setStatus} />
      </div>
    </section>
  );
};

export default Contact;
