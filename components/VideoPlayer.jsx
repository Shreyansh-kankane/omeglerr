'use client'
// import { BiSolidHide } from "react-icons/bi"
// import { CiVideoOff } from "react-icons/ci"
// import { CiVideoOn } from "react-icons/ci"
// import { CiMicrophoneOff } from "react-icons/ci";
// import { CiMicrophoneOn } from "react-icons/ci";

// import { useCallContext } from "@/context/CallContext";

// function VedioPlayer() {

//   const {me, callAccepted, myVideo, userVideo, callEnded, stream } = useCallContext();

//   return (
//     <div className='h-[calc(95vh-60px)] m-4 overflow-auto relative'>
  
//         {callAccepted && !callEnded ? (

//           <div className="w-full h-full absolute top-0 left-0">

//             <video className='w-full h-full p-0 rounded-lg border-1 shadow-xl object-fill' playsInline ref={userVideo} autoPlay muted/>

//             <div className="absolute w-2/3 h-2/3 top-0 right-0 z-10 p-2 bg-white ">
//               <div className="relative h-full w-full" >
//                 { stream &&
//                   <video className='h-full w-full p-0 rounded-lg border-1 shadow-xl object-fill z-50' playsInline muted ref={myVideo} autoPlay />
//                 }
//                 <div className='absolute bottom-3 w-full flex justify-center gap-3'>
//                   <button 
//                     className='border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
//                     <CiVideoOff className='text-2xl'/>
//                   </button>
//                   <button 
//                     className='border rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
//                     <CiMicrophoneOff className='text-2xl'/>
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>

//         )
        
//         :(
//           <div className="h-full w-full" >
//             {stream && 
//               <video className='h-full w-full p-0 rounded-lg border-1 shadow-xl' playsInline muted ref={myVideo} autoPlay />
//             }
//             <div className='absolute bottom-3 w-full flex justify-center gap-3'>
//               <button 
//                 className='border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
//                 <CiVideoOff className='text-2xl'/>
//               </button>
//               <button 
//                 className='border rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
//                 <CiMicrophoneOff className='text-2xl'/>
//               </button>
//             </div>
//           </div>
//         )
//     }
//     </div>
//   )
// }

// export default VedioPlayer;

import React from 'react';
import { CiVideoOff, CiMicrophoneOff } from 'react-icons/ci';
import { useCallContext } from '@/context/CallContext';
import MyVideo from './MyVideo';

function VideoPlayer() {
  const { callAccepted, myVideo, userVideo, callEnded, stream } = useCallContext();

  return (
    <div  className="h-2/4 w-full md:h-full flex-1 p-2 overflow-hidden relative">

      {/* My vedio  */}
      <div 
        className={` 
        ${callAccepted && !callEnded ?  'absolute top-0 right-0 w-1/3 h-1/3 z-10 ': 'h-full w-full mb-2 p-0'}

        `}
      >
        {stream &&
          <video muted playsInline autoPlay ref={myVideo} className='max-md:h-full mx-auto' ></video>
        }
      </div>

      {/* User Vedio */}
      {callAccepted && !callEnded && <div
        className='absolute top-0 left-0 h-full w-full'
      >
        <video playsInline autoPlay ref={userVideo} className=''></video>

      </div> }

    </div>

  )};













//     <div className="h-[calc(95vh-60px)] m-4 overflow-auto relative">

//       {callAccepted && !callEnded && (
//         <>
//           <div className="w-full h-full absolute top-0 left-0">
//             <div className="relative w-2/3 h-2/3 top-0 right-0 z-10 p-2"
//             >
//              {stream && <video
//                 className="w-full h-full p-0 rounded-lg border-1 shadow-xl"
//                 playsInline
//                 ref={myVideo}
//                 autoPlay
//                 muted
//               />}
//               <div className="absolute bottom-3 w-full flex justify-center gap-3">
//                 <button className="border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//                   <CiVideoOff className="text-2xl" />
//                 </button>
//                 <button className="border rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//                   <CiMicrophoneOff className="text-2xl" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className='absolute top-0 left-0 h-full w-full'>
//             <video
//               className="w-full h-full p-0 rounded-lg border-1 shadow-xl object-fill"
//               playsInline
//               ref={userVideo}
//               autoPlay
//               muted
//             />
//           </div>
//         </>
//       )}

//       {!callAccepted || callEnded ? (
//         <div className="h-full w-full">
//           {stream && (
//             <video
//               className="h-full w-full p-0 rounded-lg border-1 shadow-xl bg-white"
//               playsInline
//               muted
//               ref={myVideo}
//               autoPlay
//             />
//           )}
//           <div className="absolute bottom-3 w-full flex justify-center gap-3">
//             <button className="border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//               <CiVideoOff className="text-2xl" />
//             </button>
//             <button className="border rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//               <CiMicrophoneOff className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       ): null}
//     </div>
//   );
// }

