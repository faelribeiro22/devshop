import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rafael: "Rafael"
    }
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

export default App;
