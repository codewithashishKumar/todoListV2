import { EditIcon, TrashIcon } from "lucide-react";

const Tasktem = ({ task, toggleTask, handleDelete, setEditTask }) => {



    return (
        <section className="Tasktems">
            <p style={{
                textDecoration: task.done ? 'line-through' : 'none'
            }}>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
                <span>{task.text}</span>
                <span className="TasktemsPriority">{task.priority}</span>
            </p>
            <div className="TasktemsBTN">
                <button className="editBTN" onClick={() => setEditTask(task.id)}><EditIcon size={16} /></button>
                <button className="deleteBTN" onClick={() => handleDelete(task.id)}><TrashIcon size={16} /></button>
            </div>
        </section>
    )
}

export default Tasktem;