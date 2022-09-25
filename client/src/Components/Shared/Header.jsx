import React from 'react';

import './Shared.css';

const Header = ({ title, est, estLink, location, year }) => {
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
      {year ? <span className="year">{year}</span> : <></>}
    </div>
  );
}

export default Header;
