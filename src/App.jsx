import { useState } from "react";
import Taskss from "./components/Taskss"; // Make sure to provide the correct path to Taskss component
import Header from "./components/Header";
import Additems from "./components/additems";

function App() {
  const [showAddTask, setshowAddTask]=useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctors Appointement",
      day: "feb 15th at 2:30am",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "feb 6th at 1:30am",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 5:30pm",
      reminder: true,
    },
  ]);

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
  // tasks.filter(deleteId)

  // add task to the tasks array
  function  add(task) {
    // create an  id for new task
   let id=Math.floor(Math.random()*1000) +1
  const newTask={id, ...task}

    
      setTasks([...tasks, newTask]);
      console.log(id);
  }

  return (
    <>
    <div className="container">
    <button className="btn" onClick={showTask} >{showAddTask ? 'close' :'Add'}</button>
       {showAddTask && <Additems add={add} />} 
      <Header tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      {/* <Taskss tasks={tasks} /> */}

    </div>
    </>
  );
}

export default App;
