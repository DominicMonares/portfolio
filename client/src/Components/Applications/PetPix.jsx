import React from 'react';

import Header from './Header.jsx';
import petpix1 from '../../../../assets/petpix1.mp4';
import petpix2 from '../../../../assets/petpix2.mp4';
import petpix3 from '../../../../assets/petpix3.mp4';
import petpix4 from '../../../../assets/petpix4.mp4';

const PetPix = () => {
  return (
    <div className="app_container">
      <Header
        app="PetPix"
        desc="Social media application centered around pet pictures"
        links={[
          'https://github.com/DominicMonares/BOC',
          'https://github.com/DominicMonares/backend'
        ]}
        techs="React Native, Expo, Redux, Express, MongoDB, Passport.js, Nodemailer, Jest, React Native Testing Library"
      />
      <div className="demo_container">
        <div className="demo">
          <div className="demo_img_container">
            <video className="demo_img" width="177px" height="356px" autoplay="autoplay" loop="true" muted="true">
              <source src={petpix1} />
            </video>
            <video className="demo_img" width="177px" height="356px" autoplay="autoplay" loop="true" muted="true">
              <source src={petpix2} />
            </video>
          </div>
          <span className="demo_caption">
            Authentication flow that I was responsible for
          </span>
        </div>
        <div className="demo">
          <div className="demo_img_container">
            <video className="demo_img" width="177px" height="356px" autoplay="autoplay" loop="true" muted="true">
              <source src={petpix3} />
            </video>
            <video className="demo_img" width="177px" height="356px" autoplay="autoplay" loop="true" muted="true">
              <source src={petpix4} />
            </video>
          </div>
          <span className="demo_caption">UI that I designed.</span>
          <span className="demo_subcaption">
            <b>*Note*</b>&nbsp;
            Fonts were requested by the client, Comic Sans wasn't my call :P
          </span>
        </div>
      </div>
    </div>
  )
}

export default PetPix;
