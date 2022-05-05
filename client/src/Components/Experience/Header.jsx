import React from 'react';

const Header = (props) => {
  return (
    <div className="exp_header_container">
      <div>
        <span className="exp_title">{props.title}</span>
        &nbsp;|&nbsp;
        <span className="exp_company">{props.company}</span>
        &nbsp;|&nbsp;
        <span className="exp_location">{props.location}</span>
      </div>
      <span className="exp_year">{props.year}</span>
    </div>
  )
}

export default Header;
