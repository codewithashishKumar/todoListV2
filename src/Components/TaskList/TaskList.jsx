import './TaskList.css';
import Tasktem from './Tasktem';
import EditTaskForm from './EditTaskForm';
import { useState } from "react";

const TaskList = ({ tasks, showIncomplete, toggleTask, handleDelete, updateTaskCode }) => {

    // edit task states
    const [editTask, setEditTask] = useState(null);

    return (
        <section className="taskListSection">
            <ul className='taskList'>
                {/* <li> Task 1</li>
                <li> Task 2</li>
                <li> Task 3</li> */}
                {tasks.filter((task) => !showIncomplete || !task.done)
                    .map((task) => (
                        <li key={task.id}>
                            {editTask === task.id ? (
                                <EditTaskForm task={task} setEditTask={setEditTask} updateTaskCode={updateTaskCode} />
                            ) : (
                                <Tasktem task={task} toggleTask={toggleTask} handleDelete={handleDelete} setEditTask={setEditTask} />
                            )}
                        </li>
                    ))}
            </ul>
            {/* <Tasktem task={task} /> */}
            {/* <EditTaskForm /> */}
        </section>
    )
}

export default TaskList;