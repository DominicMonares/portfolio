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

const Icons = ({ wide, page }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={wide ? 'w_icon_container' : 'm_icon_container'}>
      <span className={wide ? 'w_icon_open' : 'm_icon_open'} onClick={openModal}>
        Icons by Icons8
      </span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel='Icons Modal'
      >
        <div className={wide ? 'w_modal_close' : 'm_modal_close'} onClick={closeModal}>X</div>
        <br />
        <div className={wide ? 'w_modal_title' : 'm_modal_title'}>Source Links</div>
        <br />
        {icons[page].map(icon => {
          return (
            <div className={wide ? 'w_modal_icon_link' : 'm_modal_icon_link'}>
              <a
                className={wide ? 'w_modal_link' : 'm_modal_link'}
                target='_blank'
                href={icon.link}
              >
                {icon.name}
              </a>
              &nbsp;icon by&nbsp;
              <a
                className={wide ? 'w_modal_link' : 'm_modal_link'}
                target='_blank'
                href='https://icons8.com'
              >
                Icons8
              </a>
            </div>
          );
        })}
        <br />
        <div className={wide ? 'w_icon_disclaimer' : 'm_icon_disclaimer'}>
          Icons used but not listed here were not sourced from Icons8.
        </div>
      </Modal>
    </div>
  )
}

export default Icons;
