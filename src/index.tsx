import * as React from 'react';
import { render } from 'react-dom';
import './scss/style.scss';

export default class App extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Hello World!</h1>
          </div>
        </div>
      </section>
    );
  }
}

render(<App />, document.getElementById('app'));
