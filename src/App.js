import React, { Component } from 'react';
import Welcome from './pages/welcome/welcome';
import './theme/app.css';
import './theme/bulma.css';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  // lifecycle
  componentWillMount() {}

  // Renders
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
