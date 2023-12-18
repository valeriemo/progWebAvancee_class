import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
    const showConsole = () => {
        console.log('Click')
    };
    return (    
        <header className="flex justify-between items-center"> 
            <h1 className="text-3xl font-bold text-[#204B57]">{props.title}</h1>
            <Button text="Ajouter" onClick={showConsole}/>
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