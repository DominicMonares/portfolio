import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ApplicationHeader from './ApplicationHeader';
import SubHeader from '../Shared/SubHeader';
import Demo from './Demo';

// Define carousel arrow styles
const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 40,
  height: 40,
  cursor: 'pointer',
  fontSize: 30,
  color: '#4d006d',
  backgroundColor: '#f1cfff',
  border: '#4d006d',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 45,
  textAlign: 'center',
  opacity: 0.5,
  transition: 'scale 0.20s',
};
const leftArrowStyles = {
  ...arrowStyles,
  marginLeft: -13,
  left: 15,
};
const rightArrowStyles = {
  ...arrowStyles,
  marginRight: -13,
  right: 15,
};

const Application = ({ swClass, app }) => {
  // Change carousel slides
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) setCurrentSlide(index)
  }

  const updateCurrentSlideSW = (direction) => {
    const dLengthMax = app.demos.length - 1;
    let prev = currentSlide - 1 < 0 ? dLengthMax : currentSlide - 1;
    let next = currentSlide + 1 > dLengthMax ? 0 : currentSlide + 1;
    setCurrentSlide(direction === 'right' ? next : prev);
  }

  return (
    <div className={swClass.concat('application-container')}>
      <ApplicationHeader
        swClass={swClass}
        title={app.title}
        desc={app.desc}
        links={app.links}
      />
      <SubHeader swClass={swClass} desc={app.techs} />
      <Carousel
        infiniteLoop={true}
        onChange={updateCurrentSlide}
        selectedItem={currentSlide}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          hasPrev && swClass ? (
            <div />
          ) : (
            <button
              className="carousel-arrow"
              onClick={onClickHandler}
              title={label}
              style={leftArrowStyles}
            >
              &lt;
            </button>
          )
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          hasNext && swClass ? (
            <div />
          ) : (
            <button
              className="carousel-arrow"
              onClick={onClickHandler}
              title={label}
              style={rightArrowStyles}
            >
              &gt;
            </button>
          )
        )}
      >
        {app.demos.map((demo, i) => (
          <Demo
            swClass={swClass}
            demo={demo}
            updateCurrentSlide={updateCurrentSlideSW}
            inactive={currentSlide !== i ? '-inactive' : ''}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Application;
