import React from 'react'

const Update = () => {
  return (
    <div>
      update
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
  )
}

export default Update
