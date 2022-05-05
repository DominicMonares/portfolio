import React from 'react';

const Bullets = (props) => {
  const bold = (bullet) => {
    const splitBullet = bullet.split('<b>');
    let even = true;
    return splitBullet.map(b => {
      if (even) {
        even = false;
        return <span key={b}>{b}</span>
      }

      even = true;
      return <b key={b}>{b}</b>
    })
  }

  return (
    <div className="exp_bullet_container">
      <div className="exp_bullet">
        <p className="exp_bullet_point">•</p>
        <p className="exp_bullet_text">{bold(props.first)}</p>
      </div>
      <div className="exp_bullet">
        <p className="exp_bullet_point">•</p>
        <p className="exp_bullet_text">{bold(props.second)}</p>
      </div>
      <div className="exp_bullet">
        <p className="exp_bullet_point">•</p>
        <p className="exp_bullet_text">{bold(props.third)}</p>
      </div>
    </div>
  )
}

export default Bullets;
