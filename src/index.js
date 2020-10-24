import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AsNavFor from  "./js/slider";
ReactDOM.render(
  <React.StrictMode>
    <App />,
      <AsNavFor />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
