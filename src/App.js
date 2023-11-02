import { useSelector } from 'react-redux';
import './App.css';
import ListTask from './components/ListTask';
import AddTask from "./components/AddTask"

function App() {
  const tasks = useSelector(state => state.taskReducers.tasks)
  console.log(tasks);
  return (
    <div className="App">
      <h1>Todo List with Redux</h1>
      <AddTask />
      <ListTask tasks={tasks}/>
      </div>
  );
}

export default App;
