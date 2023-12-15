import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
    const showConsole = () => {
        console.log('Click')
    };
    return (    
        <header className="flex justify-between items-center"> 
            <h1 className="text-3xl font-bold text-green-500">{props.title} 🐸</h1>
            <Button text="Ajouter" onClick={showConsole}/>
        </header>
    )
}
// Définition des props par défaut
Header.defaultProps = {
    title: 'To do list',
}
// Validation des props | validation de développement
Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
export default Header