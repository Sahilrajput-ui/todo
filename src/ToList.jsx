import { useState } from "react";

const ToList  = ()=>{

    const [todolist, setToDoList] = useState([]);

     const handleSubmit = (e)=>{

    e.preventDefault();
    let toname = e.target.toname.value;
     if(!todolist.includes(toname)){
    let finalDolist = [...todolist, toname]
    setToDoList(finalDolist)
     }else{
        alert("already exist")
     }

}
const deleteList = (index)=>{
const update = [...todolist]
update.splice(index,1);
setToDoList(update)
}



    return (
        <div className="app">
           
            <h1>To-do-list</h1>
             <form onSubmit={handleSubmit}>
             
            <input type="text" name="toname"/>
            <button type="submit">save</button>
            </form>
            <div className="outerDiv">
            <ul>
               {todolist.map((item,index)=>{
                return (<li> {item} <button className="deleteList" onClick={()=>deleteList(index)}>Delete</button> </li>)
               })}
               
            </ul>
            </div>

        </div>
    )
}
export default ToList