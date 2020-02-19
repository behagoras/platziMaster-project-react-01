/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import data from '../../data.json';

const { Academic: academic } = data.data;

function Academic() {
  return (
    <div className='Academic'>
      <h2 className='Academic-title'>Academic</h2>
      {
        academic.map((experience) => {
          const {
            institution,
            description,
            degree,
            startDate,
            endDate,
          } = experience;

          return (
            <div className='Academic-item'>
              <h3 className='Experience-title'>{degree} at {institution}</h3>
              <p className='Experience-description'>{description}</p>
              <div className='Experience-duration'>
                <div className='Experience-startDate'>{startDate}</div>
                <div className='Experience-endDate'>{endDate}</div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Academic;
