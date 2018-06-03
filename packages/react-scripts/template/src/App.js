import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_MONGODB_ATLAS_URI || !process.env.REACT_APP_MONGODB_STITCH_APPID) {
      throw new Error('Please define `REACT_APP_MONGODB_ATLAS_URI` and `REACT_APP_MONGODB_STITCH_APPID` in your .env file');
    }

    const mongodb_atlas_uri = process.env.REACT_APP_MONGODB_ATLAS_URI
    const mongodb_stitch_appid = process.env.REACT_APP_MONGODB_STITCH_APPID;

    return { mongodb_atlas_uri, mongodb_stich_appid };
  }

  render() {
    const { mongodb_atlas_uri, mongodb_stich_appid } = this.getEnvValues();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://mongodb.com/cloud/atlas"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          </a>
          <p className="App-intro">
           <b> MongoDB Atlas Connection URI: { mongodb_atlas_uri } </b><br/><br/>
           <b> MongoDB Stitch AppID: { mongodb_stich_appid } </b>
        </p>
        </header>
      </div>
    );
  }
}

export default App;
