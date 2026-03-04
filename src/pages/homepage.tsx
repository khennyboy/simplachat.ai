import MainContent from "../ui/main-content";
import OpenSideContent from "../ui/open-sideContent";
import SideContent from "../ui/side-content";

const HomePage = () => {
  return (
    <div className="">
      <OpenSideContent />
      <SideContent />
      <MainContent />
    </div>
  );
};

export default HomePage;



// import { useEffect, useRef, useState } from "react";
// import { VscSend } from "react-icons/vsc";
// import TextareaAutosize from "react-textarea-autosize";

// type TextFxn = {
//   hasText?: boolean;
//   setHasText: (value: boolean | ((prev: boolean) => boolean)) => void;
// };

// const ChatInput = ({ setHasText, hasText }: TextFxn) => {
//   const textareaRef = useRef<HTMLTextAreaElement>(null);
//   const divareaRef = useRef<HTMLDivElement>(null);
//   const [divHeight, setDivHeight] = useState<string>();
//   useEffect(() => {
//     setDivHeight(window.getComputedStyle(divareaRef.current as Element).height);
//   }, []);
 
//   return (
//     <div
//       className={`bg-yellow-500 fixed left-0 bottom-0 mx-auto w-full h-[${divHeight}]
//        `}
//     >
//       <div ref={divareaRef} className={`w-full max-w-2xl mx-auto  `}>
//         <div
//           className="
//             flex flex-wrap items-center gap-3
//             bg-chats justify-end
//             px-5 py-3
//             rounded-3xl
//             shadow-sm
//             transition-all duration-200
//             focus-within:ring-2 focus-within:ring-border-glow
//           "
//         >
//           <TextareaAutosize
//             name="question-box"
//             ref={textareaRef}
//             maxRows={6}
//             className="
//               bg-transparent w-full
//               outline-none
//               resize-none
//               text-base
//               leading-relaxed
//               placeholder:text-gray-400 scrollbar-thin scroll-smooth
//             "
//             placeholder="Ask simplachat.ai anything"
//             onChange={(e) => {
//               setHasText(e.target.value.trim().length > 0);
//               setDivHeight(
//                 window.getComputedStyle(divareaRef.current as Element).height,
//               );
//               console.log(divHeight);
//               const x = window.getComputedStyle(e.target).height;
//               console.log(x);
//             }}
//           />
//           <button
//             className="
//               flex items-center justify-center
//               h-10 w-10
//               rounded-full
//               bg-user-bubble
//               text-white
//               hover:opacity-90
//               active:scale-95
//               transition
//             "
//           >
//             <VscSend />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatInput;
