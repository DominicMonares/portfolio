import React from 'react';

const Bullets = (props) => {
  const bold = (bullet) => {
    const splitBullet = bullet.split('<b>');
    let even = true;
    return splitBullet.map(b => {
      if (even) {
        even = false;
        return <span>{b}</span>
      }

      even = true;
      return <b>{b}</b>
    })
  }

  return (
    <div className="bullet_container">
      <span className="bullet">• {bold(props.first)}</span>
      <span className="bullet">• {bold(props.second)}</span>
      <span className="bullet">• {bold(props.third)}</span>
    </div>
  )
}

export default Bullets;
