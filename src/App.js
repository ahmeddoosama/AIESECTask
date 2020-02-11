import React , { Component } from 'react';
import './App.css';

// Import Components
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Cards */}
        <Cards />
      </div>
    )
  }
}

export default App;
