import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ApplicationHeader from './ApplicationHeader';
import SubHeader from '../Shared/SubHeader';
import Demo from './Demo';

// Define carousel arrow styles
const carouselColorStyles = {
  inactive: {
    color: '#4d006d',
    borderColor: '#4d006d',
    backgroundColor: '#f1cfff',
  },
  active: {
    color: '#f1cfff',
    borderColor: '#f1cfff',
    backgroundColor: '#4d006d',
  },
}

const carouselArrowStyles = {
  ...carouselColorStyles.inactive,
  position: 'absolute',
  top: 'calc(50% - 15px)',
  zIndex: 2,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 45,
  textAlign: 'center',
  cursor: 'pointer',
};

const carouselLeftArrowStyles = {
  ...carouselArrowStyles,
  marginLeft: -13,
  left: 15,
};

const carouselRightArrowStyles = {
  ...carouselArrowStyles,
  marginRight: -13,
  right: 15,
};

const Application = ({ swClass, app }) => {
  // Change carousel slides
  const [currentSlide, setCurrentSlide] = useState(0);
  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) setCurrentSlide(index)
  }

  // Change carousel styles depending on window size
  const [arrowOpacity, setArrowOpacity] = useState({ left: 0.5, right: 0.5 });
  const [leftArrowStyles, setLeftArrowStyles] = useState(carouselLeftArrowStyles);
  const [rightArrowStyles, setRightArrowStyles] = useState(carouselRightArrowStyles);
  useEffect(() => {
    const width = swClass ? 20 : 40;
    const height = swClass ? 20 : 40;
    const fontSize = swClass ? 13 : 30;
    setLeftArrowStyles({
      ...leftArrowStyles,
      width: width,
      height: height,
      fontSize: fontSize,
      opacity: arrowOpacity.left,
    });
    setRightArrowStyles({
      ...rightArrowStyles,
      width: width,
      height: height,
      fontSize: fontSize,
      opacity: arrowOpacity.right,
    });
  }, [arrowOpacity]);

  return (
    <div className={swClass.concat('application')}>
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
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            className={swClass.concat('carousel-arrow')}
            onClick={onClickHandler}
            onMouseEnter={() => setArrowOpacity({ left: 1.0, right: 0.5 })}
            onMouseLeave={() => {
              setArrowOpacity({ left: 0.5, right: 0.5 });
              setLeftArrowStyles({
                ...leftArrowStyles,
                ...carouselColorStyles.inactive,
              })
            }}
            onMouseDown={() => setLeftArrowStyles({
              ...leftArrowStyles,
              ...carouselColorStyles.active,
            })}
            onMouseUp={() => setLeftArrowStyles({
              ...leftArrowStyles,
              ...carouselColorStyles.inactive,
            })}
            title={label}
            style={leftArrowStyles}
          >
            &lt;
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            className={swClass.concat('carousel-arrow')}
            onClick={onClickHandler}
            onMouseEnter={() => setArrowOpacity({ left: 0.5, right: 1.0 })}
            onMouseLeave={() => {
              setArrowOpacity({ left: 0.5, right: 0.5 });
              setRightArrowStyles({
                ...rightArrowStyles,
                ...carouselColorStyles.inactive,
              })
            }}
            onMouseDown={() => setRightArrowStyles({
              ...rightArrowStyles,
              ...carouselColorStyles.active,
            })}
            onMouseUp={() => setRightArrowStyles({
              ...rightArrowStyles,
              ...carouselColorStyles.inactive,
            })}
            title={label}
            style={rightArrowStyles}
          >
            &gt;
          </button>
        )}
      >
        {app.demos.map((demo, i) => (
          <Demo
            swClass={swClass}
            demo={demo}
            inactive={currentSlide !== i ? '-inactive' : ''}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Application;
