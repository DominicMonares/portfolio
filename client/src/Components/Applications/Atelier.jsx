import React from 'react';

import Header from './Header.jsx';
import fec1 from '../../../../assets/fec1.gif'
import fec2 from '../../../../assets/fec2.gif'
import fec3 from '../../../../assets/fec3.gif'
import fec4 from '../../../../assets/fec4.gif'

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
          <img className="demo_img_at" src={fec1} width="713px" height="346px" />
          <span className="demo_caption">
            Dynamically sorting search bar
          </span>
        </div>
      </div>
      <div className="demo_container">
        <div className="demo">
          <img className="demo_img_at" src={fec2} width="664px" height="180px" />
          <span className="demo_caption">
            Rate helpfulness and flag inappropriate answers for review
          </span>
        </div>
      </div>
      <div className="demo_container">
        <div className="demo">
          <img className="demo_img_at" src={fec3} width="718px" height="378px" />
          <span className="demo_caption">
            Answer accordion, expandable questions, and infinitely scrolling display
          </span>
        </div>
      </div>
      <div className="demo_container">
        <div className="demo">
          <img className="demo_img_at" src={fec4} width="718px" height="380px" />
          <span className="demo_caption">
            Answer submission modal and image upload
          </span>
        </div>
      </div>
    </div>
  )
}

export default Atelier;
