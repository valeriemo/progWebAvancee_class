import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// quand on arrive sur la page /about, on veux loader le bouton add

const About = ({setShowAddTask}) => {
    useEffect(() => {
        setShowAddTask(false);
    }, [setShowAddTask])
    return(
        <>
            <h4 className='mt-6'>About App To do</h4>
            <p>Version 1.0.0</p>
            <Link to="/" className="text-blue-700 hover:underline">Retour</Link>
        </>
    )
}

export default About