import React, { useEffect, useRef } from 'react';

const modalStyles = `
  .video-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s 0.3s linear;
  }
  .video-modal-overlay.open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease;
  }

  .video-modal-content {
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 16px;
    position: relative;
    width: 90%;
    max-width: 900px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    transform: scale(0.9);
    transition: transform 0.3s ease;
  }
  .video-modal-overlay.open .video-modal-content {
    transform: scale(1);
  }

  .video-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    color: white;
  }
  .video-modal-header h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .video-modal-close-btn {
    background: none;
    border: none;
    color: #aaa;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    padding: 0 5px;
    transition: color 0.3s;
  }
  .video-modal-close-btn:hover {
    color: white;
  }

  .video-player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
  }
  .video-player-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function VideoModal({ isOpen, onClose, videoUrl, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // Pause video when modal closes
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <style>{modalStyles}</style>
      <div className={`video-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="video-modal-header">
            <h3>{title}</h3>
            <button className="video-modal-close-btn" onClick={onClose}>×</button>
          </div>
          <div className="video-player-wrapper">
            <video ref={videoRef} src={videoUrl} controls autoPlay />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoModal;