import PropTypes from "prop-types";

const Button = ({text, onClick, colorBackGround}) => {
  return (
    <>
        <button onClick={onClick} className={`btn ${colorBackGround}`}>
            {text}
        </button>
    </>
  );
};

// Définition des props par défaut
Button.defaultProps = {
    colorBackGround: "btn-gradient",
};
// Validation des props | isRequired: obligatoire
Button.propTypes = {
    text : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
};

export default Button;
