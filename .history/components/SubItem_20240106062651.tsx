import { useWatch, useFormContext, useFieldArray } from "react-hook-form";
interface SubItemProps {
  title: string | undefined;
  subtitle: string | undefined;
}

const SubItem: React.FC<SubItemProps> = ({ title, subtitle }) => {
  const { control, register } = useFormContext();
  const {} = useFieldArray({
    name: `titles`,
    control,
  });
  return (
    <>
       <div  className="flex flex-wrap mb-6">
                             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
                               <h1 className="font-bold text-xl">{title}</h1>
                               {title  && <input
                                 @ts-ignore
                                 {...register(title)}
                                //    defaultValue={items.title}
                                 type="checkbox"
                                 className="accent-black h-[30px] w-[30px] rounded-full"
                               />}
                             </div>
                             <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
                               <h1 className="font-bold text-xl">{subtitle}</h1>
                               {subtitle && (
                                 <input
                                   {...register(subtitle)}
                                   type="checkbox"
                                   className="accent-black h-[30px] w-[30px]"
                                 />
                               )}
                             </div>
    </>
  );
};

export default SubItem;
