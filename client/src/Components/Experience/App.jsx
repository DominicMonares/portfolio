import React from 'react';

const App = (props) => {
  const links = () => {
    if (props.links.length > 1) {
      return [
        <a className="exp_link" href={props['links'][0]} key="link1">GitHub - Front End</a>,
        <span>&nbsp;|&nbsp;</span>,
        <a className="exp_link" href={props['links'][1]} key="link2">GitHub - Back End</a>
      ]
    }

    return <a className="exp_link" href={props['links'][0]} key="link1">GitHub</a>
  }

  return (
    <div className="app_header_container">
      <span>{props.type}</span>
      &nbsp;|&nbsp;
      {links()}
    </div>
  )
}

export default App;
