import React from 'react';
import Modal from 'react-modal';

import icons from '../../../../data/icons';
import './Shared.css';

const modalStyles = { // Modal styling must be separate from css file
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'solid',
    borderWidth: '3px',
    borderColor: '#3A2E47'
  },
  overlay: {
    background: 'rgba(58, 46, 71, 0.75)'
  }
};

Modal.setAppElement('#root');

const Icons = ({ page }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="icon_container">
      <span className="icon_open" onClick={openModal}>Icons by Icons8</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Icons Modal"
      >
        <div className="modal_close" onClick={closeModal}>X</div>
        <br />
        <div className="modal_title">Source Links</div>
        <br />
        {icons[page].map(icon => {
          return (
            <div className="modal_icon_link">
              <a className="modal_link" target="_blank" href={icon.link}>{icon.name}</a>
              &nbsp;icon by&nbsp;
              <a className="modal_link" target="_blank" href="https://icons8.com">Icons8</a>
            </div>
          );
        })}
        <br />
        <div className="modal_icon_disclaimer">Icons used but not listed here were not sourced from Icons8.</div>
      </Modal>
    </div>
  )
}

export default Icons;