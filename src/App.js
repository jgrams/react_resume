import React, { Component } from 'react';
import './App.css';
import ResumeObject from './resume/components/ResumeObject.jsx';
import CoverLetterObject from './cover_letter/components/CoverLetterObject.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResumeObject />
        <CoverLetterObject />
      </div>
    );
  }
}

export default App;