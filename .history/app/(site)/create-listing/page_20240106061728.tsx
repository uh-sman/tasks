"use client";
import { useEffect } from "react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { title } from "process";
import FormItems from "@/components/FormItems";

type CreateListingFunc = {
  title: string;
  description: string;
  location: string;
  nearestLandmark: string;
  plots: string;
  price: string;
  survey: string;
  globalCofO: string;
  gate: string;
  certificateOfOwnership: string;
  cctv: string;
  lawDeed: string;
  securityPersonnel: string;
  agreement: string;
  garage: string;
  sale: string;
  paymentType: string;
};
const CreateListing: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/auth");
  }, [session, status, router]);

  // if (!session) {
  //   return null;
  // }
  const data = [
    {
      title: "Survey/Layout",
      subtitle: "Global C of O",
    },
    {
      title: "Gate",
      subtitle: "Certificate of Ownership",
    },
    {
      title: "CCTV",
      subtitle: "Law Deed",
    },
    {
      title: "Security Personnel",
      subtitle: "Agreement",
    },
    {
      title: "Garage",
    },
    {
      // title: "Garage",
      formName: 'Price'
    },
  ];

  const methods = useForm({
    defaultValues: {
      titles: [
        {
          formName:'TITLE OF PROPERTY',
          subName:'Description'
        },
        {
          title: "Survey/Layout",
          subtitle: "Global C of O",
        },
        {
          formName:'Location',
          subName:'Nearest Landmark'

        },
        {
          title: "Gate",
          subtitle: "Certificate of Ownership",
        },
        {
          formName: 'Plot(S)',
          subName:'Price'
        },
        {
          title: "CCTV",
          subtitle: "Law Deed",
        },
        {
          title: "Security Personnel",
          subtitle: "Agreement",
          
        },
        {
          title: "Garage",

        },
      ],
    },
  });

  const { control, handleSubmit, register } = methods;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "titles",
    }
  );

  // const { register, handleSubmit, reset, formState } =
  //   useForm<CreateListingFunc>();
  // const onSubmit = (data: CreateListingFunc) => {
  //   try {
  //     console.log("data", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-full mt-2">
      <div className="w-72 md:w-[420px] flex-shrink-0 lg:w-[1000px] min-w-sm bg-base-100">
        <form onSubmit={handleSubmit(data => console.log(data))} className="w-full max-w-full">
          <FormProvider {...methods}>
            {
              fields.map(({title, subtitle ,formName, subName}) => (
                <>
                <FormItems title={formName} subtitle={subName} />
                {/* <FormItems title={formName} subtitle={subName}/> */}

                </>
              ))
            }
          </FormProvider>
          {/* DO NOT EDIT THIS */}
          <div className="flex flex-wrap mt-3 mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <button className="bg-teal-600 w-full h-[50px] font-semibold rounded-md text-white">
                Add Listing
              </button>
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <button className="bg-transparent w-full h-[50px] font-semibold rounded-md text-teal-500 border border-teal-500">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function CreateListingProvider() {
  return (
    <SessionProvider>
      <CreateListing />
    </SessionProvider>
  );
}

{
  /* <div className="flex flex-wrap  mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
            <h1>Survey/layout</h1>
              <input type="checkbox" className="accent-black h-[30px] w-[30px] transition" />
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
            <h1>Survey/layout</h1>
              <input type="checkbox" className="accent-black h-[30px] w-[30px] transition" />
            </div>
          </div> */
}

// OLD FORM

// {data.map((items, index) => (
//   <div key={items.title} className="flex flex-wrap mb-6">
//     <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//       <h1 className="font-bold text-xl">{items.title}</h1>
//       <input
//       {...register} defaultValue={items.title}
//         type="checkbox"
//         className="accent-black h-[30px] w-[30px] rounded-full"
//       />
//     </div>
//     <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
//       <h1 className="font-bold text-xl">{items.subtitle}</h1>
//       {items.subtitle && (
//         <input
//         {...register}
//           type="checkbox"
//           className="accent-black h-[30px] w-[30px]"
//         />
//       )}
//     </div>
//   </div>
// ))}



// FORM FIELDS WITH REACT HOOK FORM

{/* <FormProvider {...methods}>
            {fields.map((title, index) => (
              <div key={title.id} className="flex flex-wrap mb-6">
                <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
                  <h1 className="font-bold text-xl">{title.title}</h1>
                  <input
                  // @ts-ignore
                    {...register(`test.${index}.input`)}
                    // defaultValue={items.title}
                    type="checkbox"
                    className="accent-black h-[30px] w-[30px] rounded-full"
                  />
                </div>
                <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
                  <h1 className="font-bold text-xl">{title.subtitle}</h1>
                  {title.subtitle && (
                    <input
                      {...register}
                      type="checkbox"
                      className="accent-black h-[30px] w-[30px]"
                    />
                  )}
                </div>
              </div>
            ))}
          </FormProvider> */}