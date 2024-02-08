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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 'calc(50% - 15px)',
  zIndex: 2,
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 45,
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
  // Render Loading component until videos loaded
  // Hacky workaround for YouTube iframe
  const [ytLoading, setYTLoading] = useState(true);

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
  }, [arrowOpacity, swClass]);

  // Change carousel arrow styles on event
  const updateArrowStyle = (side, active) => {
    const activeStyles = active
      ? carouselColorStyles.active
      : carouselColorStyles.inactive;
    if (side === 'left') {
      setArrowOpacity({
        left: active ? 1.0 : 0.5,
        right: 0.5,
      });
      setLeftArrowStyles({
        ...leftArrowStyles,
        ...activeStyles,
      });
    } else {
      setArrowOpacity({
        left: 0.5,
        right: active ? 1.0 : 0.5,
      });
      setRightArrowStyles({
        ...rightArrowStyles,
        ...activeStyles,
      });
    }
  }

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
          <div
            className={swClass.concat('carousel-arrow')}
            onClick={onClickHandler}
            onMouseDown={() => updateArrowStyle('left', true)}
            onTouchStart={() => updateArrowStyle('left', true)}
            onMouseUp={() => updateArrowStyle('left', false)}
            onTouchEnd={() => updateArrowStyle('left', false)}
            title={label}
            style={leftArrowStyles}
          >
            &lt;
          </div>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <div
            className={swClass.concat('carousel-arrow')}
            onClick={onClickHandler}
            onMouseDown={() => updateArrowStyle('right', true)}
            onTouchStart={() => updateArrowStyle('right', true)}
            onMouseUp={() => updateArrowStyle('right', false)}
            onTouchEnd={() => updateArrowStyle('right', false)}
            title={label}
            style={rightArrowStyles}
          >
            &gt;
          </div>
        )}
      >
        {app.demos.map((demo, i) => (
          <Demo
            swClass={swClass}
            demo={demo}
            inactive={currentSlide !== i ? '-inactive' : ''}
            ytLoading={ytLoading}
            setYTLoading={setYTLoading}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Application;
