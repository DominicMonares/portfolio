import React from 'react';

import photoshop from '../../../../assets/icons8-adobe-photoshop-48.png';
import premiere from '../../../../assets/icons8-adobe-premiere-pro-48.png';
import afterEffects from '../../../../assets/icons8-adobe-after-effects-48.png';
import ebsynth from '../../../../assets/ebsynth.png';
import cubase from '../../../../assets/cubase.png';

const Media = () => {
  return (
    <div className="media_container">
      <span className="skill_title">Media</span>
      <div className="skill_container">
        <div className="tool">
          <span className="tool_text">Adobe Photoshop</span>
          <img src={photoshop} width="50px" height="50px" />
        </div>
        <div className="tool">
          <span className="tool_text">Adobe Premiere</span>
          <img src={premiere} width="50px" height="50px" />
        </div>
        <div className="tool">
          <span className="tool_text">Adobe After Effects</span>
          <img src={afterEffects} width="50px" height="50px" />
        </div>
        <div className="tool">
          <span className="tool_text">Ebsynth</span>
          <img src={ebsynth} width="44px" height="44px" />
        </div>
        <div className="tool">
          <span className="tool_text">Cubase</span>
          <img src={cubase} width="46px" height="46px" />
        </div>
      </div>
    </div>
  );
}

export default Media;
