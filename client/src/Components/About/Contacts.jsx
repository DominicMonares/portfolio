import React from 'react';

import gmail from '../../../../assets/icons8-gmail-144.png';
import linkedIn from '../../../../assets/icons8-linkedin-144.png';
import gitHub from '../../../../assets/GitHub-Mark-120px-plus.png';

const Contacts = () => {
  return (
    <div className="contacts_container">
      <div className="contact">
        <img src={gmail}  width="53px" height="40px"/>
        <a className="contact_link" href="https://dominicsmonares@gmail.com">
          dominicsmonares@gmail.com
        </a>
      </div>
      <div className="contact">
        <img src={linkedIn} width="40px" height="40px"/>
        <a className="contact_link" href="https://linkedin.com/in/dominic-monares/">
          linkedin.com/in/dominic-monares/
        </a>
      </div>
      <div className="contact">
        <img src={gitHub} width="40px" height="40px"/>
        <a className="contact_link" href="https://github.com/DominicMonares">
          github.com/DominicMonares
        </a>
      </div>
    </div>
  );
}

export default Contacts;
