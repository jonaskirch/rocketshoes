import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
