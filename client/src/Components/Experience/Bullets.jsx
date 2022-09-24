import React from 'react';

const Bullets = ({ first, second, third }) => {
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
      <div className="exp_bullet">
        •
        <p className="exp_bullet_text">{bold(first)}</p>
      </div>
      <div className="exp_bullet">
        •
        <p className="exp_bullet_text">{bold(second)}</p>
      </div>
      <div className="exp_bullet">
        •
        <p className="exp_bullet_text">{bold(third)}</p>
      </div>
    </div>
  );
}

export default Bullets;
