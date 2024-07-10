import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Login from './page/login/index';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';

const cookies = new Cookies();

// Axios interceptor to add JWT token from cookies to each request
axios.interceptors.request.use(
  config => {
    const token = cookies.get('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const container = document.getElementById('root');
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
