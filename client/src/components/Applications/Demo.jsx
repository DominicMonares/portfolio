import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import media from '../../media';

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

const Demo = ({ swClass, demo, inactive, ytLoading, setYTLoading }) => {
  // Render Loading component until videos fully load
  const [loading, setLoading] = useState(true);
  const endLoading = () => {
    setLoading(false);
    setYTLoading(false);
  }

  // Track media type
  const [mediaType, setMediaType] = useState(demo.mediaType);

  // Update demo size type depending on window size
  const [size, setSize] = useState('reg');
  useEffect(() => {
    swClass ? setSize('small') : setSize('reg');
  });

  // Change styles depending on window size
  const [modalStyles, setModalStyles] = useState(demoModalStyles);
  const [regDims, setRegDims] = useState({ width: 0, height: 0 });
  const [modalDims, setModalDims] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const modalWidth = demo.dims.modal.width;
    const modalHeight = demo.dims.modal.height;
    setModalStyles({
      ...modalStyles,
      maxWidth: modalWidth,
      maxHeight: modalHeight,
    });
    setModalDims({
      width: modalWidth,
      height: modalHeight,
    });
    setRegDims({
      width: demo.dims.reg.width,
      height: demo.dims.reg.height,
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
        {mediaType === 'video/mp4' ? (
          <video
            className={swClass.concat('demo-media-modal')}
            style={{
              maxWidth: modalDims.width,
              maxHeight: modalDims.height,
            }}
            onClick={closeModal}
            autoplay="autoplay"
            loop="true"
            muted="true"
          >
            <source
              src={media['applications'][demo.media]}
              type={demo.mediaType}
            />
          </video>
        ) : (
          <img
            className={swClass.concat('demo-media-modal')}
            src={demo.media}
            onClick={closeModal}
            style={{
              maxWidth: modalDims.width,
              maxHeight: modalDims.height,
            }}
          />
        )}
      </Modal>
      <div
        className={swClass.concat(
          'demo-media-container',
          demo.mediaType === 'youtube' ? '-yt' : ''
        )}
      >
        {loading && mediaType !== 'youtube' ? <div>Loading...</div> : <div />}
        {ytLoading && mediaType === 'youtube' ? <div>Loading...</div> : <div />}
        {demo.mediaType === 'youtube' ? (
          <iframe
            src={demo.media}
            className={swClass.concat('youtube-iframe')}
            style={{
              display: ytLoading ? 'none' : 'inline-block',
              maxWidth: regDims.width,
              maxHeight: regDims.height,
              width: '100%',
              height: '100%',
              marginBottom: 0,
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
              className={swClass.concat('demo-media')}
              style={{
                display: loading ? 'none' : 'flex',
                maxWidth: regDims.width,
                maxHeight: regDims.height,
              }}
              onClick={openModal}
              onLoadedData={endLoading}
              autoplay="autoplay"
              loop="true"
              muted="true"
            >
              <source
                src={media['applications'][demo.media]}
                type={demo.mediaType}
              />
            </video>
          ) : (
            <img
              className={swClass.concat('demo-media')}
              src={demo.media}
              style={{
                display: loading ? 'none' : 'flex',
                maxWidth: regDims.width,
                maxHeight: regDims.height,
              }}
              onClick={openModal}
              onLoadedData={endLoading}
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
