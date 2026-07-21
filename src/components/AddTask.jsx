import { useState } from "react";

function AddTask({ addTask }) {
    const [task, setTask] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (task.trim() === "") {
            return;
        }

        addTask(task);
        setTask("");
    }

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task..."
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default AddTask;