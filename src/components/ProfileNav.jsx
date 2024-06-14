import React from 'react';
import './ProfileNav.css';
import { Link } from 'react-router-dom';


function ProfileNav  ({image, id, name}) {

  const urlCharacter =`/character/${id}`;
  return (
    <div className="profile-nav">
      
      <Link to={urlCharacter}>
      <img className='profile-image' src= {image} alt={name} />
      </Link>
     
      </div>
  );
};

export default ProfileNav;



