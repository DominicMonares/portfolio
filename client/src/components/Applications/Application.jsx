import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from '../Shared/Header';
import SubHeader from '../Shared/SubHeader';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Demo from './Demo';

const Application = ({ swClass, app }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div className={swClass.concat('application-container')}>
      <Header
        swClass={swClass}
        title={app.title}
        est={app.desc}
        links={app.links}
        techs={app.techs}
      />
      <SubHeader swClass={swClass} desc={app.techs} />
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
        {app.demos.map(demo => <Demo swClass={swClass} demo={demo} />)}
      </Carousel>
    </div>
  );
}

export default Application;
