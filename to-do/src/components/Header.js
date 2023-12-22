import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = (props) => {
    const location = useLocation();
    return (    
        <header className="flex justify-between items-center"> 
            <h1 className="text-3xl font-bold text-[#204B57]">{props.title}</h1>
            {location.pathname === '/' && (
                    <Button text={props.showAdd ? 'Close' : 'Add'} colorBackGround={props.showAdd ? 'btn-red' : 'btn-blue'} onClick={props.toggleForm} />
            )}
        </header>
    )
}
// Définition des props par défaut si je mets rien
Header.defaultProps = {
    title: 'To do list',
}
// Validation des props | validation de développement
Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
export default Header