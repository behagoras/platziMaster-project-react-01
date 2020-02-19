import React from 'react';
import styled from 'styled-components';
import { data } from '../../data.json';

const { name, profession, avatar } = data;

const Title = styled.h1`
  color:red;
`;

function Header({ children }) {
  return (
    <div className='Header'>
      <figure className='Header-avatar'><img src={avatar} alt='' /></figure>

      <Title className='Header-title'>{name}</Title>
      <h2 className='Header-profession'>{profession}</h2>
      {children}
    </div>
  );
}

export default Header;
