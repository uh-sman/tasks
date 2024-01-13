// import React from 'react'
export const revalidate = 0

const User = () => {
  return (
    <div>
      HELLO FROM  DASHBOARD
    </div>
  )
}

export default User

// CREATE POST FUNCTION
// const createPost = async () => {
//   // ...

//   const { avatar } = form;

//   if (avatar) {
//     const formData = new FormData();
//     formData.append("file", avatar);
//     formData.append("upload_preset", "pya1lxcg" || "");
//     formData.append("cloud_name", "dmidoz6fi" || "");
//     formData.append("folder", "avatar");

//     console.log("env", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

//     try {
//       const cloudinaryResponse = await fetch(
//         `https://api.cloudinary.com/v1_1/dmidoz6fi/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const cloudinaryData = await cloudinaryResponse.json();
//       console.log("Cloudinary data:", cloudinaryData?.public_id);
//       setForm({ ...form, avatar: cloudinaryData?.public_id as string });

//       if (formState === "SIGNUP") {
//         const userRegistrationResponse = await axios.post(
//           "http://localhost:4000/api/users/register",
//           form
//         );
//         console.log(
//           "User registration response:",
//           userRegistrationResponse.data
//         );
//         router.push(`/dashboard/${userRegistrationResponse.data.userId}`);
//         // Handle the response or update the state as needed
//       }
//       if (formState === "LOGIN") {
//       //   handleLogin();
//         // const userRegistrationResponse = await axios.post('http://localhost:4000/api/users/login', form);
//         // console.log('User registration response:', userRegistrationResponse.data);
//         // router.push(`/dashboard/${userRegistrationResponse.data.userId}`)
//         // Handle the response or update the state as needed
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle errors here if needed
//     }
//   }
//   // ...
// }; 

















// HANDLE SUBMIT

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   createPost();
// };