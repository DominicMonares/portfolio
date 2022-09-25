import React from 'react';

const SubHeader = ({ desc, links }) => {
  return (
    <div className="app_header_container">
      <span>{desc}</span>
      {links ?
        <>
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
                  {link.label}
                </a>
                {notLast ? <>&nbsp;|&nbsp;</> : <></>}
              </>
            );
          })}
        </> :
        <></>
      }
    </div>
  );
}

export default SubHeader;
