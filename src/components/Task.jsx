import { useState } from 'react'
import  {FaTimes} from 'react-icons/fa'
export default function({task, deleteTask}){
    const [complete,setComplete]=useState(false)

    function completed(){
        setComplete(prevMode=>!prevMode);
        console.log(complete);
    }

     
    return(
        <>
      
            <div className={`task ${task.reminder ? 'reminder' :''} done`  }>
              {complete && <p className={`${complete ? 'completed' : ''} `}>completed</p> }  
                 <li>{task.text} <FaTimes style={{  color:"red", cursor:'pointer' ,float:'right'}} onClick={()=>deleteTask(task.id)} /></li>
                <p>{task.day}</p> 
                <small>{task.reminder} </small>
               {!complete && <button className='donebtn' onClick={completed}> Completed</button>} 
            </div> 
        
            
        </>
    
       
   

    )


}