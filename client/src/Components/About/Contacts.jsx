import React from 'react';

import gmail from '../../../../assets/icons8-gmail-144.png';
import linkedIn from '../../../../assets/icons8-linkedin-144.png';
import gitHub from '../../../../assets/GitHub-Mark-120px-plus.png';

const Contacts = () => {
  return (
    <div className="contacts_container">
      <div className="contact">
        <a
          className="contact_link"
          href="https://dominicsmonares@gmail.com"
          target="_blank"
        >
          <img src={gmail} width="53px" height="40px" />
          <div className="contact_link">
            dominicsmonares@gmail.com
          </div>
        </a>
      </div>
      <div className="contact">
        <a
          className="contact_link"
          href="https://linkedin.com/in/dominic-monares/"
          target="_blank"
        >
          <img src={linkedIn} width="40px" height="40px" />
          <div className="contact_link">
            linkedin.com/in/dominic-monares/
          </div>
        </a>
      </div>
      <div className="contact">
        <a
          className="contact_link"
          href="https://github.com/DominicMonares"
          target="_blank"
        >
          <img src={gitHub} width="40px" height="40px" />
          <div className="contact_link">
            github.com/DominicMonares
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
