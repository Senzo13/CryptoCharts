import React from 'react';
import clt from '@netlify/classnames-template-literals';
import homeIcon from '../../assets/home-fill.svg';
import likedIcon from '../../assets/likeIcon.svg';
import disconnect from '../../assets/power-off-solid.svg';

type NavIconProps = {
  icon: 'home' | 'like' | 'disconnect',
  path: string | undefined
};
type IconObject = {
  name: 'home' | 'like' | 'disconnect',
  icon: string,
  matchingPath: string
};
type IconList = Array<IconObject>;

const NavIcon = ({
  icon,
  path
}: NavIconProps) => {

  const icons: IconList = [
    {
      name: 'home',
      icon: homeIcon,
      matchingPath: '/'
    },
    {
      name: 'like',
      icon: likedIcon,
      matchingPath: '/liked'
    },
    {
      name: 'disconnect',
      icon: disconnect,
      matchingPath: '/disconnect'
    }
  ];
  const matchingIconName = icons.filter(element => element.matchingPath === path)[0]?.name;

  const classes = {
    selectedBorder: clt(`
        ${matchingIconName && matchingIconName === icon && 'bg-gradient-to-b from-[#2AD6F1] to-[#5860E3] '}
          w-1 absolute left-0 top-0 bottom-0 rounded-sm`),
    navIcon: clt(
      `rounded-full p-0.5
      ${matchingIconName && matchingIconName === icon && 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(238,238,228,0.3)]'}`
    )
  };


  const getIcon = (): string => {
    return icons.filter((element) => icon === element.name)[0].icon;
  };

  return (
    <div  className="flex justify-center w-full relative mb-3">
      <span className={classes.selectedBorder} />
      <img className={classes.navIcon} src={getIcon()} alt="home icon" />
    </div>
  );
};

export default NavIcon;
