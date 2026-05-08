import Styles from "./AboutSection.module.css";

const AboutSection = ({ title, highlight, image, paragraphs }) => {
  return (
    <div className={Styles.About_Container}>
      <div className={Styles.About_Section}>
        <div className={Styles.about_left_Container}>
          <div className={Styles.About_details}>
            <h1 className={Styles.about_mainHeading}>
              {title} <span>{highlight}</span>
            </h1>

            {paragraphs.map((text, idx) => (
              <p key={idx} className={Styles.about_summary}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className={Styles.about_right_Container}>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
