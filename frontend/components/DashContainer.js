import React from "react";
import Navigation from './Navigation'
import IssuedDocuments from "./IssuedDocuments";
import Profile from "./Profile";
import Home from "./Home";
import Drive from "./Drive";
import Registration from "./Registration";

function DashContainer() {
  const [home,setHome] = React.useState(true);
  const [issued,setIssued] = React.useState(false);
  const [profile,setProfile] = React.useState(false);
  const [registration,setRegistration] = React.useState(false);
  const [drive,setDrive] = React.useState(false);
  const update = (state) => {
    state(true);
  }
  return (
    <>
      {/* <Navigation/> */}
      <div className="h-screen w-screen position-fixed z-9999">
          {/* left side */}
          <div className="h-screen position-fixed shadow-lg w-1/6">
              <Navigation setIssued = {setIssued} setHome={setHome} setProfile={setProfile} setRegistration={setRegistration} setDrive={setDrive}/>
          </div>
          {/* right side */}
          <div className="h-screen position-fixed -z-10 w-[calc(100%-16.66%)] ml-80 md:ml-80 xl:ml-92">
                { home ? <Home/> : <></>}
                { issued ? <IssuedDocuments/> : <></>}
                { profile ? <Profile/> : <></>}
                { drive ? <Drive/> : <></>}
                { registration ? <Registration/> : <></>}
          </div>
              
      </div>
    </>
  );
}

export default DashContainer;
