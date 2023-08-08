import Task from "./Task";

export default function Taskss({tasks,onToogle,deleteTask}) {
    // Check if props.tasks is undefined or null
    if (!tasks || tasks.length === 0) {
      return <div>No tasks available</div>;
    }
  
    return (
      <>
        {  tasks.map((task) => {
          return <Task  task={task}  deleteTask={deleteTask} onToogle={onToogle} ></Task>;
        })}
      </>
    );
  }