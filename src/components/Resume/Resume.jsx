import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import Particle from "../Particles";
import pdf from "../../assets/Abhishek_kumar_cv.pdf";
import download from "../../assets/download-96.png";
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
        {/* <Particle /> */}
        <div className="res-btn">
          <a href={pdf} target="_blank" rel="noopener noreferrer"><img src={download} alt="" />
            {' '}Download CV
          </a>
        </div>

        <div className="resume-file">
          <Document file={pdf} className="res-file">
            <Page pageNumber={1} size='A4' scale={width > 786 ? 1.7 : 0.6} />
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
