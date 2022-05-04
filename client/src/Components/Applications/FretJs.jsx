import React from 'react';

import Header from './Header.jsx';
import YoutubeEmbed from './YoutubeEmbed';

const FretJs = () => {
  return (
    <div className="fretjs_container">
      <Header
        app="fretJs (WIP)"
        desc="An app that lets you write and execute JS using only an electric guitar"
        links={[
          'https://github.com/DominicMonares/fec-atelier'
        ]}
        techs="React, Express, Web Audio API"
      />
      <YoutubeEmbed />
    </div>
  )
}

export default FretJs;
