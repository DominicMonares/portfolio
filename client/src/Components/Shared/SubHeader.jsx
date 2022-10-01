import React from 'react';

const SubHeader = ({ desc, links }) => {
  return (
    <div className="subheader_container">
      <span>{desc}</span>
      {links ?
        <>
          &nbsp;|&nbsp;
          {links.map((link, index) => {
            const notLast = index < links.length - 1;
            return (
              <>
                <a
                  className="sublink"
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
