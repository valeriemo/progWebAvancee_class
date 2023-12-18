// ON ISOLE LA DONNÉE
// On veux que la donnée soit accessible partout dans l'application, on va faire taleau comme donnee globale
// On va acceder a la donnee avec la props tasks

import SingleTask from "./SingleTask"


const ManyTasks = ({tasks, onDelete, onToggle}) => {
    return(
        <>
        {tasks.map((task)=>(
            <SingleTask task={task} key={task.id} onDelete={onDelete} onToggle={onToggle}/>
        ))}
        </>
    )
}
export default ManyTasks