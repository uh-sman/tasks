import React from 'react'

const Discussions = (discussion : null) => {
    if(discussion !== null) {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1>No discussion available!</h1>
                <div className="mt-4">
                    <button className='bg-gray-200 hover:bg-gray-300 transition py-3 px-4 rounded-md text-gray-900 font-semibold'>Start a Discussion</button>
                </div>
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
