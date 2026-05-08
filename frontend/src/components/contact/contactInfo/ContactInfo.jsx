import Styles from "./ContactInfo.module.css";
import { SOCIAL_LINKS } from "../../../constant/socialLinks";

const ContactInfo = () => {
  return (
    <div className={Styles.Contact_info}>
      <p>
        <strong>Email:</strong> {SOCIAL_LINKS.email}
      </p>

      <p>
        <strong>LinkedIn:</strong>

        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
          &nbsp;{SOCIAL_LINKS.linkedin}
        </a>
      </p>

      <p>
        <strong>GitHub:</strong>

        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
          &nbsp;{SOCIAL_LINKS.github}
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
