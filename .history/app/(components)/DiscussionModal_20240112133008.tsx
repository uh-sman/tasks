import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
const DiscussionModal = () => {
  return (
    <div  className='absolute h-[90%] w-[90%] bg-black opacity-90 rounded-md shadow-lg '>
      <div className="flex justify-end">
        <AiOutlineCloseCircle size={25}/>
      </div>
    </div>
  )
}

export default DiscussionModal
