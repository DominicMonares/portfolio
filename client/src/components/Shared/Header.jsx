import React from 'react';
import './Shared.css';

const Header = ({ swClass, title, est, estLink, location, year }) => {
  return swClass ? (
    <div className="sw-header-container">
      <span className="sw-header-title">{title}</span>
      <span>
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
        <span>&nbsp;|&nbsp;</span>
        <span>{year}</span>
      </span>
    </div>
  ) : (
    <div className="header-container">
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
      <span className="year">{year}</span>
    </div>
  );
}

export default Header;
