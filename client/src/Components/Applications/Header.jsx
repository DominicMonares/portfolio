import React from 'react';

const Header = (props) => {
  const links = () => {
    if (props.links.length > 1) {
      return [
        <a key="link1" className="link" href={props['links'][0]}>GitHub - Front End</a>,
        <span key="divider">&nbsp;|&nbsp;</span>,
        <a key="link2" className="link" href={props['links'][1]}>GitHub - Back End</a>
      ]
    }

    return <a className="link" href={props['links'][0]} key="link1" >GitHub</a>
  }

  return (
    <div className="applications_header_container">
      <div className="top_container">
        <span className="app_name">{props.app}</span>
        &nbsp;|&nbsp;
        <span className="app_desc">{props.desc}</span>
        &nbsp;|&nbsp;
        {links()}
      </div>
      <div className="bottom_container">
        <span className="techs">{props.techs}</span>
      </div>
    </div>
  )
}

export default Header;
