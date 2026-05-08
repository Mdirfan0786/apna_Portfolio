import Styles from "./FocusSection.module.css";

import FocusCard from "../focusCard/FocusCard";
import { focusData } from "../../../data/focusData";

const FocusSection = () => {
  return (
    <div className={Styles.focus_Section}>
      <div className={Styles.focus_right_Container}>
        <div className={Styles.focus_details}>
          <h1 className={Styles.focus_mainHeading}>
            What I <span>Focus On</span>
          </h1>

          <div className={Styles.focus_Grid}>
            {focusData.map((data, idx) => (
              <FocusCard
                key={idx}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
