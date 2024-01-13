import React from 'react'

const DiscussionForm = () => {
  return (
    <div className=''>
      <h1 className='font-semibold'>START AN AMAZING DISCUSSION</h1>
      <div className="mt-4">
        <form action="">
        <input
              //  @ts-ignore
              // {...register(title)}
              //    defaultValue={items.title}
              type="checkbox"
              className="accent-black h-[30px] w-[30px] rounded-full"
            />
        </form>
      </div>
    </div>
  )
}

export default DiscussionForm
