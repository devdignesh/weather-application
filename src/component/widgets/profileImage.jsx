import React from 'react';
import classNames from 'classnames';

const ProfileImage = ({ src, className }) => { 
  return <img src={src} alt="Profile" className={classNames("h-12 w-12 rounded-full bg-cover bg-center cursor-pointer",className)} />;
};

export default ProfileImage;
