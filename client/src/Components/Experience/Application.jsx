import React from 'react';

const Application = (props) => {
  const links = () => {
    if (props.links.length) {
      // return [
      //   <a
      //     className="exp_link"
      //     href={props['links'][0]}
      //     target="_blank"
      //     key="link1"
      //   >
      //     GitHub - Front End
      //   </a>,
      //   <span key="divider">&nbsp;|&nbsp;</span>,
      //   <a
      //     className="exp_link"
      //     href={props['links'][1]}
      //     target="_blank"
      //     key="link2"
      //   >
      //     GitHub - Back End
      //   </a>
      // ]
      return
    }

    return <a
      className="exp_link"
      href={props['links'][0]}
      target="_blank"
      key="link1"
    >
      GitHub
    </a>
  }

  return (
    <div className="app_header_container">
      <span>{props.type}</span>
      &nbsp;|&nbsp;
      {props.links.map(link => {
        return (
          <a
            className="exp_link"
            href={link.link}
            target="_blank"
            key="link1"
          >
            {link.title}
          </a>
        );
      })}
    </div>
  )
}

export default Application;
