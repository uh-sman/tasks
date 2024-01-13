// import React from 'react'

// const edit = () => {
//   return (
//     <div>
//           <div className="bg-gray-200 min-h-screen">
//       <div className="container mx-auto px-4 py-2">
//         <div className="text-center py-6">
//           <h2 className="text-4xl font-semibold text-gray-700">
//             {formState === "SIGNUP" ? "Create Admin" : "Login"}
//           </h2>
//         </div>
//         <div className="max-w-md mx-auto px-4 py-6 bg-white rounded-md shadow-md">
//           <form className="space-y-6">
//             <div className="w-full px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="email"
//               >
//                 Email
//               </label>
//               <Input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="email"
//                 type="email"
//                 placeholder="email@example.com"
//               />
//             </div>
//             <div className="w-full px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <Input
//                 onChange={(value) => handleChange(value, null, "password")}
//                 className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${passwordMatch ? 'border-red-500' : 'border-gray-200'}`}
//                 id="password"
//                 type="password"
//                 placeholder="********"
//               />
//               <p className="text-red-500 text-xs italic">
//                 Please fill out this field.
//               </p>
//             </div>
//             {formState === 'SIGNUP' && <div className="w-full px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="confirmpassword"
//               >
//                 Confirm Password
//               </label>
//               <Input
//                 onChange={(value) => handleChange(value, null, "confirmpassword")}
//                 className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 ${passwordMatch ? 'border-red-500' : 'border-gray-200'}`}
//                 id="confirmpassword"
//                 type="password"
//                 placeholder=" />
//                 />
//                 </div>
//             }
//     </div>
//   )
// }

// export default edit
