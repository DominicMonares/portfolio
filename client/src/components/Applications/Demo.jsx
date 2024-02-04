import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import images from '../../images';

// Define modal styles then attach modal to root
const modalStyles = {
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

  // Update dimensions and modal styles
  const [regDims, setRegDims] = useState({ width: 0, height: 0 });
  const [origDims, setOrigDims] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setRegDims({
      width: demo['dims'][size]['width'],
      height: demo['dims'][size]['height'],
    });

    const origWidth = demo.dims.original.width;
    const origHeight = demo.dims.original.height;
    modalStyles.content.maxWidth = origWidth;
    modalStyles.content.maxHeight = origHeight;
    setOrigDims({
      width: origWidth,
      height: origHeight,
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
    <div
      className={swClass.concat('demo-container', inactive)}
      onClick={openModal}
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={modalStyles}
        contentLabel="Demo Modal"
      >
        <div className={swClass.concat('demo-modal-container')} onClick={closeModal}>
          {demo.mediaType === 'youtube' ? (
            <iframe
              className={swClass.concat('youtube-iframe-modal')}
              src={demo.media}
              style={{
                maxWidth: origDims.width,
                maxHeight: origDims.height,
              }}
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
                className={swClass.concat('demo-media-modal')}
                style={{
                  maxWidth: origDims.width,
                  maxHeight: origDims.height,
                }}
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
                style={{
                  maxWidth: origDims.width,
                  maxHeight: origDims.height,
                }}
              />
            )
          )}
        </div>
      </Modal>
      {demo.mediaType === 'youtube' ? (
        <div className={swClass.concat('youtube')}>
          <iframe
            className={swClass.concat('youtube-iframe')}
            style={{
              width: regDims.width,
              height: regDims.height,
              border: "1px solid #4d006d",
              boxSizing: "content-box",
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
          <span className={swClass.concat('youtube-demo-caption')}>{demo.caption}</span>
        </div>
      ) : (
        <div className={swClass.concat('demo')}>
          {demo.mediaType === 'video/mp4' ? (
            <video
              className={swClass.concat('demo-media')}
              style={{
                width: regDims.width,
                height: regDims.height,
              }}
              autoplay="autoplay"
              loop="true"
              muted="true"
            >
              <source src={images['applications'][demo.media]} type={demo.mediaType} />
            </video>
          ) : (
            <img
              className={swClass.concat('demo-media')}
              src={demo.media}
              style={{
                width: regDims.width,
                height: regDims.height,
              }}
            />
          )}
          <span className={swClass.concat('demo-caption')}>{demo.caption}</span>
        </div>
      )}
    </div>
  );
}

export default Demo;
