import React from 'react'

const Todocards = ({title,body,id,delid,updateid}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg w-100 transition">
      
      <h1 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h1>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {body}
      </p>

      <div className="flex justify-end gap-3">
      <button onClick={()=>{updateid(id)}} className="px-4 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
          Edit
        </button>
        <button onClick={()=>{delid(id)}} className="px-4 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition">
          Delete
        </button>
      </div>

    </div>
  )
}

export default Todocards
