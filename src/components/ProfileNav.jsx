import React from 'react';
import './ProfileNav.css';

const ProfileNav = () => {
  return (
    <div className="profile-nav">
      <div className="profile-header">
        StarMatch - Love at the speed of light !
      </div>
      <div className="profile-row">
        <a href="https://example.com/image1" target="_blank" rel="noopener noreferrer" className="profile-image-link">
          <div className="profile-image">Image 1</div>
        </a>
        <a href="https://example.com/image2" target="_blank" rel="noopener noreferrer" className="profile-image-link">
          <div className="profile-image">Image 2</div>
        </a>
        <a href="https://example.com/image3" target="_blank" rel="noopener noreferrer" className="profile-image-link">
          <div className="profile-image">Image 3</div>
        </a>
      </div>
      <div className="profile-row">
        <a href="https://example.com/image4" target="_blank" rel="noopener noreferrer" className="profile-image-wide-link">
          <div className="profile-image-wide">Image 4</div>
        </a>
      </div>
    </div>
  );
};

export default ProfileNav;



