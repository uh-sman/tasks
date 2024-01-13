import { useWatch, useFormContext, useFieldArray } from "react-hook-form";
interface SaleItemProps {
  title: string | undefined;
  subtitle: any;
}

const SaleItem: React.FC<SaleItemProps> = ({ title, subtitle }) => {
  const { control, register } = useFormContext();
  const {} = useFieldArray({
    name: `titles`,
    control,
  });
  return (
    <>
      <div className="flex flex-wrap mb-6">
        <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
          <h1 className="block uppercase tracking-wide font-bold text-xl">{title}</h1>
          {title && (
            <input
              //  @ts-ignore
              {...register(title)}
              //    defaultValue={items.title}
              type="checkbox"
              className="accent-black h-[30px] w-[30px] rounded-full"
            />
          )}
        </div>
        <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
        {subtitle &&  <select
            {...register(subtitle)} // Register select input using its subtitle as the name
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name={subtitle}
            id={subtitle}
          >
            {subtitle}
            <option value={subtitle}>{subtitle}</option>
            {/* <option value={subtitle}>{subtitle}</option> */}
            {/* Add other options as needed */}
          </select>}
        </div>
      </div>
    </>
  );
};

export default SaleItem;


{/* <div className="flex flex-wrap mt-3 mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <h1 className="font-semibold text-lg">Sale</h1>
              <input
                // {...register()}
                type="checkbox"
                className="accent-black h-[30px] w-[30px]"
              />
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name=""
                id=""
              >
                <option value="">Installment</option>
              </select>
            </div>
          </div> */}