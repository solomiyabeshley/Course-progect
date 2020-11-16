import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AsNavFor from "./js/modules/slider";
import GatesWicket from "./js/modules/gatesAndWickets";
ReactDOM.render(
    <React.StrictMode>
        <AsNavFor/>
    </React.StrictMode>,
    document.getElementById('root'),
);
ReactDOM.render(
    <React.StrictMode>
        <GatesWicket/>
    </React.StrictMode>,
    document.getElementById("root1"));

serviceWorker.unregister();
