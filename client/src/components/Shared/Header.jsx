import React from 'react';
import './Shared.css';

const Header = ({ swClass, title, est, estLink, location, year }) => {
  return swClass ? (
    <div className="sw-header">
      <div className="sw-header-top-container">
        <span className="sw-header-title">
          {title.includes(' Immersive') || title.includes(' Marketing') ? (
            // Shortened title workaround
            title.replace(' Immersive', '').replace(' Marketing', '')
          ) : (
            title
          )}
        </span>
        <span className="sw-header-year">{year}</span>
      </div>
      <div className="sw-header-bottom-container">
        {estLink ? (
          <a
            className="sw-header-link"
            href={estLink}
            target="-blank"
            key={estLink}
          >
            {est}
          </a>
        ) : (
          <span>{est}</span>
        )}
        <span>&nbsp;|&nbsp;</span>
        <span>{location}</span>
      </div>
    </div>
  ) : (
    <div className="header">
      <span>
        <span className="header-title">{title}</span>
        <span>&nbsp;|&nbsp;</span>
        {estLink ? (
          <a
            className={"header-link"}
            href={estLink}
            target='-blank'
            key={estLink}
          >
            {est}
          </a>
        ) : (
          <span>{est}</span>
        )}
        <span>&nbsp;|&nbsp;</span>
        <span>{location}</span>
      </span>
      <span className="header-year">{year}</span>
    </div>
  );
}

export default Header;
