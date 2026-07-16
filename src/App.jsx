import './App.css';
import { useState } from 'react';
import Header from './Components/Header/header';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskControls from './Components/TaskControls/TaskControls'
import TaskList from './Components/TaskList/TaskList'
import { getStoredTasks, updateLocalStorage } from './utils/localStorageUtils'


const App = () => {

  const [task, setTask] = useState(getStoredTasks());

  // const newTask = [
  //   ...task,
  //   {
  //     id: 5,
  //     text: 'Sample added',
  //     priority: 4,
  //     done: false
  //   }
  // ]

  const [showIncomplete, setShowIncomplete] = useState(false);

  const addTask = (newTask) => {
    const updatedTask = [...task, newTask];
    setTask(updatedTask);
    updateLocalStorage(updatedTask);
  }

  const sortTasks = () => {
    const sortedTasks = [...task].sort((a, b) => a.priority - b.priority);
    setTask(sortedTasks);
    updateLocalStorage(sortedTasks);
  }

  const toggleTask = (id) => {
    const updatedTaskHandle = task.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTask(updatedTaskHandle);
    updateLocalStorage(updatedTaskHandle);
  };


  const handleDelete = (id) => {
    // 
    const allTasks = task.filter((task) =>
      task.id !== id
    )
    setTask(allTasks);
    updateLocalStorage(allTasks);
  }

  const updateTaskCode = ({ taskID, editText, editPriority }) => {
    const updatedTasks = task.map((task) =>
      task.id === taskID ? { ...task, text: editText, priority: editPriority } : task
    )
    // 
    setTask(updatedTasks);
    updateLocalStorage(updatedTasks);
  }

  return (
    <section className='app-component'>
      <Header />
      <div className="sub-container">
        <TaskForm addTask={addTask} />
        <TaskControls showIncomplete={showIncomplete} setShowIncomplete={setShowIncomplete} sortTasks={sortTasks} />
        <TaskList tasks={task} showIncomplete={showIncomplete} toggleTask={toggleTask} handleDelete={handleDelete} updateTaskCode={updateTaskCode} />
      </div>
    </section>
  )
}
export default App;