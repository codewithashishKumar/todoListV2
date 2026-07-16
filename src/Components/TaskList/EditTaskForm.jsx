import { Check } from "lucide-react";
import { useState } from "react";
const EditTaskForm = ({ task, setEditTask, updateTaskCode }) => {

    const [editText, setEditText] = useState(task.text);
    const [editPriority, setEditPriority] = useState(task.priority);

    const saveEdit = () => {
        if (editText.trim()) {
            // 
            updateTaskCode({
                taskID: task.id,
                editText,
                editPriority
            })
            // updated editing task id to nul
            setEditTask(null)
        }
    }

    return (
        <section className="EditTaskForm">
            <div className="InputDIV">
                <input type="text"
                    placeholder="Update list items"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />

            </div>
            <div className='minDIV'>
                <input type="number" min='1'
                    value={editPriority}
                    onChange={(e) => setEditPriority(e.target.value)}

                />
            </div>

            <div className='checkIcon' onClick={saveEdit} >
                <Check />
            </div>
        </section>
    )
}
export default EditTaskForm;