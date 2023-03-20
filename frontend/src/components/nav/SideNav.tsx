import React from 'react';
import logo from '../../assets/black-rock-logo.svg';
import NavIcon from './NavIcon';
import { Router as RouterType } from '@remix-run/router';

type SideNavProps = {
  router: RouterType | undefined;
  unless: Array<string>;
};

const SideNav = ({ router, unless }: SideNavProps) => {
  const path: string | undefined = router?.state.location.pathname;

  const show = () => {
    return path && unless.includes(path) ? false : true;
  };

  return show() ? (
    <div
    id='sidenav'
      className="absolute top-0 left-0 h-[110%] bg-black justify-center place-content-center"
      style={{ width: '100px' }}>
      <div>
        <a href="/">
          <img className="m-[17px]" src={logo} alt="logo" />
        </a>
      </div>
      <div className="pt-10">
        <a href="/">
          <NavIcon path={path} icon="home" />
        </a>
        <a href="/liked">
          <NavIcon path={path} icon="like" />
        </a>

        <a href="/disconnect">
          <NavIcon path={path} icon="disconnect" />
        </a>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SideNav;
