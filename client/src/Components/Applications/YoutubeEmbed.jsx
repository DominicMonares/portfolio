import React from 'react';

const YoutubeEmbed = ({ embedId }) => (
  <div className="youtube">
    <iframe
      width="960"
      height="540"
      src={`https://www.youtube.com/embed/QHJy7SKRfSE`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

export default YoutubeEmbed;
