/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import data from '../../data.json';

const { experience: experiences } = data.data;

function Experience() {
  return (
    <div className='Experience'>
      <h2 className='Experience-title'>Experiences</h2>
      {
        experiences.map((experience) => {
          const {
            company,
            endDate,
            jobDescription,
            jobTitle,
            startDate,
          } = experience;

          return (
            <div className='Experience-item'>
              <h3 className='Experience-jobTitle'>{jobTitle} at {company}</h3>
              <p className='Experience-jobDescription'>{jobDescription}</p>
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

export default Experience;
