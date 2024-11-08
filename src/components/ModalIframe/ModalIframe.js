import React from 'react';
import './ModalIframe.scss';

const ModalIframe = ({ visible, onClose, iframeUrl }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>Close</div>
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Iframe Content"
        />
      </div>
    </div>
  );
};

export default ModalIframe;