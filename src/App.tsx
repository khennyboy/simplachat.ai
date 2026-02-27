import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/homepage";
import MenuProvider from "./context/menu-provider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
    </>,
  ),
);
function App() {
  return (
    <>
    
      <MenuProvider>
        <RouterProvider router={router} />
      </MenuProvider>
    </>
  );
}

export default App;

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

// // 1️⃣ Define Zod schema
// const schema = z.object({
//   question: z.string().min(1, "You must type something"),
// });

// // 2️⃣ Infer TS type from schema
// type FormData = z.infer<typeof schema>;

// const InputForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//     defaultValues: { question: "" },
//   });

//   const questionValue = watch("question");

//   const onSubmit = (data: FormData) => {
//     console.log("Submitted:", data.question);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div
//         className={`
//           flex items-center p-3 mb-5 mx-2 border-2 rounded-lg
//           border-gray-200/30 hover:border-gray-200/80
//           transition-all duration-200 ease-linear
//           ${questionValue ? "border-blue-500 ring-2 ring-blue-500/30" : ""}
//           focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30
//         `}
//       >
//         <input
//           {...register("question")}
//           type="text"
//           placeholder="Ask simplachat.ai anything"
//           className="flex-1 outline-none bg-transparent placeholder:text-gray-400"
//         />
//         <button type="submit">
//           <PaperAirplaneIcon className="cursor-pointer w-5 h-5" />
//         </button>
//       </div>

//       {errors.question && (
//         <p className="text-red-500 text-sm ml-3">{errors.question.message}</p>
//       )}
//     </form>
//   );
// };

// export default InputForm;
