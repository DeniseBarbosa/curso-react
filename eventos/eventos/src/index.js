import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Evento from './Evento';
import Evento1 from './Evento1';
import Evento2 from './Evento2';
import Evento3 from './Evento3';
import Eventos4 from './Eventos4';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Evento />, */}
    {/* <Evento1 /> */}
    {/* <Evento2 /> */}
    {/* <Evento3 /> */}
    <Eventos4 />
  </React.StrictMode>
);

reportWebVitals();
