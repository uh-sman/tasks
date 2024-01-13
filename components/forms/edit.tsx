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




// FORM ELEMENTS!

// {/* <div className="flex mb-6">
//             <div className="w-full md:w-lg px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="firstname"
//               >
//                 Title of Property
//               </label>
//               <input
//                 // {...register("title")}
//                 // onChange={(value) => handleChange(value, null, "firstname")}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="firstname"
//                 type="text"
//                 placeholder="Enter title"
//               />
//               <p className="text-red-500 text-xs italic">
//                 Please fill out this field.
//               </p>
//             </div>
//             <div className="w-full md:w-full px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="lastname"
//               >
//                 Description
//               </label>
//               <input
//                 // {...register("description")}
//                 // onChange={(value) => handleChange(value, null, "lastname")}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="lastname"
//                 type="text"
//                 placeholder="Enter the description"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="firstname"
//               >
//                 Location
//               </label>
//               <input
//                 // {...register("location")}
//                 // onChange={(value) => handleChange(value, null, "firstname")}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="firstname"
//                 type="text"
//                 placeholder="Enter a location"
//               />
//               <p className="text-red-500 text-xs italic">
//                 Please fill out this field.
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="lastname"
//               >
//                 Nearest Landmark
//               </label>
//               <input
//                 // {...register("nearestLandmark")}
//                 // onChange={(value) => handleChange(value, null, "lastname")}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="lastname"
//                 type="text"
//                 placeholder="Enter the nearest landmark"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap  mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="firstname"
//               >
//                 Plot(s)
//               </label>
//               <input
//                 // {...register("plots")}
//                 // onChange={(value) => handleChange(value, null, "firstname")}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="firstname"
//                 type="text"
//                 placeholder="Enter the number of plots"
//               />
//               <p className="text-red-500 text-xs italic">
//                 Please fill out this field.
//               </p>
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="lastname"
//               >
//                 Price
//               </label>
//               <input
//                 // {...register("price")}
//                 // onChange={(value) => handleChange(value, null, "lastname")}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="lastname"
//                 type="text"
//                 placeholder="Enter price"
//               />
//             </div>
//           </div>
//           {/* HEADINGS */}
//           <div className="flex flex-wrap  mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <h1 className="font-bold text-xl text-orange-300">Amenities</h1>
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <h1 className="font-bold text-xl text-orange-300">Documents</h1>
//             </div>
//           </div>
//           {/* CHECKBOXES */}
//           {/* start work  */}
//           <FormProvider {...methods}>
//             {fields.map((title, index) => (
//               <div key={title.id} className="flex flex-wrap mb-6">
//                 <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//                   <h1 className="font-bold text-xl">{title.title}</h1>
//                   <input
//                   // @ts-ignore
//                     {...register(`test.${index}.input`)}
//                     // defaultValue={items.title}
//                     type="checkbox"
//                     className="accent-black h-[30px] w-[30px] rounded-full"
//                   />
//                 </div>
//                 <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//                   <h1 className="font-bold text-xl">{title.subtitle}</h1>
//                   {title.subtitle && (
//                     <input
//                       {...register}
//                       type="checkbox"
//                       className="accent-black h-[30px] w-[30px]"
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </FormProvider>
//           <div className="flex flex-wrap mt-3 mb-6">
//             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//               <h1 className="font-bold text-orange-300 text-xl">Sale</h1>
//             </div>
//             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//               <h1 className="font-bold text-orange-300 text-xl">
//                 Payment Type
//               </h1>
//             </div>
//           </div>
//           <div className="flex flex-wrap mt-3 mb-6">
//             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//               <h1 className="font-semibold text-lg">Sale</h1>
//               <input
//                 // {...register("sale")}
//                 type="checkbox"
//                 className="accent-black h-[30px] w-[30px]"
//               />
//             </div>
//             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//               <select
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 name=""
//                 id=""
//               >
//                 <option value="">Installment</option>
//               </select>
//             </div>
//           </div> */}