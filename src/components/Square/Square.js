import PropTypes from "prop-types";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Square = ({ value, onSquareClick }) => {
  if (value === "X") {
    return (
      <Button onClick={onSquareClick}>
        <FontAwesomeIcon icon={faXmark} />
      </Button>
    );
  }
  if (value === "O") {
    return (
      <Button onClick={onSquareClick}>
        <FontAwesomeIcon icon={faCircle} />
      </Button>
    );
  }
  return <Button onClick={onSquareClick}>{""}</Button>;
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func,
};
