import React from 'react';

const Demo = ({ swClass, demo }) => {
  const dims = demo['dims'][swClass ? 'web' : 'mobile'];

  const youtube = () => {
    return (
      <div className={swClass.concat('youtube')}>
        <iframe
          className={swClass.concat('youtube-iframe')}
          width={dims.width}
          height={dims.height}
          src={demo.media}
          // frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
        <span className={swClass.concat(('demo-caption-yt'))}>{demo.caption}</span>
      </div>
    );
  }

  const picOrVid = () => {
    return (
      <div className={swClass.concat('demo-container')}>
        <div className={swClass.concat('demo')}>
          {demo.mediaType === 'video/mp4' ? (
            <video
              className={swClass.concat('demo-img')}
              width={dims.width}
              height={dims.height}
              autoplay='autoplay'
              loop='true'
              muted='true'
            >
              <source src={demo.media} type={demo.mediaType} />
            </video>
          ) : (
            <img
              className={swClass.concat(('demo-img'))}
              src={demo.media}
              // width={dims.width}
              // height={dims.height}
            />
          )}
          <span className={swClass.concat('demo-caption')}>{demo.caption}</span>
        </div>
      </div>
    );
  }

  return demo.mediaType === 'youtube' ? youtube() : picOrVid();
}

export default Demo;
