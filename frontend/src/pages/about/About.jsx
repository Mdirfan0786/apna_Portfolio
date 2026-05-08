import AboutSection from "../../components/About/aboutSection/AboutSection";
import FocusSection from "../../components/About/focusSection/FocusSection";
import { aboutSections } from "../../data/aboutData";

function About() {
  return (
    <>
      {aboutSections.map((section, idx) => (
        <AboutSection key={idx} {...section} />
      ))}

      <FocusSection />
    </>
  );
}

export default About;
