import React from 'react';
import classNames from 'classnames';

const ProfileImage = ({ src, className }) => { 
  return <img src={src} alt="Profile" className={classNames("h-10 w-10 rounded-full bg-cover bg-center cursor-pointer",className)} />;
};

export default ProfileImage;
