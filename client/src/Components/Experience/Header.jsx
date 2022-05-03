import React from 'react';

const Header = (props) => {
  return (
    <div className="header_container">
      <span className="title_text">{props.title}</span>
      <span className="company_text">{props.company}</span>
      <span className="location_text">{props.location}</span>
      <span className="year_text">{props.year}</span>
    </div>
  )
}

export default Header;
