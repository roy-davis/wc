import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { setup } from '@wc/components';
import './index.css';
setup();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
