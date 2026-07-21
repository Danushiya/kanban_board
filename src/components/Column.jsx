import TaskCard from "./TaskCard";

function Column({ title, status, tasks, moveTask, deleteTask, editTask }) {
    return (
        <div className="column">
            <h2>{title}</h2>

            <div className="task-list">
                {tasks
                    .filter((task) => task.status === status)
                    .map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            moveTask={moveTask}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Column;