import { useWatch, useFormContext, useFieldArray } from "react-hook-form";
interface FormItemsProps {
  title: string | undefined;
  subtitle: string | undefined;
}

const FormItems: React.FC<FormItemsProps> = ({
  title,
  subtitle,
}) => {
  const { control, register } = useFormContext();
  const {} = useFieldArray({
    name: `titles`,
    control,
  });
  return (
    <>
      <div className="flex flex-wrap  mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="firstname"
          >
            {title}
          </label>
          {title && (
            <>
              <input
                {...register(title)}
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
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="lastname"
          >
            {subtitle}
          </label>
          {subtitle && (
            <input
              {...register(subtitle)}
              //   onChange={(value) => handleChange(value, null, "lastname")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastname"
              type="text"
              placeholder="Enter price"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FormItems;



//  {/* <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//                    <h1 className="font-bold text-xl">{title}</h1>
//                    {title  && <input
//                     // @ts-ignore
//                      {...register(title)}
//                     //   defaultValue={items.title}
//                      type="checkbox"
//                      className="accent-black h-[30px] w-[30px] rounded-full"
//                    />}
//                  </div>
//                  <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//                    <h1 className="font-bold text-xl">{subtitle}</h1>
//                    {subtitle && (
//                      <input
//                        {...register(subtitle)}
//                        type="checkbox"
//                        className="accent-black h-[30px] w-[30px]"
//                      />
//                    )}
//                  </div> */}
//                  </div>
//                  {/* <div  className="flex flex-wrap mb-6">
//                             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//                               <h1 className="font-bold text-xl">{title}</h1>
//                               {title  && <input
//                                // @ts-ignore
//                                 {...register(title)}
//                                //   defaultValue={items.title}
//                                 type="checkbox"
//                                 className="accent-black h-[30px] w-[30px] rounded-full"
//                               />}
//                             </div>
//                             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//                               <h1 className="font-bold text-xl">{subtitle}</h1>
//                               {subtitle && (
//                                 <input
//                                   {...register(subtitle)}
//                                   type="checkbox"
//                                   className="accent-black h-[30px] w-[30px]"
//                                 />
//                               )}
//                             </div>