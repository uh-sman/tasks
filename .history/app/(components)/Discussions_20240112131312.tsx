import React from 'react'

const Discussions = (discussion : null) => {
    if(discussion !== null) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <h1>No discussion available!</h1>
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
