import React from 'react';

const Header = ({ title, est, estLink, location, year }) => {
  return (
    <div className="exp_header_container">
      <div>
        <span className="exp_title">{title}</span>
        &nbsp;|&nbsp;
        {!estLink ?
          <span className="exp_company">{est}</span> :
          <a
            className="exp_link"
            href={estLink}
            target="_blank"
            key={estLink}
          >
            {est}
          </a>
        }
        &nbsp;|&nbsp;
        <span className="exp_location">{location}</span>
      </div>
      <span className="exp_year">{year}</span>
    </div>
  );
}

export default Header;
