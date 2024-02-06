import React, { useEffect, useState } from 'react';
import regeneratorRuntime from 'regenerator-runtime';
import Contacts from './Contacts';
import Icons from '../Shared/Icons';
import profile_pic from '../../../../assets/about/profile-pic.png';
import './About.css';

const About = ({ swClass }) => {
  // Fetch personal summary data
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const fetchData = async () => await fetch('/data/about');
    fetchData()
      .then(async res => {
        const data = await res.json();
        setAbout(data);
      })
      .catch(err => { throw err })
  }, []);

  return (
    <div className={swClass.concat('about')}>
      <div className={swClass.concat('about-body-container')}>
        <div className={swClass.concat('about-body')}>
          <img
            className={swClass.concat('profile-pic')}
            src={profile_pic}
            width="192px"
            height="192px"
          />
          <div className={swClass.concat('about-text-container')}>
            {about.map(p => <p className={swClass.concat('about-text')}>{p}</p>)}
          </div>
        </div>
        <div className={swClass.concat('about-body-ul')} />
        <Contacts swClass={swClass} />
      </div>
      <Icons swClass={swClass} page="about" />
    </div>
  );
}

export default About;
