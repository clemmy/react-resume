import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import Resume from './Resume';

// http://paletton.com/#uid=12P0u0kllllaFw0g0qFqFg0w0aF

render(<Resume />, document.getElementById('root'));
