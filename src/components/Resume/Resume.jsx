import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particles";
import pdf from "../../Assets/Resume/Abhishek-kumar-cv.pdf";
import download from "../../Assets/Resume/download-96.png";
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import '../../styles/resume.css'



export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="main">
      <div className="resume-section">
        <Particle />
        <div className="res-btn">
          <a href={pdf} target="_blank" rel="noopener noreferrer"><img src={download} alt="" />
            {' '}Download CV
          </a>
        </div>

        <div className="resume-file">
          <Document file={pdf} className="res-file">
            <Page pageNumber={1} size='A4' scale={width > 786 ? 1.7 : 0.6}/>
          </Document>
        </div>

        <div className="res-btn">
          <a href={pdf} target="_blank" rel="noopener noreferrer"><img src={download} alt="" />
            {' '}Download CV
          </a>
        </div>
      </div>
    </div>
  );
}






// const ResumeNew = () => {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   const downloadPdf = () => {
//     window.open(pdf, "_blank");
//   };

//   return (
//     <div>
//       <div className="resume-section" style={{ position: "relative" }}>
//         <Particle />
//         <div className="mn-cnt">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <button
//               onClick={downloadPdf}
//               style={{
//                 backgroundColor: "var(--primary-color)",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 border: "none",
//                 cursor: "pointer",
//                 maxWidth: "250px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               {/* <AiOutlineDownload style={{ marginRight: "5px" }} /> */}
//               Download CV
//             </button>
//           </div>
//         </div>

//         <div
//           className="resume"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Document file={pdf} >
//             <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
//           </Document>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <button
//             onClick={downloadPdf}
//             style={{
//               backgroundColor: "var(--primary-color)",
//               color: "#fff",
//               padding: "10px 20px",
//               border: "none",
//               cursor: "pointer",
//               maxWidth: "250px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             {/* <AiOutlineDownload style={{ marginRight: "5px" }} /> */}
//             Download CV
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeNew;
