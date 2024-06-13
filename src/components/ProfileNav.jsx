import React from 'react';
import './ProfileNav.css';

const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <div className="profile-header">
        Position ( Galaxy + Image de la Galaxy )
      </div>
      <div className="profile-row">
        <div className="profile-image">Image 1</div>
        <div className="profile-image">Image 2</div>
        <div className="profile-image">Image 3</div>
      </div>
      <div className="profile-row">
        <div className="profile-image-wide">Image 4</div>
      </div>
    </div>
  );
};

export default ProfileNav;





