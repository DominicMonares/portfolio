import React from 'react';

import Contacts from './Contacts';
import Icons from './Icons';
import profile_pic from '../../../../assets/profile_pic.png';

const About = () => {
  return (
    <div className="about_container">
      <div className="about_body_container">
        <div className="about_body">
          <div>
            <img className="profile_pic" src={profile_pic} width="300px" height="300px" />
          </div>
          <div className="about_text_container">
            <p className="about_text">
              Hi! I’m a problem solver who specializes in full-stack
              software engineering. At my core, I’m someone who loves making
              and fixing things. From learning how to code through Hack Reactor
              to teaching myself how to create rotoscope animations, if I’m
              passionate about something, I can accomplish my goals and exceed
              expectations. I believe that with the right amount of creativity, even
              the most mundane things can be made exciting and impactful.
            </p>
            <p className="about_text_bottom">
              I enjoy playing guitar, bass, drums, and piano, creating rotoscope animations,
              creating mods for video games, and luthiery in
              my spare time.
            </p>
          </div>
        </div>
      </div>
      <div className="about_container_underline"></div>
      <Contacts />
      <Icons />
    </div>
  );
}

export default About;
