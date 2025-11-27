import { useState } from "react"

const Todo = ()=>{
const [tasks, setTasks] = useState([])
const [newTask, setNewTask] = useState("");

const handleInput = (e)=>{
    setNewTask(e.target.value);

}

const addTask = ()=>{
    if(newTask.trim() !== ""){

        setTasks( t =>[...t, newTask]);
        setNewTask("")
    }

}
const deleteTask = (index)=>{
// const updatedTasks = tasks.filter((_, i)=>{  this is more advance than splice and direct and works same
//     return i !== index
// })
const updatedTasks = [...tasks]
updatedTasks.splice(index,1)
setTasks(updatedTasks)
}

const moveTaskUp = (index)=>{
    if(index>0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]]= [updatedTasks[index -1], updatedTasks[index]];
        setTasks(updatedTasks)
    }

}
const moveTaskDown = (index)=>{
if(index<tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]]= [updatedTasks[index +1], updatedTasks[index]];
        setTasks(updatedTasks)
    }
}
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task.." value={newTask} onChange={handleInput}/>
            
            <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((item, index)=>{
                    return (<li key={index} >
                    <span className="text">{item}</span>
                    <button  type="button" className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                    <button  type="button"  className="move-button" onClick={()=>moveTaskUp(index)}>moveTaskUp</button>
                    <button  type="button"  className="move-button" onClick={()=>moveTaskDown(index)}>moveTaskDown</button>


                    </li>)

                })}
            </ol>



        </div>
    )
}
export default Todo