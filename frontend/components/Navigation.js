import Link from "next/link";
import { FiPieChart } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
// import { useState } from "react";
// import IMG from "./assets/srijan.jpg";

const Navigation = ({ type }) => {
  return (
    <div className="navigation">
      <div className="navigationWrapper">
        <div className="title">
          <h6>Ministry of Ports, Shipping & Waterways</h6>
          <h1>SEAGI-LOCKER</h1>
        </div>
        <ul className="navbarlist">
          {/* <Link href="/" style={{textDecoration:"none"}}> */}
          <li className="navbarListItem">
            <FiHome className="navbarIcon" />
            <span className="navbarListItemText">Home</span>
          </li>
          {/* </Link> */}
          {/* <Link style={{textDecoration:"none"}}> */}
          <li className="navbarListItem">
            <FiPieChart className="navbarIcon" />

            <span className="navbarListItemText">Dashboard</span>
          </li>
          {/* </Link> */}
          {/* <Link href="/edit" style={{textDecoration:"none"}}> */}
          <li className="navbarListItem">
            <FiEdit className="navbarIcon" />
            <span className="navbarListItemText">Edit Profile</span>
          </li>
          {/* </Link> */}
          {/* <Link href="/testimonials" style={{textDecoration:"none"}}> */}
          <li className="navbarListItem">
            <BsPeople className="navbarIcon" />
            <span className="navbarListItemText">Testimonials</span>
          </li>
          {/* </Link> */}
        </ul>
        <div className="profile">
          <img src="/assets/srijan.jpg" alt="" className="profileImg" />
          <div className="profile__text">
            <div className="profileName">Srijan Majumdar</div>
            <div className="logout">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
