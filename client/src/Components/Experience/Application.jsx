import React from 'react';

const Application = ({ type, links }) => {
  return (
    <div className="app_header_container">
      <span>{type}</span>
      &nbsp;|&nbsp;
      {links.map((link, index) => {
        const notLast = index < links.length - 1;
        return (
          <>
            <a
              className="exp_link"
              href={link.link}
              target="_blank"
              key={link.link}
            >
              {link.title}
            </a>
            {notLast ? <>&nbsp;|&nbsp;</> : <></>}
          </>
        );
      })}
    </div>
  );
}

export default Application;
