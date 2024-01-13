import React from 'react'

const DiscussionForm = () => {
  return (
    <div className='w-96'>
      <h1 className='font-semibold'>START AN AMAZING DISCUSSION</h1>
      <div className="mt-4">
        <form action="">
          <div className="">
          <label>
            <span className='block uppercase'>
              title
            </span>
          </label>
        <input
                // {...register(title)}
                //   onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder=".."
              />
          </div>
          <div className="mt-2">
          <label>
            <span className='block uppercase'>
              description
            </span>
          </label>
        <input
                // {...register(title)}
                //   onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder=".."
              />
          </div>
        </form>
      </div>
    </div>
  )
}

export default DiscussionForm