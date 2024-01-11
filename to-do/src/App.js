// Fichier d'entrée
import Header from "./components/Header";
import { useEffect, useState} from "react"; // import du hook useState
import ManyTasks from "./components/ManyTasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    // setTasks sera le nouveau tableau modifié
    // useState est un hook qui permet de modifier l'état de la donnée
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    /**
     * GET toutes les taches
     */
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks('http://localhost:5001/tasks');
            setTasks(tasksFromServer); // setTasks va modifier la valeur de tasks
        }
        getTasks(); // appel de la fonction
    }, []); // [] -> tableau de dépendances, si on met rien, le useEffect va s'executer a chaque fois que le composant est monté 


    /**
     * DELETE une tache
     * @param {*} id 
     */
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5001/tasks/${id}`, {
            method: 'DELETE'
        }); // je veux arriver dans l'élément qui a l'id que je veux effacer

        // On va filtrer le tableau pour avoir tous les id sauf celui qu'on veut supprimer
        setTasks(tasks.filter((task)=>task.id !== id));
    };


    /**
     * Méthode pour le reminder
     * @param {*} id 
     */
    const toggleReminder = async (id) => {
        const taskToggle =  await fetchTasks(`http://localhost:5001/tasks/${id}`);
        const updatedTask = {...taskToggle, reminder: !taskToggle.reminder};
        const res = await fetch(`http://localhost:5001/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        });
        setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
    }


    /**
     * Ajouter une nouvelle tache
     * @param {*} task 
     */
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5001/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task) 
            })
            const newTask = await res.json();
            setTasks([...tasks, newTask])
        };

    const [showAddTask, setShowAddTask] = useState(false);

    return (
        <BrowserRouter>
        <div className="font-sans min-h-screen">
          <div className="container mx-auto p-8 border-4 border-blue-200 rounded-lg mt-16 max-w-screen-md">

            <Header toggleForm={()=> showetShowAddTask(!showAddTask)} showAdd={showAddTask}/>  
            { showAddTask && <AddTask onAdd={addTask}/>}

            <Routes>
                <Route path="/" element={<ManyTasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>}></Route>
                <Route path="/about" element={<About setShowAddTask={setShowAddTask}/>}></Route>
            </Routes>

            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
}

export default App;

// app -> manytask -> singletask (les composants sont imbriqués parent-enfant)
// onDelete est une props qui est une fonction qui va etre appeler dans le single task, elle passe par manytask (bridge)

// dans le tp2 on va vouloir enresgistrer des données et faire la mise a jour des données (défi du tp2) -> comment changer les valeurs de la donnée