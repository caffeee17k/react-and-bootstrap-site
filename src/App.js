import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={About} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contact' component={Contact} />
          
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
