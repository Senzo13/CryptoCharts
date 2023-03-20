import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Router as RouterType } from '@remix-run/router';
import Home from '../pages/home/Home';
import { useEffect, useState } from 'react';

import ConfirmAccount from '../pages/confirm_account/ConfirmAccount';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import NotFound from '../pages/404/NotFound';
import Disconnect from '../pages/Disconnect/Disconnect';
type RouterProps = {
  children: JSX.Element;
  routerCallback: (router: RouterType) => void;
};
const Router = ({ children, routerCallback }: RouterProps) => {
  const [router] = useState(
    createBrowserRouter([
      {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
      },
      {
        path: '/confirm-account',
        element: <ConfirmAccount />,
        errorElement: <NotFound />
      },
      {
        path: '/register',
        element: <Register />,
        errorElement: <NotFound />
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <NotFound />
      },
      {
        path: '/disconnect',
        element: <Disconnect />,
        errorElement: <NotFound />
      }
    ])
  );

  useEffect(() => routerCallback(router), [router, routerCallback]);
  return (
    <>
      {children}

      <RouterProvider router={router} />
    </>
  );
};

export default Router;
