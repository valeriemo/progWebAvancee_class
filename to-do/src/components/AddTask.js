

const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Tasks</label>
                <input type="text" placeholder="Add task"/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="date-time-local" placeholder="date & time"/>
            </div>
            <div className="form-control-check">
                <label>Set reminder</label>
                <input type="checkbox"/>
            </div>
            <input type="submit" value="Save task" className="btn btn-blue btn-block mt-4"/>
        </form>
    )
};

export default AddTask;