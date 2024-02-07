import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import images from '../../images';

// Define modal styles then attach modal to root
const demoModalStyles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    left: '50%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
  },
  overlay: {
    zIndex: 5,
    background: 'rgba(58, 46, 71, 0.75)',
  }
};
Modal.setAppElement('#root');

const Demo = ({ swClass, demo, inactive }) => {
  // Update demo size type depending on window size
  const [size, setSize] = useState('reg');
  useEffect(() => {
    swClass ? setSize('small') : setSize('reg');
  });

  // Change styles depending on window size
  const [modalStyles, setModalStyles] = useState(demoModalStyles);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const [origDims, setOrigDims] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const width = demo['dims'][size]['width'];
    const height = demo['dims'][size]['height'];
    const origWidth = demo.dims.original.width;
    const origHeight = demo.dims.original.height;
    setDims({
      width: width,
      height: height,
    });
    setOrigDims({
      width: origWidth,
      height: origHeight,
    });
    setModalStyles({
      ...modalStyles,
      maxWidth: origWidth,
      maxHeight: origHeight,
    });
  }, [size]);

  // Open and close modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className={swClass.concat('demo', inactive)}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={modalStyles}
        contentLabel="Demo Modal"
      >
        {demo.mediaType === 'video/mp4' ? (
          <video
            className={swClass.concat('demo-media-modal')}
            style={{
              maxWidth: origDims.width,
              maxHeight: origDims.height,
            }}
            onClick={closeModal}
            autoplay="autoplay"
            loop="true"
            muted="true"
          >
            <source src={images['applications'][demo.media]} type={demo.mediaType} />
          </video>
        ) : (
          <img
            className={swClass.concat('demo-media-modal')}
            src={demo.media}
            onClick={closeModal}
            style={{
              maxWidth: origDims.width,
              maxHeight: origDims.height,
            }}
          />
        )}
      </Modal>
      <div className={swClass.concat('demo-media-container')}>
        {demo.mediaType === 'youtube' ? (
          <iframe
            className={swClass.concat('youtube-iframe')}
            style={{
              width: dims.width,
              height: dims.height,
              marginBottom: 0,
              border: "1px solid #4d006d",
              boxSizing: "border-box",
            }}
            src={demo.media}
            allow={`
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture
            `}
            allowFullScreen
            title="Embedded youtube"
          />
        ) : (
          demo.mediaType === 'video/mp4' ? (
            <video
              className={swClass.concat('demo-media')}
              style={{
                width: dims.width,
                height: dims.height,
              }}
              onClick={openModal}
              autoplay="autoplay"
              loop="true"
              muted="true"
            >
              <source
                src={images['applications'][demo.media]}
                type={demo.mediaType}
              />
            </video>
          ) : (
            <img
              className={swClass.concat('demo-media')}
              src={demo.media}
              style={{
                width: dims.width,
                height: dims.height,
              }}
              onClick={openModal}
            />
          )
        )}
        <span className={swClass.concat('demo-caption')}>
          {demo.caption}
        </span>
      </div>
    </div>
  );
}

export default Demo;
