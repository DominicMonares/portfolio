import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Modal from 'react-modal';
import './Shared.css';

// Define modal styles then attach modal to root
const modalStyles = {
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
  // Fetch icon link data
  const [iconLinks, setIconLinks] = useState({ about: [], skills: [] });
  useEffect(() => {
    const fetchData = async () => await fetch('/data/iconLinks');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setIconLinks(data);
      })
      .catch(err => { throw err })
  }, []);

  // Open and close modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={swClass.concat('icon-container')}>
      <button className={swClass.concat('icon-open')} onClick={openModal}>
        Icons by Icons8
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel='Icons Modal'
      >
        <button className={swClass.concat('modal-close')} onClick={closeModal}>
          X
        </button>
        <br />
        <div className={swClass.concat('modal-title')}>Source Links</div>
        <br />
        {iconLinks[page].map(icon => {
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
