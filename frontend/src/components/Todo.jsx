import React, { useEffect, useState } from 'react'
import Todocards from './Todocards';
import Update from './Update';
import axios from 'axios';


const Todo = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id=user?.id;
  const [input,setinput]= useState({title:"",body:""})
  const [array,setarray]= useState([]);
  const [a,seta]=useState(true)
  const change=(e)=>{
    const {name,value}=e.target;
    setinput({...input,[name]:value})
  }
  useEffect(()=>{
    const fetch=async()=>{
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v2/gettask/${id}`  ).then((response)=>{setarray(response.data.list)})
    }
    fetch()
  },[])
  
  const submit=async()=>{
    if(id){
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v2/addtask`,{title:input.title,body:input.body,id:id}).then((response)=>console.log(response))
      setinput({title:"",body:""})
      seta(true)
    }
  }
  const del=async(id)=>{
    if(id){
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v2/deletetask/${id}`,{data:{id:user.id}})
    }
    setarray(prev => prev.filter(item => item._id !== id));
  }
  const upd=(id)=>{
    seta(false)
    setinput({title:array[id].title,body:array[id].body})
    del(id);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        
        {a && (<h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Add Todo
        </h1>)}
        {!a && (<h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Todo 
        </h1>)}

        {/* Title */}
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={input.title}
          onChange={change}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        {/* Body */}
        <textarea
          placeholder="Enter todo details"
          rows="4"
          name='body' 
          value={input.body}
          onChange={change}
          className="w-full mb-4 px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button onClick={submit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>

      </div>
      <div className='flex justify-center flex-wrap my-20 gap-10'>
        {array && array.map((item,index)=>(
          <Todocards title={item.title} body={item.body} id={item._id} delid={del} updateid={upd} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Todo
