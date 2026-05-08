import { useRef } from "react";
import Styles from "./ContactForm.module.css";
import { sendContactEmail } from "../../../services/emailService";

const ContactForm = ({ setStatus }) => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendContactEmail(form.current);

      setStatus({
        type: "success",
        message: "Message sent successfully",
      });

      e.target.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }

    setTimeout(() => {
      setStatus({
        type: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className={Styles.Contact_form}>
      <input type="text" name="name" placeholder="Your Name" required />

      <input type="email" name="email" placeholder="Your Email" required />

      <textarea name="message" placeholder="Your Message" rows="5" required />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
