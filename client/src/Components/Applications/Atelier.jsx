import React from 'react';

import Header from './Header.jsx';
import fec1 from '../../../../assets/fec1.mp4'
import fec2 from '../../../../assets/fec2.mp4'
import fec3 from '../../../../assets/fec3.mp4'
import fec4 from '../../../../assets/fec4.mp4'

const Atelier = () => {
  return (
    <div className="app_container">
      <Header
        app="Atelier"
        desc="eCommerce application: Q&A widget on product page"
        links={[
          'https://github.com/DominicMonares/fec-atelier'
        ]}
        techs="React, webpack, Babel, Express, Node.js, AWS: EC2, Jest, React Testing Library"
      />
      <div className="demo_container">
        <div className="demo">
          <video className="demo_img_at" width="713px" height="346px" autoplay="autoplay" loop="true" muted="true">
            <source src={fec1} type="video/mp4" />
          </video>
          <span className="demo_caption">
            Dynamically sorting search bar
          </span>
        </div>
      </div>
      <div className="demo_container">
        <div className="demo">
          <video className="demo_img_at" width="664px" height="180px" autoplay="autoplay" loop="true" muted="true">
            <source src={fec2} type="video/mp4" />
          </video>
          <span className="demo_caption">
            Rate helpfulness and flag inappropriate answers for review
          </span>
        </div>
      </div>
      <div className="demo_container">
        <div className="demo">
          <video className="demo_img_at" width="718px" height="378px" autoplay="autoplay" loop="true" muted="true">
            <source src={fec3} type="video/mp4" />
          </video>
          <span className="demo_caption">
            Answer accordion, expandable questions, and infinitely scrolling display
          </span>
        </div>
      </div>
      <div className="demo_container">
        <div className="demo">
          <video className="demo_img_at" width="718px" height="380px" autoplay="autoplay" loop="true" muted="true">
            <source src={fec4} type="video/mp4" />
          </video>
          <span className="demo_caption">
            Answer submission modal and image upload
          </span>
        </div>
      </div>
    </div>
  )
}

export default Atelier;
