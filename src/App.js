import { Component } from 'react'
import Container from './components/Container'
import Search from './components/Search'

import './App.css';

class App extends Component {



  render(){

    return (
      <div className="App">
        Rhythm App
        <Search />
        <Container />
      </div>
    );
  }
}

export default App;
