import Link from "next/link";
import { FiPieChart } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";

// import { useState } from "react";
// import IMG from "./assets/srijan.jpg";

// const Navigation = ({ type }) => {
//   return (
//     <div classNameName="navigation">
//       <div classNameName="navigationWrapper">
//         <div classNameName="title">
//           <h6>Ministry of Ports, Shipping & Waterways</h6>
//           <h1>SEAGI-LOCKER</h1>
//         </div>
//         <ul classNameName="navbarlist">
//           {/* <Link href="/" style={{textDecoration:"none"}}> */}
//           <li classNameName="navbarListItem">
//             <FiHome classNameName="navbarIcon" />
//             <span classNameName="navbarListItemText">Home</span>
//           </li>
//           <li classNameName="navbarListItem">
//             <FiHome classNameName="navbarIcon" />
//             <span classNameName="navbarListItemText">Issued Documents</span>
//           </li>
//           {/* </Link> */}
//           {/* <Link style={{textDecoration:"none"}}> */}
//           <li classNameName="navbarListItem">
//             <FiPieChart classNameName="navbarIcon" />

//             <span classNameName="navbarListItemText">Search Documents</span>
//           </li>
//           {/* </Link> */}
//           {/* <Link href="/edit" style={{textDecoration:"none"}}> */}
//           <li classNameName="navbarListItem">
//             <FiEdit classNameName="navbarIcon" />
//             <span classNameName="navbarListItemText">Registrations</span>
//           </li>
//           <li classNameName="navbarListItem">
//             <FiEdit classNameName="navbarIcon" />
//             <span classNameName="navbarListItemText">Drive</span>
//           </li>
//           <li classNameName="navbarListItem">
//             <FiEdit classNameName="navbarIcon" />
//             <span classNameName="navbarListItemText">About SeaGiLocker</span>
//           </li>
//           {/* </Link> */}
//           {/* <Link href="/testimonials" style={{textDecoration:"none"}}> */}
//           {/* <li classNameName="navbarListItem">
//             <BsPeople classNameName="navbarIcon" />
//             <span classNameName="navbarListItemText">Br</span>
//           </li> */}
//           {/* </Link> */}
//         </ul>
//         <div classNameName="profile">
//           <img src="/assets/srijan.jpg" alt="" classNameName="profileImg" />
//           <div classNameName="profile__text">
//             <div classNameName="profileName">Srijan Majumdar</div>
//             <div classNameName="logout">Logout</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navigation;
export default function Navigation(props) {
  const setProp=(p)=>{
    for(var prop in props){
      props[prop](false);
    } 
    p(true);
  }
  return (
    <div className="py-4 w-full ">
      <ul className="space-y-2">
        <li>
          <a  onClick={() => setProp(props.setHome)} className="flex h-14 items-center p-2 text-base font-normal text-black rounded-lg dark:text-black  hover:text-white hover:bg-blue-100 selec hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="ml-3 text-lg">Home</span>
          </a>
          
        </li>
        <li>
          <a onClick={() => setProp(props.setIssued)} className="flex h-14 items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:text-white hover:bg-blue-100  hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
            </svg>
            <span className="ml-3 text-lg">Issued Documents</span>
          </a>
        </li>
        <li>
          <a onClick={() => setProp(props.setDrive)} className="flex h-14 items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:text-white hover:bg-blue-100  hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" />
            </svg>
            <span className="ml-3 text-lg">Drive</span>
          </a>

        </li>
        <li>
          <a onClick={() => setProp(props.setRegistration)} className="flex h-14  items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:text-white hover:bg-blue-100 hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
            </svg>
            <span className="ml-3 text-lg">Registrations</span>
          </a>
        </li>
        <li>
          <a onClick={() => setProp(props.setProfile)} className="flex h-14  items-center p-2 text-base font-normal text-black rounded-lg dark:text-black hover:text-white hover:bg-blue-100 hover:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" />
            </svg>
            <span className="ml-3 text-lg">My Profile</span>
          </a>
        </li>
      </ul>
    </div>
  );

}

