import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Icons = () => {
  let subtitle;
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
        style={customStyles}
        contentLabel="Icons Modal"
      >
        <span onClick={closeModal}>X</span>
        <div>
          <a target="_blank" href="https://icons8.com/icon/108784/javascript">JavaScript</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/20909/html-5">Html 5</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/21278/css3">CSS3</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/bzf0DqjXFHIW/react">React</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/jD-fJzVguBmw/redux">Redux</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/41036/audio">Audio</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/hsPbhkOH4FMe/node-js">Node Js</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/74402/mongodb">MongoDB</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/45057/rest-api">Rest API</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/wolE63GuuT9v/auth0-the-solution-you-need-for-web,-mobile,-iot,-and-internal-applications.">Auth0 the solution you need for web, mobile, IoT, and internal applications.</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/bp24DwGXJDyT/jest-can-collect-code-coverage-information-from-entire-projects">Jest can collect code coverage information from entire projects</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/t2x6DtCn5Zzx/nginx">Nginx</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/24895/npm">NPM</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/v-t4czA7zToV/babel">Babel</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/2G0DTGOzcTIP/agile">Agile</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/wE8FqdqblvIz/testing">Testing</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/zfHRZ6i1Wg0U/figma">Figma</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/13674/microsoft-word">Microsoft Word</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/30464/google-docs">Google Docs</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/13654/microsoft-excel">Microsoft Excel</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/30461/google-sheets">Google Sheets</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/81726/microsoft-powerpoint">Microsoft PowerPoint</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/30462/google-slides">Google Slides</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/13677/adobe-photoshop">Adobe Photoshop</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/e57Y1CnsOasB/adobe-premiere-pro">Adobe Premiere Pro</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <div>
          <a target="_blank" href="https://icons8.com/icon/108781/adobe-after-effects">Adobe After Effects</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
        <span>Icons used but not listed here were not sourced from Icons8.</span>
      </Modal>
    </div>
  )
}

export default Icons;
