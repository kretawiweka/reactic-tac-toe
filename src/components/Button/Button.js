import PropTypes from "prop-types";
import styles from "./button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
