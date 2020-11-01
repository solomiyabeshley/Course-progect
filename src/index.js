import React from 'react';
import ReactDOM from 'react-dom';
import GuaranteesHeader from './guaranteesHeader'
import * as serviceWorker from './serviceWorker';
import AsNavFor from  "./js/slider";
ReactDOM.render(
  <React.StrictMode>
      <AsNavFor />,
      <GuaranteesHeader />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
