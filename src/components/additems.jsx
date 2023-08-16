import { useState } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function({add}){
    const [text,setText]=useState('');
    const [day,setDay]=useState('');
    const [reminder,setReminder]=useState('');
    
    function submit(e){
        e.preventDefault();
        
        //form validation
        if(text===''){
            alert('Add a task');
            return
        }
        // call add function from props and pass an object as a variable
        add({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return(
        <form action="" className="form-contro" onSubmit={submit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text"
             placeholder="Add Task" 
             class="form-control"
             value={text} 
             onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="">Day & Time</label>
            <input type="text" 
            name="day" 
            id="" 
            placeholder="Add day and time" 
            class="form-control"
            value={day} 
             onChange={(e)=>setDay(e.target.value)}/>
        </div>

        <div className="form-control">
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox" 
                name=""
                id=""
                placeholder="Add day and time" 
                class=""
                value={reminder}
                onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <div className="form-control">

              <input type="submit"
               value="Save Task" 
               className="btn form-control"
                />
        </div>
    </form>
   
    )
    
}