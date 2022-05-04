import React from 'react';

const Header = (props) => {
  const links = () => {
    if (props.links.length > 1) {
      return [
        <a key="link1" className="link" href={props['links'][0]}>GitHub - Front End</a>,
        <a key="link2" className="link" href={props['links'][1]}>GitHub - Back End</a>
      ]
    }

    return <a className="link" href={props['links'][0]} key="link1" >GitHub</a>
  }

  return (
    <div className="app_header_container">
      <div className="top_container">
        <span className="petpix">{props.app}</span>
        <span className="petpix_desc">{props.desc}</span>
        {links()}
      </div>
      <div className="bottom_container">
        <span className="techs">{props.techs}</span>
      </div>
    </div>
  )
}

export default Header;
