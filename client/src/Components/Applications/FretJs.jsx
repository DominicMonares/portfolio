import React from 'react';

import Header from './Header.jsx';
import YoutubeEmbed from './YoutubeEmbed';

const FretJs = () => {
  return (
    <div className="app_container">
      <Header
        app="fretJs"
        desc="An app that lets you write and execute JavaScript using only an electric guitar"
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
