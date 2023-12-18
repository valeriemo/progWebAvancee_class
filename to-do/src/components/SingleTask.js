import { FaTimes } from 'react-icons/fa';


const SingleTask = ({task, onDelete, onToggle}) => {
    // fonction pour le formattage de la date 
    const dateDisplay = (dateString) => {
        const date = new Date(dateString)
        const formattedDate = `${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
        return formattedDate;
    }

    return(
        <div className={` bg-[#f7f7f3] py-2 px-4 my-4 cursor-pointer rounded ${task.reminder ? 'border-l-8 border-[#197BBD]' : ''} `} onDoubleClick={()=>onToggle(task.id)}>
            <h3 className="flex items-center justify-between font-bold text-lg text-[#204B57]">
                {task.text}
                <FaTimes className="pointer text-[#FF785A] text-xl" onClick={()=>onDelete(task.id)}/>
            </h3>
            <p className="text-[#197BBD]">{dateDisplay(task.day)}</p>
        </div>
    )
}

export default SingleTask