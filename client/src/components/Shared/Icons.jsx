import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Modal from 'react-modal';
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
    borderColor: '#3A2E47',
  },
  overlay: {
    background: 'rgba(58, 46, 71, 0.75)',
    zIndex: 5
  }
};

Modal.setAppElement('#root');

const Icons = ({ swClass, page }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [icons, setIcons] = useState({});

  useEffect(() => {
    const fetchData = async () => await fetch('/data/iconLinks');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setIcons(data);
      })
      .catch(err => { throw err })
  }, []);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={swClass.concat('icon-container')}>
      <span className={swClass.concat('icon-open')} onClick={openModal}>
        Icons by Icons8
      </span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel='Icons Modal'
      >
        <div className={swClass.concat('modal-close')} onClick={closeModal}>X</div>
        <br />
        <div className={swClass.concat('modal-title')}>Source Links</div>
        <br />
        {icons[page].map(icon => {
          return (
            <div className={swClass.concat('modal-icon-link')}>
              <a
                className={swClass.concat('modal-link')}
                target='_blank'
                href={icon.link}
              >
                {icon.name}
              </a>
              &nbsp;icon by&nbsp;
              <a
                className={swClass.concat('modal-link')}
                target='_blank'
                href='https://icons8.com'
              >
                Icons8
              </a>
            </div>
          );
        })}
        <br />
        <div className={swClass.concat('icon-disclaimer')}>
          Icons used but not listed here were not sourced from Icons8.
        </div>
      </Modal>
    </div>
  )
}

export default Icons;
