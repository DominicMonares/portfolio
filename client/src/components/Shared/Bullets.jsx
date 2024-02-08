import React from 'react';
import './Shared.css';

const Bullets = ({ swClass, bullets }) => {
  return (
    <div className={swClass.concat('bullets')}>
      {bullets.map(bullet => (
        <div className={swClass.concat('bullet')}>
          •
          <p className={swClass.concat('bullet-text')}>
            {bullet.split('<b>').map((b, i) => (
              i % 2 === 1 ? <b key={b}>{b}</b> : <span key={b}>{b}</span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Bullets;
