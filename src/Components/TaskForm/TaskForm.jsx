import { Plus } from 'lucide-react'

import './TaskForm.css'
import { useState } from 'react'
const TaskForm = ({ addTask }) => {

    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewpriority] = useState(1);

    const handleSubmit = () => {
        if (newTask.trim()) {
            // 
            addTask({
                id: Date.now(),
                text: newTask,
                priority: newPriority,
                done: false
            })
            setNewTask('');
            setNewpriority(1);
        };

    };

    return (
        <section className="TaskFormContainer">
            <div className="containerInputs">
                <div className="InputDIV">
                    <input type="text"
                        placeholder="Add list items"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />

                </div>
                <div className='minDIV'>
                    <input type="number" min='1'
                        value={newPriority}
                        onChange={(e) => setNewpriority(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className='plusIcon' onClick={handleSubmit}>
                <Plus />
            </div>
        </section>
    )
}
export default TaskForm;