import React from 'react';
import { data } from '../../data.json';

const { name, profession, avatar } = data;

function Header({ children }) {
  return (
    <div className='Header'>
      <figure className='Header-avatar'><img src={avatar} alt='' /></figure>

      <h1 className='Header-title'>{name}</h1>
      <h2 className='Header-profession'>{profession}</h2>
      {children}
    </div>
  );
}

export default Header;
