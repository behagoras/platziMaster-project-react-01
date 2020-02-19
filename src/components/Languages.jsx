/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { data } from '../../data.json';

const { languages } = data;
function Languages() {
  return (
    <div className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      {
        languages.map((language, key) => {
          return (
            <div className='Languages-item'>
              <div className='Languages-name'>
                {language.name}
              </div>
              <div className='Languages-percentage'>
                {language.percentage}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Languages;
