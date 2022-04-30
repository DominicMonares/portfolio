import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home'
    };
  }

  render() {
    return (
      <div>
        <p>TEST</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));
