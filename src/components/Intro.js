import React from 'react';
// profile image 
import profileImage from '../assets/IMG_3651.jpg';

const Intro = () => {
  return (
    <div className="container p-3" id="intro">
      <div className="row">
        <div className="col-md-7">
          <h1 className="display-4 text-start">Hi, I'm <span className="bold">Madeleine 👋</span>. A junior <span className="italic">web
            developer</span> and <span class="italic">film enthusiast</span>, currently located in 
            <span className="bold"> Adelaide, Australia</span>.
          </h1>
        </div>
        <div className="col-md-4">
          <img src={profileImage} alt="profile image" className="rounded mx-auto d-block img-fluid main-img" />
        </div>
      </div>
    </div>
  )
}

export default Intro

