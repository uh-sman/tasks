import React from 'react'

const DiscussionForm = () => {
  return (
    <div className='max-w-ms'>
      <h1 className='font-semibold'>START AN AMAZING DISCUSSION</h1>
      <div className="mt-4">
        <form action="">
        <input
                // {...register(title)}
                //   onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder="Enter the number of plots"
              />
        </form>
      </div>
    </div>
  )
}

export default DiscussionForm
