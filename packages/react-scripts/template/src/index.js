import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StitchClientFactory } from 'mongodb-stitch'

const appId = process.env.REACT_APP_MONGODB_STITCH_APPID;
let stitchClientPromise = StitchClientFactory.create(appId)

stitchClientPromise.then(stitchClient => {
  let props = { stitchClient }
  ReactDOM.render(
    <App {...props} />,
    document.getElementById('root')
  )
  registerServiceWorker()
});
