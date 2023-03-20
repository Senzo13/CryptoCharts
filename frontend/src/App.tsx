import React, { useState } from 'react';
import './App.css';
import SideNav from './components/nav/SideNav';
import Router from './router/Router';
import { Router as RouterType } from '@remix-run/router';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';


library.add(faAngleRight);

function App() {
  const [router, setRouter] = useState<undefined | RouterType>(undefined);
  const auth = getAuth();
  onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {

      const userDatas = {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid
      };

      localStorage.setItem('user', JSON.stringify(userDatas));

    }
  });

  return (
    <Router
      routerCallback={(r) => {
        setRouter(r);
      }}>
      <SideNav unless={['/confirm-account', '/register', '/login', '/disconnect']} router={router} />
    </Router>
  );
}
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common.Authorization = 'Bearer token';
export default App;
