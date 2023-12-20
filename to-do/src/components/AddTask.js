import { useState } from 'react';

const AddTask = ({onAdd}) => { // la valeur que je veux envoyer à app
    // le set fait la mise a jour de la donnée
    const [text, setText] = useState(''); //on initialise la donnée avec une string vide
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false); // on initialise la donnée avec false -> not checked
    //on connecte les valeurs des inputs avec le useState

    const onSubmit = (e) => {
        e.preventDefault(); 

        if(!text){
            alert('Please add a task');
            return;
        }

        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false); 
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tasks</label>
                <input type="text" placeholder="Add Task" value={text} onChange ={(e) =>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="datetime-local" placeholder="date & time" value={day} onChange ={(e) =>setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save task" className="btn btn-blue btn-block mt-4"/>
        </form>
    )
};

export default AddTask;