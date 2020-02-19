import React from 'react';
import data from '../../data.json';

// const { data: profile } = data;
const {
  Profile: description,
} = data.data;

function Profile() {
  return (
    <div className='Profile'>
      <h2 className='Profile-title'>Profile</h2>
      <p className='Profile-desc'>{description}</p>
    </div>
  );
}

export default Profile;
