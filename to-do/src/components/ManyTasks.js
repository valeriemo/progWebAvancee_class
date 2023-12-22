// ON ISOLE LA DONNÉE
// On veux que la donnée soit accessible partout dans l'application, on va faire taleau comme donnee globale
// On va acceder a la donnee avec la props tasks

import SingleTask from "./SingleTask"


const ManyTasks = ({tasks, onDelete, onToggle}) => {
    return(
        // On va faire une condition ternaire pour afficher le message d'erreur si le tableau est vide
        <>
        {tasks.length > 0 ? ( 
            tasks.map((task)=>(
                <SingleTask task={task} key={task.id} onDelete={onDelete} onToggle={onToggle}/>
            ))
        ):(
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 font-bold">Empty list</div>
          )}
        </>
    )
}
export default ManyTasks