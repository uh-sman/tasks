'use client'

const AuthForm = () => {
  return (
  <div>
<div className='flex'>
    <div className='bg-white flex flex-col justify-center items-center  w-1/2'>
        <div className='flex'>
            {/* <img src={logo} alt="Logo" className='' /> */}
        </div>
        <p className='font-primary italic text-black'>...the future is now</p>
    </div>
    <div className="hero min-h-screen bg-[#F5E0B8] p-0 w-1/2">
        <div className="hero-content flex-col ">
            <div>
                <h1 className="text-4xl lg:mr-[460px] font-bold text-[#008F97]">Login</h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
                {/* <form onSubmit={handleSubmit}> */}
                <form>
                    <div className="bg-[#F5E0B8]">
                        <div className="form-control mb-2">
                            <label className="label py-0">
                                <span className="label-text text-[#F48222]">Email</span>
                            </label>
                            <input type="email" required placeholder="Enter email" className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"  />
                            {/* {error && <h2 style={{ color: 'red' }}>{error}</h2>} */}
                        </div>
                        <div className="form-control">
                            <label className="label py-0">
                                <span className="label-text text-[#F48222]">Password</span>
                            </label>
                            <input type="password" required placeholder="Enter password" className="input bg-[#F5E0B8] disabled:bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] invalid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"  />
                            <label className="label">
                                <a href="#" className="label-text link link-hover text-[#118286] underline">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 space-y-3">
                            <button className="btn  font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white" type='submit' >Login</button>
                            <button className='btn normal-case text-base font-primary bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]'>Create Admin</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div> 
  )
}

export default AuthForm
