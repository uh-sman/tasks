'use client'
import React, {useState} from 'react'
import DiscussionModal from './DiscussionModal'

const Discussions = (discussion : null) => {
    const [toggleModal, setToggleModal] = useState<boolean>(false)
    const handleToggleModal = () => {
         setToggleModal(!toggleModal)
    }
    if(discussion !== null) {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1>No discussion available!</h1>
                <div className="mt-4">
                    <button onClick={handleToggleModal} className='bg-gray-200 hover:bg-gray-300 transition py-3 px-4 rounded-md text-gray-900 font-semibold'>Start a Discussion</button>
                </div>
                {
                    toggleModal && <DiscussionModal close={handleToggleModal}/>
                }
            </div>
        )
    }
  else {
    return (
        <div>
          discussion
        </div>
      )
  }
}

export default Discussions
