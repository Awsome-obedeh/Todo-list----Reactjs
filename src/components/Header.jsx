import React from "react";
import Taskss from "./Taskss";

export default function Header({tasks,onToggle,onDelete}) {
  return (
    <div className="">
      <header className="header">
        <h2>Hi</h2>
        
        
          

        </header>
          <div className="task">
            {/* Pass props.tasks down to the Taskss component */}
              <Taskss tasks={tasks} deleteTask={onDelete} onToggle={onToggle} />
          </div>
        
     

      
    </div>       
  );
}
