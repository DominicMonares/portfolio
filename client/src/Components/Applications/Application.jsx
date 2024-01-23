import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Demo from './Demo';

const Application = ({ wide, app }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const mobileDemo = app.demos.every(d => d.dims.web.width < 200);

  const getAppClass = () => {
    if (wide) {
      // return mobileDemo ? 'w_mobile_demo_container' : 'w_web_demo_container';
      return 'w_demo_carousel_container';
    } else {
      return 'm_demo_container';
    }
  }

  const changeSlide = (direction) => {
    if (autoPlay) setAutoPlay(false);
    setCurrentSlide(currentSlide + direction);
  }

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) setCurrentSlide(index)
  }

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

  // autoPlay={autoPlay}
  // interval={6000}

  return (
    <div className={wide ? 'w_app_container' : 'm_app_container'}>
      <Header
        wide={wide}
        title={app.title}
        est={app.desc}
        links={app.links}
        techs={app.techs}
      />
      <SubHeader wide={wide} desc={app.techs} />
      <Carousel
        infiniteLoop={true}
        onChange={updateCurrentSlide}
        selectedItem={currentSlide}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              className="carousel-arrow"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={leftArrowStyles}
            >
              {'<'}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              className="carousel-arrow"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={rightArrowStyles}
            >
              {'>'}
            </button>
          )
        }
      >
        {app.demos.map(demo => <Demo wide={wide} demo={demo} />)}
      </Carousel>
    </div>
  );
}

// <div className="carousel-arrows-container">
//   <div className="carousel-arrow-left" onClick={() => changeSlide(-1)}>
//     {'<'}
//   </div>
//   <div className="carousel-arrow-right" onClick={() => changeSlide(1)}>
//     {'>'}
//   </div>
// </div>
export default Application;
