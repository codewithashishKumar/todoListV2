import './App.css';
import { useState } from 'react';
import Header from './Components/Header/header';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskControls from './Components/TaskControls/TaskControls'
import TaskList from './Components/TaskList/TaskList'

const App = () => {

  const [task, setTask] = useState([
    {
      id: 1,
      text: 'Buy plant',
      priority: 1,
      done: false,
    },
    {
      id: 2,
      text: 'Buy Bike',
      priority: 3,
      done: false,
    },
    {
      id: 3,
      text: 'Buy House',
      priority: 2,
      done: true,
    },
    {
      id: 4,
      text: 'Buy pepsi',
      priority: 2,
      done: false,
    },
    {
      id: 5,
      text: 'Buy cola',
      priority: 2,
      done: true,
    },
  ]);

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
  }

  const sortTasks = () => {
    const sortedTasks = [...task].sort((a, b) => a.priority - b.priority);
    setTask(sortedTasks);
  }

  const toggleTask = (id) => {
    const updatedTaskHandle = task.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTask(updatedTaskHandle);
  };


  const handleDelete = (id) => {
    // 
    const allTasks = task.filter((task) =>
      task.id !== id
    )
    setTask(allTasks);
  }

  const updateTaskCode = ({ taskID, editText, editPriority }) => {
    const updatedTasks = task.map((task) =>
      task.id === taskID ? { ...task, text: editText, priority: editPriority } : task

    )

    // 
    setTask(updatedTasks);
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