import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import DiscussionForm from './DiscussionForm';
interface DiscussionModalProps {
    close: () => void
}
const DiscussionModal:React.FC<DiscussionModalProps> = ({
    close
}) => {
  return (
    <div  className='absolute h-[90%] w-[90%] bg-black opacity-90 rounded-md shadow-lg transition'>
      <div onClick={close} className="flex justify-end">
        <AiOutlineCloseCircle size={30}/>
      </div>
      <div className="flex justify-center items-center">
        <DiscussionForm />
      </div>
    </div>
  )
}

export default DiscussionModal
