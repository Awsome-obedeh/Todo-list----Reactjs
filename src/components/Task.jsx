import  {FaTimes} from 'react-icons/fa'
export default function({task, deleteTask}){

     
    return(
        <>
      
            <div className={`task ${task.reminder ? 'reminder' :''}`  }>
             <li>{task.text} <FaTimes style={{  color:"red", cursor:'pointer' ,float:'right'}} onClick={()=>deleteTask(task.id)} /></li>
                <p>{task.day}</p> 
                <small>{task.reminder} </small>
            </div> 
        
            
        </>
    
       
   

    )


}