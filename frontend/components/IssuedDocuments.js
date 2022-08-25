import React from "react";
// import styles from './styles/docs.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import PdfViewer from "./PdfViewer";

export default function IssuedDocuments() {

  
    
  const [timer, setTimer] = useState(true)
  const [list, setList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handlePdf = () => {
    setOpen(true);
  };

  const getDocuments = async () => {
    const res = await axios.get("http://localhost:5000/storage/getfiles", {
      withCredentials: true,
    });
    setList(res.data.files);
    console.log(res.data.files)
  };

  useEffect(() => {
    getDocuments();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {setTimer(false);console.log('bhai bhai bhai')}, 6000)
    console.log('seeeee')
    return () => clearTimeout(t)
  }, [])

  return (
    // <div className=" w-full h-full align-items-center">
    <>

{timer ?    (
<div>
  <button className="buttonF">
    <span className="print print--under">
      <svg viewBox="0 0 98 109" xmlns="http://www.w3.org/2000/svg">
        <path d="m95.42 60.221c0.33333-4.6667 0.33333-10.667 0-18-0.5-11-8.5-26.5-24-34.5-15.5-8-38-9.5-55.5 8-11.667 11.667-16 25.5-13 41.5l0.65525 4.3683c0.38693 2.5791 2.7914 4.3563 5.3705 3.9695 2.5664-0.38496 4.3413-2.7687 3.9742-5.3378-1-7-6-22 10-38 14.554-14.554 38.15-14.554 52.704 0 4.5444 4.5444 7.8364 10.187 9.5562 16.379 0.5744 2.0681 0.98766 3.9417 1.2398 5.6209 2.4899 16.582-2.9979 37.051-6 53" pathLength={1} />
        <path d="m15.42 76.221c5.3333-3.6667 7.3333-10.167 6-19.5-0.23862-1.551-0.44877-3.0902-0.63044-4.6174-1.8313-15.395 9.1641-29.359 24.559-31.191 1.268-0.15084 2.5448-0.21497 3.8216-0.19197 15.616 0.28138 28.07 13.129 27.864 28.747-0.089675 6.8105-0.29443 11.895-0.61426 15.253-1.2042 12.644-2.9364 21.532-7 37" pathLength={1} />
        <path d="m19.92 85.221c7-5.3333 10.5-13.333 10.5-24v-12.5c0-10.217 8.2827-18.5 18.5-18.5 10.287 0 18.636 8.3235 18.666 18.611 0.019372 6.5699-0.035925 10.7-0.16589 12.389-1.5 19.5-3.5 31.5-12 45" pathLength={1} />
        <path d="m26.92 92.221c8.6667-9.3333 13-17.333 13-24 0-4.1832-0.18166-10.365-0.54497-18.544-0.2219-4.9954 3.6478-9.2249 8.6432-9.4467 0.13383-0.0059444 0.26778-0.0089177 0.40175-0.0089177 5.5235 0 10.044 4.395 10.2 9.9163 0.16256 5.764-0.070756 11.792-0.69994 18.084-1.5 15-5.5 25.5-16.5 38" pathLength={1} />
        <path d="m32.92 99.221c10.667-12.333 16-23.333 16-33v-17" pathLength={1} />
      </svg>
    </span>
    <span className="print print--over">
      <svg viewBox="0 0 98 109" xmlns="http://www.w3.org/2000/svg">
        <path d="m95.42 60.221c0.33333-4.6667 0.33333-10.667 0-18-0.5-11-8.5-26.5-24-34.5-15.5-8-38-9.5-55.5 8-11.667 11.667-16 25.5-13 41.5l0.65525 4.3683c0.38693 2.5791 2.7914 4.3563 5.3705 3.9695 2.5664-0.38496 4.3413-2.7687 3.9742-5.3378-1-7-6-22 10-38 14.554-14.554 38.15-14.554 52.704 0 4.5444 4.5444 7.8364 10.187 9.5562 16.379 0.5744 2.0681 0.98766 3.9417 1.2398 5.6209 2.4899 16.582-2.9979 37.051-6 53" pathLength={1} />
        <path d="m15.42 76.221c5.3333-3.6667 7.3333-10.167 6-19.5-0.23862-1.551-0.44877-3.0902-0.63044-4.6174-1.8313-15.395 9.1641-29.359 24.559-31.191 1.268-0.15084 2.5448-0.21497 3.8216-0.19197 15.616 0.28138 28.07 13.129 27.864 28.747-0.089675 6.8105-0.29443 11.895-0.61426 15.253-1.2042 12.644-2.9364 21.532-7 37" pathLength={1} />
        <path d="m19.92 85.221c7-5.3333 10.5-13.333 10.5-24v-12.5c0-10.217 8.2827-18.5 18.5-18.5 10.287 0 18.636 8.3235 18.666 18.611 0.019372 6.5699-0.035925 10.7-0.16589 12.389-1.5 19.5-3.5 31.5-12 45" pathLength={1} />
        <path d="m26.92 92.221c8.6667-9.3333 13-17.333 13-24 0-4.1832-0.18166-10.365-0.54497-18.544-0.2219-4.9954 3.6478-9.2249 8.6432-9.4467 0.13383-0.0059444 0.26778-0.0089177 0.40175-0.0089177 5.5235 0 10.044 4.395 10.2 9.9163 0.16256 5.764-0.070756 11.792-0.69994 18.084-1.5 15-5.5 25.5-16.5 38" pathLength={1} />
        <path d="m32.92 99.221c10.667-12.333 16-23.333 16-33v-17" pathLength={1} />
      </svg>
    </span>
    </button>
    </div>
      ) 
  
   : ( 
    <div className="w-full ml-10">
      <div className="font-sans font-semibold text-lg text-blue-900 mt-3 ">
        Welcome, Ruchika
      </div>
      <p className="text-gray-900 mt-2">All your documents will appear here.</p>
      <div className="pr-5">
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
            Driver's License
            <div className="font-sans font-semibold text-lg text-stone-400">
            674769748787
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
            <Button onClick={handlePdf}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
            </Button>
            <PdfViewer open={open} setOpen={setOpen} />
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
              64687368776
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
            <Button onClick={handlePdf}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
            </Button>
            <PdfViewer open={open} setOpen={setOpen} />
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
              56754648667
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
            <Button onClick={handlePdf}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
            </Button>
            <PdfViewer open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
     )} 
    </>
  );
}
