import React from 'react';

const App = (props) => {
  const links = () => {
    if (props.links.length > 1) {
      return [
        <a href={props['links'][0]}>GitHub - Front End</a>,
        <a href={props['links'][1]}>GitHub - Back End</a>
      ]
    }

    return <a href={props['links'][0]}>GitHub</a>
  }

  return (
    <div className="app_container">
      <span>{props.type}</span>
      {links()}
    </div>
  )
}

export default App;
