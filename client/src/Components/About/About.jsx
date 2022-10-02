import React from 'react';

import Contacts from './Contacts';
import Icons from '../Shared/Icons';
import profile_pic from '../../../../assets/profile_pic.png';
import { about } from '../../../../data/about';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about_body_container">
        <div className="about_body">
          <div>
            <img className="profile_pic" src={profile_pic} width="300px" height="300px" />
          </div>
          <div className="about_text_container">
            {about.map(p => <p className="about_text">{p}</p>)}
          </div>
        </div>
      </div>
      <div className="about_container_underline"></div>
      <Contacts />
      <Icons page="About" />
    </>
  );
}

export default About;
