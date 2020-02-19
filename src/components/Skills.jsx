import React from 'react';
import data from '../../data.json';

const { skills } = data.data;

function Skills() {
  return (
    <div className='Skills'>
      <h2 className='Skills-title'>Skills</h2>
      {
        skills.map((skill) => {
          return (
            <div className='Skills-item'>
              <div className='Skills-name'>{skill.name}</div>
              <div className='Skills-percentage'>{skill.percentage}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Skills;
