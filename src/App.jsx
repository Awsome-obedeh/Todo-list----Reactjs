import { useState,useEffect} from "react";
import Taskss from "./components/Taskss"; // Make sure to provide the correct path to Taskss component
import Header from "./components/Header";
import Additems from "./components/additems";
import { FaDatabase } from "react-icons/fa";

function App() {


  const [showAddTask, setshowAddTask]=useState(false);
  const [tasks, setTasks] = useState([]);

  // show add task
  function showTask(){
    setshowAddTask(prevMode=>!prevMode)
  }
  // deleting an array
 const deleteTask= function deleteId(id){
   setTasks(tasks.filter((task)=>task.id  !==id))
  }

  // toogle reminder
  function toggleReminder(id){
    setTasks(tasks.map(task=>{

      task.id==id ? {...task, reminder:!task.reminder } : task
    }))
  }

  // completed function
  // function completed(id){
  //  tasks.map(task=>{
  //  return (
  //   setTasks(
  //     task.id==id ?{...task, completed:task.completed} :task
  //   )

  //  )
  //  })
 
  // }
  // tasks.filter(deleteId)

  // add task to the tasks array
  function  add(task) {
    // create an  id for new task
   let id=Math.floor(Math.random()*1000) +1
  const newTask={id, ...task}

    
      setTasks([...tasks, newTask]);
      console.log(id);
  }

  // use effect 
  // fetcch record from FaDatabase
  URL="http://localhost:5000/tasks"
  async function fetchTasks(){
    const response= await fetch(URL);
    const data=await response.json()
    // set task state 
    return setTasks(data);

  }
  useEffect(()=>{
      fetchTasks();

  },[])

  return (
    <>
    <div className="container">
    <button className="btn" onClick={showTask} >{showAddTask ? 'close' :'Add'}</button>
       {showAddTask && <Additems add={add} />} 
      <Header tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  />
      {/* <Taskss tasks={tasks} /> */}

    </div>
    </>
  );
}

export default App;
