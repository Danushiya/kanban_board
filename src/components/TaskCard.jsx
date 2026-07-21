import { useState } from "react";

function TaskCard({ task, moveTask, deleteTask, editTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    function handleEdit() {
        setEditedText(task.text);
        setIsEditing(true);
    }

    function handleSave() {
        if (editedText.trim() === "") return;

        editTask(task.id, editedText.trim());
        setIsEditing(false);
    }

    function handleCancel() {
        setEditedText(task.text);
        setIsEditing(false);
    }

    return (
        <div className="task-card">
            {isEditing ? (
                <input
                    className="edit-input"
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    autoFocus
                />
            ) : (
                <p>{task.text}</p>
            )}

            <div className="task-actions">
                {task.status !== "todo" && (
                    <button onClick={() => moveTask(task.id, "back")}>
                        ← Back
                    </button>
                )}

                {task.status !== "done" && (
                    <button onClick={() => moveTask(task.id, "next")}>
                        Next →
                    </button>
                )}

                {isEditing ? (
                    <>
                        <button
                            className="save-btn"
                            onClick={handleSave}
                            title="Save"
                        >
                            ✓
                        </button>

                        <button
                            className="cancel-btn"
                            onClick={handleCancel}
                            title="Cancel"
                        >
                            ✕
                        </button>
                    </>
                ) : (
                    <button onClick={handleEdit}>
                        Edit
                    </button>
                )}

                <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskCard;