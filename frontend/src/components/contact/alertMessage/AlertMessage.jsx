import Styles from "./AlertMessage.module.css";

const AlertMessage = ({ status }) => {
  if (!status.message) return null;

  return (
    <div
      className={
        status.type === "success" ? Styles.alertSuccess : Styles.alertError
      }
    >
      {status.message}
    </div>
  );
};

export default AlertMessage;
