import React from 'react';

import './Shared.css';

const Bullets = ({ bullets }) => {
  const bold = (bullet) => {
    const splitBullet = bullet.split('<b>');
    let odd = true;
    return splitBullet.map(b => {
      if (odd) {
        odd = false;
        return <span key={b}>{b}</span>
      }

      odd = true;
      return <b key={b}>{b}</b>
    });
  }

  return (
    <div className="exp_bullet_container">
      {bullets.map(bullet => {
        return (
          <div className="exp_bullet">
            •
            <p className="exp_bullet_text">{bold(bullet)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Bullets;
