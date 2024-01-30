import React from 'react';

import Contacts from './Contacts';
import Icons from '../Shared/Icons';
import profile_pic from '../../../../assets/about/profile-pic.png';
import about from '../../../../data/about.js';
import './About.css';

const About = ({ swClass }) => {
  return (
    <div>
      <div className={swClass.concat('about-container')}>
        <div className={swClass.concat('about-body-container')}>
          <img
            className={swClass.concat('profile-pic')}
            src={profile_pic}
            width='192px'
            height='192px'
          />
          <div className={swClass.concat('about-text-container')}>
            {about.map(p => <p className={swClass.concat('about-text')}>{p}</p>)}
          </div>
        </div>
        <div className={swClass.concat('about-container-ul')} />
        <Contacts swClass={swClass} />
      </div>
      <Icons swClass={swClass} page='About' />
    </div>
  );
}

export default About;
