import React from 'react';

const SubHeader = ({ wide, desc, links }) => {
  return (
    <div className={wide ? 'w_subheader_container' : 'm_subheader_container'}>
      <span>{desc}</span>
      {links ?
        <>
          &nbsp;|&nbsp;
          {links.map((link, index) => {
            const notLast = index < links.length - 1;
            return (
              <>
                <a
                  className={wide ? 'w_sublink' : 'm_sublink'}
                  href={link.link}
                  target='_blank'
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
