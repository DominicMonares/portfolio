import React from 'react';

const SubHeader = ({ swClass, desc, links }) => {
  const githubLinks = () => {
    return (
      <div>
        {swClass ? <>&nbsp;|&nbsp;</> : <></>}
        {links.map((link, index) => {
          const notLast = index < links.length - 1;
          return (
            <>
              <a
                className={swClass.concat('sublink')}
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
      </div>
    );
  }

  return (
    <div className={swClass.concat('subheader-container')}>
      <span>{desc}</span>
      {links ? githubLinks() : <></>}
    </div>
  );
}

export default SubHeader;
