import React from 'react';

import Header from './Header.jsx';
import fec1 from '../../../../assets/fec1.gif'
import fec2 from '../../../../assets/fec2.gif'
import fec3 from '../../../../assets/fec3.gif'
import fec4 from '../../../../assets/fec4.gif'

const Atelier = () => {
  return (
    <div className="atelier_container">
      <Header
        app="Atelier"
        desc="eCommerce application product page"
        links={[
          'https://github.com/DominicMonares/fec-atelier'
        ]}
        techs="React, WebPack, Babel, Express, Node.js, AWS: EC2, Jest, React Testing Library"
      />
      <div>
        <img src={fec1} width="713px" height="346px" />
        <span className="demo_caption">
          Dynamically sorting search bar
        </span>
      </div>
      <div>
        <img src={fec2} width="443px" height="120px" />
        <span className="demo_caption">
          Rate helpfulness and flag inappropriate answers for review
        </span>
      </div>
      <div>
        <img src={fec3} width="718px" height="378px" />
        <span className="demo_caption">
          Answer accordion, expandable questions, and infinitely scrolling display
        </span>
      </div>
      <div>
        <img src={fec4} width="718px" height="380px" />
        <span className="demo_caption">
          Answer submission modal and image upload
        </span>
      </div>
    </div>
  )
}

export default Atelier;
