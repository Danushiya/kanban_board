import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Column from "./components/Column";

const columns = [
    { title: "To Do", status: "todo" },
    { title: "In Progress", status: "progress" },
    { title: "Done", status: "done" },
];

const nextStatus = {
    todo: "progress",
    progress: "done",
};

const previousStatus = {
    done: "progress",
    progress: "todo",
};

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        return [
            {
                id: crypto.randomUUID(),
                text: "Buy groceries",
                status: "todo",
            },
            {
                id: crypto.randomUUID(),
                text: "Pay electricity bill",
                status: "todo",
            },
            {
                id: crypto.randomUUID(),
                text: "Book a doctor's appointment",
                status: "todo",
            },
            {
                id: crypto.randomUUID(),
                text: "Clean the living room",
                status: "progress",
            },
            {
                id: crypto.randomUUID(),
                text: "Finish monthly report",
                status: "progress",
            },
            {
                id: crypto.randomUUID(),
                text: "Call the plumber",
                status: "progress",
            },
            {
                id: crypto.randomUUID(),
                text: "Morning workout",
                status: "done",
            },
            {
                id: crypto.randomUUID(),
                text: "Reply to important emails",
                status: "done",
            },
            {
                id: crypto.randomUUID(),
                text: "Water the plants",
                status: "done",
            },
            {
                id: crypto.randomUUID(),
                text: "Schedule weekend trip",
                status: "todo",
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text) {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: crypto.randomUUID(),
                text,
                status: "todo",
            },
        ]);
    }

    function deleteTask(id) {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        );
    }

    function editTask(id, newText) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, text: newText }
                    : task
            )
        );
    }

    function moveTask(id, direction) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id !== id) {
                    return task;
                }

                return {
                    ...task,
                    status:
                        direction === "next"
                            ? nextStatus[task.status] ?? task.status
                            : previousStatus[task.status] ?? task.status,
                };
            })
        );
    }

    return (
        <div className="app">
            <Header />

            <AddTask addTask={addTask} />

            <div className="board">
                {columns.map((column) => (
                    <Column
                        key={column.status}
                        {...column}
                        tasks={tasks}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;