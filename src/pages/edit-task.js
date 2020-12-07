import React from "react"
import ConditionalLayout from "../components/ConditionalLayout"

const editTaskPage = () => (
  <ConditionalLayout>
  <div className="text-xl text-gray-300 float-left text-center ">
    Edit Task
  </div>

  <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl m-auto">
    <div className="col-span-2 lg:col-span-2">
      Task
      <input type="text" className="border-solid border-gray-200 border-2 p-3 rounded text-base w-full" placeholder="Complete Frontend Challenge"/>
    </div>
    <div className="col-span-2">
    Description
      <textarea cols="30" rows="3" className="border-solid border-gray-200 rounded border-2 p-3 text-base w-full" placeholder="Easy As Pie"></textarea>
    </div>

    <div className="col-span-2 text-right">
      <button className="py-2 px-4 bg-red-500 rounded text-white font-bold w-full sm:w-32">
        Edit Task
      </button>
    </div>

  </div>
  </ConditionalLayout>
)

export default editTaskPage
