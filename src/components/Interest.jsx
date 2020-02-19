/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { data } from '../../data.json';

const { interest: interests } = data;
function Interest() {
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Interests</h2>
      <ul>
        {
          interests.map((interest) => {
            return (
              <li className='Interest-item'>
                {interest}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Interest;
