import React from 'react';

import './Shared.css';

export default Header = ({ wide, title, est, estLink, location, year, links }) => {
  return (
    <div className={wide ? 'w_header_container' : 'm_header_container'}>
      <>
        <span className={wide ? 'w_title' : 'm_title'}>{title}</span>
        &nbsp;|&nbsp;
        {!estLink ?
          <span>{est}</span> :
          <a
            className={wide ? 'w_link' : 'm_link'}
            href={estLink}
            target='_blank'
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
              className={wide ? 'w_link' : 'm_link'}
              href={link.link}
              target='_blank'
              key={link.link}
            >
              {link.label}
            </a>
            {notLast ? <>&nbsp;|&nbsp;</> : <></>}
          </>
        );
      }) :
      <></>}
      {year ? <span className={wide ? 'w_year' : 'm_year'}>{year}</span> : <></>}
    </div>
  );
}
