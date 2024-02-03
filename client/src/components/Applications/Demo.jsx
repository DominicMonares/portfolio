import React, { useEffect, useState } from 'react';
import images from '../../images';

const Demo = ({ swClass, demo, inactive }) => {
  // Update demo dimensions depending on window size
  const [size, setSize] = useState('reg');
  useEffect(() => {
    swClass ? setSize('small') : setSize('reg');
  });

  return (
    <div className={swClass.concat('demo-container', inactive ? '-inactive' : '')}>
      {demo.mediaType === 'youtube' ? (
        <div className={swClass.concat('youtube')}>
          <iframe
            className={swClass.concat('youtube-iframe')}
            width={demo['dims'][size]['width']}
            height={demo['dims'][size]['height']}
            src={demo.media}
            // frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
          <span className={swClass.concat(('youtube-demo-caption'))}>{demo.caption}</span>
        </div>
      ) : (
        <div className={swClass.concat('demo')}>
          {demo.mediaType === 'video/mp4' ? (
            <video
              className={swClass.concat('demo-media')}
              width={demo['dims'][size]['width']}
              height={demo['dims'][size]['height']}
              autoplay='autoplay'
              loop='true'
              muted='true'
            >
              <source src={images['applications'][demo.media]} type={demo.mediaType} />
            </video>
          ) : (
            <img
              className={swClass.concat(('demo-media'))}
              src={demo.media}
              width={demo['dims'][size]['width']}
              height={demo['dims'][size]['height']}
            />
          )}
          <span className={swClass.concat('demo-caption')}>{demo.caption}</span>
        </div>
      )}
    </div>
  );
}

export default Demo;
