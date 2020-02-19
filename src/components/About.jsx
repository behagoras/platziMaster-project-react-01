import React from 'react';
import data from '../../data.json';

// const { data: profile } = data;
const {
  email,
  website,
  phone,
} = data.data;

function About() {
  return (
    <div className='About'>
      <h2 className='About-title'>About</h2>
      <ul className='About-list'>
        <li className='About-item'>{email}</li>
        <li className='About-item'>{website}</li>
        <li className='About-item'>{phone}</li>
      </ul>

    </div>
  );
}

export default About;
