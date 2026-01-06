import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import "./Resume.scss";
import Button from "../../components/button/Button";
import {resumeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Resume() {
  const {isDark} = useContext(StyleContext);
  const [pdfError, setPdfError] = useState(false);
  const cacheBust = Date.now();
  
  if (!resumeSection.display) {
    return null;
  }

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="resume-section" id="resume">
        <div className="resume-main">
          <h1 className={isDark ? "dark-mode resume-title" : "resume-title"}>
            {resumeSection.title}
          </h1>
          <p className={isDark ? "dark-mode resume-subtitle" : "resume-subtitle"}>
            {resumeSection.subtitle}
          </p>
          
          <div className="resume-content">
            <div className="resume-pdf-container">
              {!pdfError ? (
                <iframe
                  src={`${process.env.PUBLIC_URL}/Resume_AUS_2.pdf?v=${cacheBust}#toolbar=1&navpanes=1&scrollbar=1`}
                  width="100%"
                  height="800px"
                  title="Resume PDF Viewer"
                  className="resume-pdf"
                  style={{border: 'none'}}
                  onError={handlePdfError}
                />
              ) : (
                <div className="pdf-error-fallback">
                  <p>PDF viewer not supported. Please use the download button below.</p>
                  <a
                    href={`${process.env.PUBLIC_URL}/Resume_AUS_2.pdf?v=${cacheBust}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-resume-link"
                  >
                    <Button text="View Resume in New Tab" />
                  </a>
                </div>
              )}
            </div>
            
            <div className="resume-actions">
              <a
                href={`${process.env.PUBLIC_URL}/Resume_AUS_2.pdf?v=${cacheBust}`}
                download="Sanskriti_Arvind_Resume.pdf"
                className="download-resume-link"
              >
                <Button text="Download Resume" />
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/Resume_AUS_2.pdf?v=${cacheBust}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-resume-link"
              >
                <Button text="Open in New Tab" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
