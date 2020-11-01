import React from 'react';
import ReactDOM from 'react-dom';
import GuaranteesHeader from './guaranteesHeader'
import * as serviceWorker from './serviceWorker';
import AsNavFor from  "./js/slider";
import GatesWicket from "./js/gatesAndWickets"
ReactDOM.render(
  <React.StrictMode>
      <AsNavFor />,
      <GuaranteesHeader />,
      <GatesWicket/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
