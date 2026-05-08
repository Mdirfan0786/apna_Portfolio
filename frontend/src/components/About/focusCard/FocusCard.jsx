import Styles from "./focusCard.module.css";

const FocusCard = ({ title, description }) => {
  return (
    <div className={Styles.focus_Card}>
      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default FocusCard;
