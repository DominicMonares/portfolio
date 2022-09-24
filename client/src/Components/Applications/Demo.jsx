import React from 'react';

const Demo = (props) => {
  const demo = props.demo;
  return (
    <div>
      {demo.mediaType === 'youtube' ?
        <div className="youtube">
          <iframe
            className="youtube_iframe"
            src={demo.media}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div> :
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
      }
    </div>

  );
}

export default Demo;
