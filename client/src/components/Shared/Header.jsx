import React from 'react';
import './Shared.css';

const Header = ({ swClass, title, est, estLink, location, year }) => {
  return swClass ? (
    <div className={swClass.concat('header-container')}>
      <div className='sw-header-title'>{title}</div>
      <div>
        {estLink ? (
          <a
            className={'sw-link'}
            href={estLink}
            target='-blank'
            key={estLink}
          >
            {est}
          </a>
        ) : (
          <span>{est}</span>
        )}
        &nbsp;|&nbsp;
        <span>{location}</span>
        <span>&nbsp;|&nbsp;{year}</span>
      </div>
    </div>
  ) : (
    <div className={swClass.concat('header-container')}>
      <div>
        <span className='header-title'>{title}</span>
        &nbsp;|&nbsp;
        {estLink ? (
          <a
            className={'link'}
            href={estLink}
            target='-blank'
            key={estLink}
          >
            {est}
          </a>
        ) : (
          <span>{est}</span>
        )}
        &nbsp;|&nbsp;
        <span>{location}</span>
      </div>
      <div className='year'>{year}</div>
    </div>
  );
}

export default Header;
