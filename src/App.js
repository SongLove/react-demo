import React, { Component } from 'react';
import ComponentHeader from './view/header'
import ComponentFooter from './view/footer'
import BodyContent from './view/bodyContent'
import './App.css';

class App extends Component {
  render() {
    var type = '学生'
    return (
      <div className="App">
        <ComponentHeader/>
        <BodyContent userType={type}/>
        <ComponentFooter/>
      </div>
    );
  }
}

export default App;
