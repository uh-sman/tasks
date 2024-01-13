import { useWatch, useFormContext, useFieldArray } from 'react-hook-form'
interface FormItemsProps {
   title: string | undefined,
   subtitle: string | undefined,
   formName: string | undefined,
   subName: string | undefined,
}

const FormItems:React.FC<FormItemsProps> = ({
    title,
    subtitle,
    formName,
    subName
}) => {
    const { control, register } = useFormContext()
    const {} = useFieldArray({
        name: `titles`,
        control 
    })
  return (
    <div>
     <div className="flex flex-wrap  mb-6">
             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="firstname"
               >
                 {formName}
               </label>
               {
                formName && (
                    <>
                    <input
                  {...register(formName)}
                //   onChange={(value) => handleChange(value, null, "firstname")}
                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                 id="firstname"
                 type="text"
                 placeholder="Enter the number of plots"
               />
               <p className="text-red-500 text-xs italic">
                 Please fill out this field.
               </p>
                    </>
                )
               }
             </div>
             <div className="w-full md:w-1/2 px-3">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="lastname"
               >
                 {subName}
               </label>
               {
                subName && <input
                  {...register(subName)}
                //   onChange={(value) => handleChange(value, null, "lastname")}
                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 id="lastname"
                 type="text"
                 placeholder="Enter price"
               />
               }
             </div>
           </div>
    </div>
  )
}

export default FormItems
