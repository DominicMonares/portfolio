import React from 'react';
import './Applications.css';

const DemoCaption = ({
  swClass,
  caption,
  youtube,
  updateCurrentSlide
}) => {
  return (
    <div
      className={swClass.concat(
        'demo-caption-container',
        youtube ? '-yt' : '',
      )}
    >
      {swClass ? (
        <button
          className="sw-carousel-arrow"
          onClick={() => updateCurrentSlide('left')}
        >
          &lt;
        </button>
      ) : (
        <div />
      )}
      <span className={swClass.concat('demo-caption')}>
        {caption}
      </span>
      {swClass ? (
        <button
          className="sw-carousel-arrow"
          onClick={() => updateCurrentSlide('right')}
        >
          &gt;
        </button>
      ) : (
        <div />
      )}
    </div>
  );
}

export default DemoCaption;
