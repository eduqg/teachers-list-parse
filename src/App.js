import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import Header from './components/Header';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
