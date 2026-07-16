import './App.css';
import { useReducer, useState } from 'react';
import Header from './Components/Header/header';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskControls from './Components/TaskControls/TaskControls'
import TaskList from './Components/TaskList/TaskList'
import { getStoredTasks } from './utils/localStorageUtils'
import { taskReducer } from './reducers/taskReducer';


const App = () => {

  const [task, dispatch] = useReducer(taskReducer, getStoredTasks());

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
    dispatch({ type: "ADD", payload: newTask })
  }

  const sortTasks = () => {
    dispatch({ type: "SORT" })
  }

  const toggleTask = (id) => {
    dispatch({ type: "TOGGLE", payload: id })
  };


  const handleDelete = (id) => {
    // 
    dispatch({ type: "REMOVE", payload: id })
  }

  const updateTaskCode = ({ taskID, editText, editPriority }) => {
    dispatch({ type: "UPDATE", payload: { taskID, editText, editPriority } })
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