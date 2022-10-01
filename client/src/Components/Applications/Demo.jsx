import React from 'react';

const Demo = ({ demo }) => {
  const smallWidth = demo.dims.web.width < 200;

  const youtube = () => {
    return (
      <div className="youtube">
        <iframe
          className="youtube_iframe"
          src={demo.media}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }

  const video = () => {
    return (
      <div className="demo_container">
        <div className="demo">
          <video
            className="demo_img"
            width={demo.dims.web.width}
            height={demo.dims.web.height}
            autoplay="autoplay"
            loop="true"
            muted="true"
          >
            <source src={demo.media} type={demo.mediaType} />
          </video>
          <span className="demo_caption">{demo.caption}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {demo.mediaType === 'youtube' ? youtube() : video()}
    </div>
  );
}

export default Demo;
