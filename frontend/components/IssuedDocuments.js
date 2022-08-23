import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
export default function IssuedDocuments() {
  const [list, setList] = useState([]);

  const getDocuments = async () => {
    const res = await axios.get("http://localhost:5000/storage/getfiles", {
      withCredentials: true,
    });
    setList(res.data.files);
  };

  useEffect(() => {
    getDocuments();
  }, []);

  /* THE LIST OF DOCUMENTS FOR A USER IS IN THE LIST ARRAY.

The structure is:- [
  {
    "name":"/Main.cpp",    // filename (Will change it later)
    "cid": "2s538dh93h8dj9d",  //IPFS Hash of the stored file
    "id": "f393j93j9d38"   //Mongo Document id
  }
]


*/
  return (
    <div className="w-full ml-10">
      <div className="font-sans font-semibold text-lg text-blue-900 mt-3 ">
        Welcome, Ruchika
      </div>
      <p className="text-gray-900 mt-2">All your documents will appear here.</p>
      <div className="pr-5">
        {/* {list && list.map((elem)=>
            <div className="h-20 mt-3 shadow-lg rounded-lg">
              <a href = {`http://dweb.link/ipfs/${elem.cid}${elem.name}`} className="h-20 mt-3 shadow-lg rounded-lg">{elem.name}</a>
              </div>
            )} */}
        {/* <div className="w-6/6 h-32 m-3 shadow-lg rounded-lg flex">
          <div className="m-3 w-full pr-16">
            <div className="flex justify-between">
              <Card style={{ width: "5rem", margin: "5px" }}>
                <Card.Img variant="top" src="assets/ministryports.jpeg" />
              </Card>
              <div className="font-sans font-semibold text-lg text-blue-900 m-5">
                Driving Licence
                <div className="font-sans font-semibold text-lg text-blue-900">
                  XXXXXXXXXXXX
                </div>
              </div>
              <div className="font-sans font-semibold text-lg text-blue-900 object-left">
                Ministry of Ports
              </div>
              <div className="font-sans font-semibold text-lg text-blue-900 object-left">
                Icons
              </div>
             
            </div>
          </div>
        </div>  */}
        <div className="w-6/6 flex h-32 m-5 shadow-lg rounded-lg justify-between p-2 align-items-center">
          <Card
            style={{
              width: "5rem",
              borderRadius: "40px",
              margin: "20px",
              flexShrink: 0,
              className: "img-rounded",
            }}
          >
            <Card.Img variant="top" src="assets/ministryports.jpeg" />
          </Card>
          <div className="font-sans font-semibold text-xl text-blue-900 object-left">
            Driver's Licence
            <div className="font-sans font-semibold text-lg text-stone-400">
              XXXXXXXXXX
            </div>
          </div>
          <div className="font-sans font-semibold text-lg text-blue-900 object-left">
            Ministry of Ports
            <div className="font-sans font-semibold text-lg text-stone-400">
              22 August 22,22:35
            </div>
          </div>
          <div className="font-sans font-semibold text-lg text-blue-900 object-left flex m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-3 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
        </div>
        <div className="w-6/6 flex h-32 m-5 shadow-lg rounded-lg justify-between p-2 align-items-center">
          <Card
            style={{
              width: "5rem",
              borderRadius: "40px",
              margin: "20px",
              flexShrink: 0,
              className: "img-rounded",
            }}
          >
            <Card.Img variant="top" src="assets/ministryports.jpeg" />
          </Card>
          <div className="font-sans font-semibold text-xl text-blue-900 object-left">
            Driver's Licence
            <div className="font-sans font-semibold text-lg text-stone-400">
              XXXXXXXXXX
            </div>
          </div>
          <div className="font-sans font-semibold text-lg text-blue-900 object-left">
            Ministry of Ports
            <div className="font-sans font-semibold text-lg text-stone-400">
              22 August 22,22:35
            </div>
          </div>
          <div className="font-sans font-semibold text-lg text-blue-900 object-left flex m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-3 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
        </div>
        <div className="w-6/6 flex h-32 m-5 shadow-lg rounded-lg justify-between p-2 align-items-center">
          <Card
            style={{
              width: "5rem",
              borderRadius: "40px",
              margin: "20px",
              flexShrink: 0,
              className: "img-rounded",
            }}
          >
            <Card.Img variant="top" src="assets/ministryports.jpeg" />
          </Card>
          <div className="font-sans font-semibold text-xl text-blue-900 object-left">
            Driver's Licence
            <div className="font-sans font-semibold text-lg text-stone-400">
              XXXXXXXXXX
            </div>
          </div>
          <div className="font-sans font-semibold text-lg text-blue-900 object-left">
            Ministry of Ports
            <div className="font-sans font-semibold text-lg text-stone-400">
              22 August 22,22:35
            </div>
          </div>
          <div className="font-sans font-semibold text-lg text-blue-900 object-left flex m-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-3 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
          </div>
        </div>
        </div>
    </div>
  );
}
