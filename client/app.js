import React from 'react';
import {render} from 'react-dom';
import Datadisplay from './components/dataDisplay.js';
import GOOGLE_API_KEY from './../config.js';

render(
  <Datadisplay googleKey={ GOOGLE_API_KEY.url } />,
  document.getElementById('app')
);
