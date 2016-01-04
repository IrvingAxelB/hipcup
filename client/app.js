import React from 'react';
import {render} from 'react-dom';
import Hipcup from './components/hipcupApp.js';
import GOOGLE_API_KEY from './../config.js';

render(
  <Hipcup googleKey={ GOOGLE_API_KEY.url } />,
  document.getElementById('app')
);
