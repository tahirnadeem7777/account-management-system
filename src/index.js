import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import TransactionsList from './features/transactions/TransactionsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transactionslist' element={<TransactionsList />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
