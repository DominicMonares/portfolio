import React from 'react';

import './Shared.css';

const Header = ({ title, est, estLink, location, year, links }) => {
  return (
    <div className="header_container">
      <>
        <span className="title">{title}</span>
        &nbsp;|&nbsp;
        {!estLink ?
          <span>{est}</span> :
          <a
            className="link"
            href={estLink}
            target="_blank"
            key={estLink}
          >
            {est}
          </a>
        }
        &nbsp;|&nbsp;
        <span>{location}</span>
      </>
      {links ? links.map((link, index) => {
        const notLast = index < links.length - 1;
        return (
          <>
            <a
              className="link"
              href={link.link}
              target="_blank"
              key={link.link}
            >
              {link.label}
            </a>
            {notLast ? <>&nbsp;|&nbsp;</> : <></>}
          </>
        );
      }) :
      <></>}
      {year ? <span className="year">{year}</span> : <></>}
    </div>
  );
}

export default Header;
