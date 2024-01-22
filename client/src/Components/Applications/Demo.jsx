import React from 'react';

const Demo = ({ wide, demo }) => {
  const platform = wide ? 'web' : 'mobile';
  const dims = demo['dims'][platform];

  const youtube = () => {
    return (
      <div className={wide ? 'w_youtube' : 'm_youtube'}>
        <iframe
          className={wide ? 'w_youtube_iframe' : 'm_youtube_iframe'}
          width={dims.width}
          height={dims.height}
          src={demo.media}
          // frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
        <span className={wide ? 'w_demo_caption_yt' : 'm_demo_caption_yt'}>{demo.caption}</span>
      </div>
      
    );
  }

  const picOrVid = () => {
    return (
      <div className={wide ? 'w_demo_container' : 'm_demo_container'}>
        <div className={wide ? 'w_demo' : 'm_demo'}>
          {demo.mediaType === 'video/mp4' ? (
            <video
              className={wide ? 'w_demo_img' : 'm_demo_img'}
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
              className={wide ? 'w_demo_img' : 'm_demo_img'}
              src={demo.media}
              // width={dims.width}
              // height={dims.height}
            />
          )}
          <span className={wide ? 'w_demo_caption' : 'm_demo_caption'}>{demo.caption}</span>
        </div>
      </div>
    );
  }

  return demo.mediaType === 'youtube' ? youtube() : picOrVid();
}

export default Demo;
