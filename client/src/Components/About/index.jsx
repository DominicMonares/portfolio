import React from 'react';

import Contacts from './Contacts';
import Icons from '../Shared/Icons';
import profile_pic from '../../../../assets/about/profile_pic.png';
import about from '../../../../data/about';
import './About.css';

const About = ({ wide }) => {
  return (
    <div className={wide ? 'w_about_container' : 'm_about_container'}>
      <div>
        <div className={wide ? 'w_about_body_container' : 'm_about_body_container'}>
          <img
            className={wide ? 'w_profile_pic' : 'm_profile_pic'}
            src={profile_pic}
            width='300px'
            height='300px'
          />
          <div className={wide ? 'w_about_text_container' : 'm_about_text_container'}>
            {about.map(p => <p className={wide ? 'w_about_text' : 'm_about_text'}>{p}</p>)}
          </div>
        </div>
        <div className={wide ? 'w_about_container_ul' : 'm_about_container_ul'}></div>
        <Contacts wide={wide} />
      </div>
      <Icons wide={wide} page='About' />
    </div>
  );
}

export default About;
