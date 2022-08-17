import React from "react";
import Navigation from './Navigation'
import IssuedDocuments from "./IssuedDocuments";
import Profile from "./Profile";
import Home from "./Home";
import Drive from "./Drive";
function DashContainer() {
  const [home,setHome] = React.useState(false);
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
          <div className="h-screen position-fixed -z-10 w-full ml-80 md:ml-64">
                { home ? <Home/> : <></>}
                { issued ? <IssuedDocuments/> : <></>}
                { profile ? <Profile/> : <></>}
                { drive ? <Drive/> : <></>}
          </div>
              
      </div>
    </>
  );
}

export default DashContainer;
