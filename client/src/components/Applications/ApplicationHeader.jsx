import React from 'react';
import './Applications.css';

const ApplicationHeader = ({ swClass, title, desc, links }) => {
  return (
    <div className={swClass.concat('application-header')}>
      <span className={swClass.concat('application-header-title')}>
        {title}
      </span>
      <span>&nbsp;|&nbsp;</span>
      <span>{desc}</span>
      <span>&nbsp;|&nbsp;</span>
      {links.map((a, i) => (
        <span>
          <a
            className={swClass.concat('application-header-link')}
            href={a.link}
            target="_blank"
            key={a.link}
          >
            {a.label}
          </a>
          {i < links.length - 1 ? (
            <span>&nbsp;|&nbsp;</span>
          ) : (
            <span />
          )}
        </span>
      ))}
    </div>
  );
}

export default ApplicationHeader;
