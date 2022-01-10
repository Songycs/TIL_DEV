import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';


ReactDOM.render(
  <StrictMode>
      <RecoilRoot>
        <Router>
          <App />
        </Router>
      </RecoilRoot>
    </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();