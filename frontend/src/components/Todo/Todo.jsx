import React,{useState} from "react";
import "./Todo.css";
import TodoCard from "./TodoCard";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";


const Todo=()=>{
    const [Inputs,setInputs]= useState({title:"",body:""});
    const [Array,setArray]=useState([]);
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(null);
    const [updateData, setUpdateData] = useState({ title: '', body: '' });
    const show=()=>{
        document.getElementById("textarea").style.display="block";
        
    }
    const change=(e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
        
    };
    const submit=()=>{
        if(Inputs.title ==="" || Inputs.body==="")
        {
            toast.error("Please fill all fields");
        }
        else
        {
                setArray(prevArray => {
                const newArray = [...prevArray, Inputs];
                console.log(newArray);
                return newArray;
                });
                toast.success("Your Tasked is Added!!");
                toast.error("Your Task is Not Saved!! Please Sign Up")
        }
        
    };
    const handleUpdate = (item, index) => {
        setUpdateData(item);
        setUpdateIndex(index);
        setShowUpdate(true);
      };
    
      const handleUpdateSubmit = (updated) => {
        setArray(prev => prev.map((item, idx) => idx === updateIndex ? updated : item));
        setShowUpdate(false);
        setUpdateIndex(null);
        setUpdateData({ title: '', body: '' });
      };
    

    return (
        <div className="todo">
            <ToastContainer />
            <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
                <input type="text" 
                placeholder="TITLE"
                className="my-2 p-2 todo-inputs"
                onClick={show}
                name="title"
                value={Inputs.title}
                onChange={change}
                />
            <textarea 
            id="textarea" 
            name="body" 
            placeholder="BODY"
            className="my-2 p-2 todo-inputs"
            value={Inputs.body}
            onChange={change}
            />
            </div>
            <div className="w-50 d-flex justify-content-end my-3">
                <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
            </div>
            <Update
  show={showUpdate}
  onClose={() => setShowUpdate(false)}
  onUpdate={handleUpdateSubmit}
  initialTitle={updateData.title}
  initialBody={updateData.body}
/>
            <div className="todo-body">
                <div className="container">
                    {Array && Array.map((item,index)=>(
                        <TodoCard 
                          id={index} 
                          {...item} 
                          title={item.title} 
                          body={item.body}
                          onDelete={() => {
                            setArray(Array.filter((_, i) => i !== index));
                          }}
                          onUpdate={() => handleUpdate(item, index)}
                        />
                ))}
                </div>
            </div>
        </div>
    )
}


export default Todo;