export default VideoPlayer;


// 'use client'
// import React, { useState, useEffect } from 'react';
// import { CiVideoOff, CiMicrophoneOff } from 'react-icons/ci';
// import { useCallContext } from '@/context/CallContext';

// function VedioPlayer() {
//   const { me, callAccepted, myVideo, userVideo, callEnded, stream } = useCallContext();
//   const [myVideoStyle, setMyVideoStyle] = useState({});

//   useEffect(() => {
//     if (callAccepted && !callEnded) {
//       // If call is accepted, move myVideo to top right
//       setMyVideoStyle({ position: 'absolute', top: '10px', right: '10px', zIndex: '10' });
//     } else {
//       // If call is not accepted, reset the style
//       setMyVideoStyle({});
//     }
//   }, [callAccepted, callEnded]);

//   return (
//     <div className="h-[calc(95vh-60px)] m-4 overflow-auto relative">
//       {callAccepted && !callEnded ? (
//         <div className="w-full h-full absolute top-0 left-0">
//           <video
//             className="w-full h-full p-0 rounded-lg border-1 shadow-xl object-fill"
//             playsInline
//             ref={userVideo}
//             autoPlay
//             muted
//           />
//           <div className="absolute w-2/3 h-2/3 top-0 right-0 z-10 p-2 bg-white" style={myVideoStyle}>
//             <div className="relative h-full w-full">
//               {stream && (
//                 <video
//                   className="h-full w-full p-0 rounded-lg border-1 shadow-xl object-fill"
//                   playsInline
//                   muted
//                   ref={myVideo}
//                   autoPlay
//                 />
//               )}
//               <div className="absolute bottom-3 w-full flex justify-center gap-3">
//                 <button className="border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//                   <CiVideoOff className="text-2xl" />
//                 </button>
//                 <button className="border rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//                   <CiMicrophoneOff className="text-2xl" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="h-full w-full">
//           {stream && (
//             <video
//               className="h-full w-full p-0 rounded-lg border-1 shadow-xl"
//               playsInline
//               muted
//               ref={myVideo}
//               autoPlay
//             />
//           )}
//           <div className="absolute bottom-3 w-full flex justify-center gap-3">
//             <button className="border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//               <CiVideoOff className="text-2xl" />
//             </button>
//             <button className="border rounded-full p-2 text-[#ab5438] flex items-center justify-center">
//               <CiMicrophoneOff className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VedioPlayer;



// 'use client'
// import { BiSolidHide } from "react-icons/bi"
// import { CiVideoOff } from "react-icons/ci"
// import { CiVideoOn } from "react-icons/ci"
// import { CiMicrophoneOff } from "react-icons/ci";
// import { CiMicrophoneOn } from "react-icons/ci";

// import { useCallContext } from "@/context/CallContext";

// function VedioPlayer() {

//   const {me, callAccepted, myVideo, userVideo, callEnded, stream } = useCallContext();

//   return (
//     <div className='h-[calc(95vh-60px)] w-full m-4 overflow-auto flex flex-col-reverse'>
//       <p>Your Id {me}</p>
//       <div className='h-1/2 border-2 rounded-xl relative'>
//           {callAccepted && !callEnded ? (
//             <video className='w-full h-full' playsInline ref={userVideo} autoPlay muted/>
//           ) : 
//           null}
//       </div>

//       <div className='h-1/2 w-full border-2 rounded-xl mt-2 relative'>
//         {stream && (
//           <video className='w-full h-full' playsInline muted ref={myVideo} autoPlay />
//         )}
        
//         <div className='absolute bottom-3 w-full flex justify-center gap-3'>
//           <button 
//             className='border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
//             <CiVideoOff className='text-2xl'/>
//           </button>
//           <button 
//           	className='border rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
//             <CiMicrophoneOff className='text-2xl'/>
//           </button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default VedioPlayer;



// <div className='absolute top-2 left-4 bg-slate-200 p-2 rounded-lg '> 
// <button className='flex flex-row space-x-2'>
//   <p>Video Enabled</p>
//   <BiSolidHide className='text-2xl'/>
// </button>
// </div>


{/* <div className='h-1/2 border-2 rounded-xl relative'>
{callAccepted && !callEnded ? (
  <video className='w-full h-full' playsInline ref={userVideo} autoPlay muted/>
) : 
null}
</div>

<div className='h-1/2 w-full border-2 rounded-xl mt-2 relative'>
{stream && (
<video className='w-full h-full p-0' playsInline muted ref={myVideo} autoPlay />
)}

<div className='absolute bottom-3 w-full flex justify-center gap-3'>
<button 
  className='border-2  rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
  <CiVideoOff className='text-2xl'/>
</button>
<button 
  className='border rounded-full p-2 text-[#ab5438] flex items-center justify-center'>
  <CiMicrophoneOff className='text-2xl'/>
</button>
</div>
</div> */}