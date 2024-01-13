import React from 'react'

const DiscussionForm = () => {
  // const 
  return (
    <div className='w-96'>
      <h1 className='font-semibold text-center text-2xl text-nowrap'>START AN AMAZING DISCUSSION</h1>
      <div className="mt-4">
        <form action="">
          <div className="">
          <label>
            <span className='block uppercase'>
              title:
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
          <div className="mt-8">
          <label>
            <span className='block uppercase'>
              description:
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
          <div className="mt-8">
          <label>
            <span className='block uppercase'>
              comment
            </span>
          </label>
        <textarea
                // {...register(title)}
                //   onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                
                placeholder=".."
              />
          </div>
          <div className="mt-8">
            <button className='bg-teal-600 w-full py-4 rounded-md'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DiscussionForm
