import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './theme/header/header';
import Footer from './theme/footer/footer';

import Welcome from './pages/welcome/welcome';
import Article from './pages/article/article';
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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:id" component={Article} />
          <Route path="/" component={Welcome} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
