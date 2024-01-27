import React from 'react';
import { useLocation } from 'react-router-dom';

import './Shared.css';

const Header = ({ wide, title, est, estLink, location, year, links }) => {
  const routeLocation = useLocation();
  const route = routeLocation.pathname;

  /* General */

  const description = () => { // used for description and establishment
    if (estLink) {
      return (
        <a
          className={wide ? 'w_link' : 'm_link'}
          href={estLink}
          target='_blank'
          key={estLink}
        >
          {est}
        </a>
      );
    } else {
      return <span>{est}</span>
    }
  }

  const githubLinks = () => {
    return links.map((link, index) => {
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
    });
  }


  /* Web Render */

  const web = () => {
    return (
      <>
        <>
          <span className='w_header_title'>{title}</span>
          &nbsp;|&nbsp;
          {description()}
          &nbsp;|&nbsp;
          <span>{location}</span>
        </>
        {links ? githubLinks() : <></>}
        {year ? <span className='w_year'>{year}</span> : <></>}
      </>
    );
  }


  /* Mobile Render */

  const applications = () => {
    return (
      <>
        <div>
          <span className='m_header_title'>{title}</span>
          &nbsp;|&nbsp;
          {links ? githubLinks() : <></>}
        </div>
        <div className="m_description">{description()}</div>
      </>
    );
  }

  const credentials = () => { // used for experience and education
    return (
      <>
        <span className='m_header_title'>{title}</span>
        <div>
          {description()}
          &nbsp;|&nbsp;
          <span>{location}</span>
          {year ? <>&nbsp;|&nbsp;{year}</> : <></>}
        </div>
        {links ? githubLinks() : <></>}
      </>
    );
  }

  const mobile = () => <>{route === '/apps' ? applications() : credentials()}</>

  return (
    <div className={wide ? 'w_header_container' : 'm_header_container'}>
      {wide ? web() : mobile()}
    </div>
  );
}

export default Header;
