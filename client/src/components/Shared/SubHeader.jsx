import React from 'react';

const SubHeader = ({ swClass, desc, links }) => {
  return (
    <div className={swClass.concat('subheader-container')}>
      <span>{desc}</span>
      {links ? (
        <span>
          {swClass ? <span /> : <span>&nbsp;|&nbsp;</span>}
          {links.map((l, i) => (
            <span>
              <a
                className={swClass.concat('subheader-link')}
                href={l.link}
                target="_blank"
                key={l.link}
              >
                {l.label}
              </a>
              {i < links.length - 1 ? (
                <span>&nbsp;|&nbsp;</span>
              ) : (
                <span />
              )}
            </span>
          ))}
        </span>
      ) : (
        <span />
      )}
    </div>
  );
}

export default SubHeader;
