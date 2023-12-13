import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import { Auth0Provider } from '@auth0/auth0-react';
import User from './pages/user';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-dzx6tqnamsm6mtpv.us.auth0.com"
    clientId="Yw2qn9KJ7GcK7dKzfBNGBy71LLZNpRgX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Landing/>
    <User/>
    <User/>
</Auth0Provider>
);
