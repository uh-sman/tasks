import React from 'react'

const Discussions = (discussion : null) => {
    if(discussion !== null) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h1>No discussion available!</h1>
                <div className="">
                    <button className='bg-gray-200 transition py-3 px-4'>Start a Discussion</button>
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
