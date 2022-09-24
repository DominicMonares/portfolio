import React from 'react';

const Header = ({ title, company, location, year }) => {
  return (
    <div className="exp_header_container">
      <div>
        <span className="exp_title">{title}</span>
        &nbsp;|&nbsp;
        <span className="exp_company">{company}</span>
        &nbsp;|&nbsp;
        <span className="exp_location">{location}</span>
      </div>
      <span className="exp_year">{year}</span>
    </div>
  );
}

export default Header;
