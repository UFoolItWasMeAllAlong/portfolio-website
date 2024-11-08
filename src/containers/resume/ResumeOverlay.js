// ResumeOverlay.jsx
import React, { useState } from 'react';
import '../../components/overlay/Overlay.js';

const ResumeOverlay = ({ docUrl, buttonText }) => {
  const [visible, setVisible] = useState(false);

  const openOverlay = () => setVisible(true);
  const closeOverlay = () => setVisible(false);

  return (
    <>
      <button style={{position: "relative", zindex: 1}} onClick={openOverlay}>{buttonText}</button>
      {visible && (
        <div className="overlay">
          <div className="overlay-background">
            <div className="overlay-content">
              <button className="overlay-close" onClick={closeOverlay}>Close</button>
              {docUrl ? (
                <iframe
                  src={docUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' , zIndex: 1}}
                  title="Google Doc"
                  allowFullScreen="true"
                  allowTransparency="true"
                />
              ) : (
                <p>No document to display</p>
              )}
            </div>
          </div>  
        </div>
      )}
    </>
  );
};

export default ResumeOverlay;