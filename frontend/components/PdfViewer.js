import React from "react";

import Dialog from "@mui/material/Dialog";

import { useTheme } from "@mui/material/styles";
import { useState } from "react";
// import { PDFReader } from "reactjs-pdf-reader";
// import { Viewer } from '@react-pdf-viewer/core';

// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// import { Document, Page } from "react-pdf";

function PdfViewer(props) {
  const theme = useTheme();
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}  PaperProps={{
    style: {
      height:'100%',
      width:'100%'
    },
  }}>
        {/* <Document file={{URL:"https://bafybeieh6g4vz4x2e67saxsd6ggyo3j5bhwjtsj6k656mj4uv5iy5epnli.ipfs.dweb.link/output.pdf"}} >
      <Page pageNumber={1} /> */}
        {/* <PDFReader url="https://bafybeieh6g4vz4x2e67saxsd6ggyo3j5bhwjtsj6k656mj4uv5iy5epnli.ipfs.dweb.link/output.pdf"/> */}
        {/* </Document> */}
        {/* <Viewer
    fileUrl='https://bafybeieh6g4vz4x2e67saxsd6ggyo3j5bhwjtsj6k656mj4uv5iy5epnli.ipfs.dweb.link/output.pdf'
    plugins={[
        // Register plugins
        defaultLayoutPluginInstance,
      
    ]}
/> */}
        <object
// data="https://bafybeieh6g4vz4x2e67saxsd6ggyo3j5bhwjtsj6k656mj4uv5iy5epnli.ipfs.dweb.link/output.pdf"
data="/$output.pdf"
type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Alternative text - include a link{" "}
            <a href="https://bafybeieh6g4vz4x2e67saxsd6ggyo3j5bhwjtsj6k656mj4uv5iy5epnli.ipfs.dweb.link/output.pdf3">
              to the PDF!
            </a>
          </p>
        </object>
      </Dialog>
    </div>
  );
}

export default PdfViewer;
