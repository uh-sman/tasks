import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
interface DiscussionModalProps {
    close: () => void
}
const DiscussionModal:React.FC<DiscussionModalProps> = ({
    close
}) => {
  return (
    <div  className='absolute h-[90%] w-[90%] bg-black opacity-90 rounded-md shadow-lg transition'>
      <div onClick={close} className="flex justify-end">
        <AiOutlineCloseCircle size={25}/>
      </div>
    </div>
  )
}

export default DiscussionModal
