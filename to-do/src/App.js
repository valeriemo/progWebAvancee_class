// Fichier d'entrée
import Header from "./components/Header";
import { useState } from "react"; // import du hook useState
import ManyTasks from "./components/ManyTasks";
import AddTask from "./components/AddTask";

function App() {
    // setTasks sera le nouveau tableau modifié
    // useState est un hook qui permet de modifier l'état de la donnée
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Buy groceries",
            "day": "2023-12-12 16:30:00",
            "reminder": true
        },
        {
            "id": 2,
            "text": "Exercise for 30 minutes",
            "day": "2023-12-19 08:15:00",
            "reminder": true
        },
        {
            "id": 3,
            "text": "Read a book",
            "day": "2024-01-01 00:01:00",
            "reminder": false
        },
        {
            "id": 4,
            "text": "Write in a journal",
            "day": "2024-01-16 12:45:00",
            "reminder": false
        }    
    ]);

    // Définition de la fonction onDelete
    const deleteTask = (id) => {
        // On va filtrer le tableau pour avoir tous les id sauf celui qu'on veut supprimer
        setTasks(tasks.filter((task)=>task.id !== id));
    };

    const toggleReminder = (id) => {
        // on va mapper le tableau pour changer la valeur de reminder de true a false ->lorsqu'on true on met border bleu
        setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    return (
        <div className="font-sans min-h-screen">
            <div className="container mx-auto p-8 border-2 border-[#125E8A] mt-16 bg-[#c2b8b26b]  rounded-[10px] max-w-screen-md text-lg">
                <Header />
                <AddTask />
                {tasks.length > 0 ? 
                <ManyTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
                : <div className="p-4 mb-4 mt-5 text-sm text-[#FF785A] bg-[#ffffff] rounded-lg font-bold">No tasks to show</div>}
            </div>
        </div>
    );
}

export default App;

//app -> manytask -> singletask (les composants sont imbriqués parent-enfant)
// onDelete est une props qui est une fonction qui va etre appeler dans le single task, elle passe par manytask (bridge)

// dans le tp2 on va vouloir enresgistrer des données et faire la mise a jour des données (défi du tp2) -> comment changer les valeurs de la donnée