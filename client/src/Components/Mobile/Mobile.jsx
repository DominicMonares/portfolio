import React from 'react';

import Icons from '../About/Icons';

import gmail from '../../../../assets/icons8-gmail-144.png';
import linkedIn from '../../../../assets/icons8-linkedin-144.png';
import gitHub from '../../../../assets/GitHub-Mark-120px-plus.png';

const Mobile = () => {
  return (
    <div className="mobile">
      <div className="mobile_titles">
        <h1 className="title_mobile">Dominic Monares</h1>
        <h3 className="subtitle_mobile">Full-Stack Software Engineer</h3>
      </div>
      <div className="mobile_container">
        <div className="mobile_header_container">
          <span className="mobile_header">Mobile browsers are currently unsupported {':('}</span>
          <span className="mobile_header">Please revisit on a desktop or visit:</span>
        </div>
        <div className="mobile_contact_container">
          <div className="mobile_contact">
            <a className="mobile_contact_link" href="https://dominicsmonares@gmail.com">
              <img src={gmail} width="26px" height="20px" />
              <div className="mobile_contact_link_text">
                dominicsmonares@gmail.com
              </div>
            </a>
          </div>
          <div className="mobile_contact">
            <a className="mobile_contact_link" href="https://linkedin.com/in/dominic-monares/">
              <img src={linkedIn} width="20px" height="20px" />
              <div className="mobile_contact_link_text">
                linkedin.com/in/dominic-monares/
              </div>
            </a>
          </div>
          <div className="mobile_contact">
            <a className="mobile_contact_link" href="https://github.com/DominicMonares">
              <img src={gitHub} width="20px" height="20px" />
              <div className="mobile_contact_link_text">
                github.com/DominicMonares
              </div>
            </a>
          </div>
        </div>
        <Icons />
      </div>
    </div>
  );
}

export default Mobile;