import React from 'react';

const Intro = () => {
  return (
    <div className="container p-3" id="intro">
      <div className="row">
        <div className="col-md-7" data-aos="fade-up">
          <h1 className="display-4">Hi, I'm <span className="bold">Madeleine 👋</span>. A junior <span className="italic">web
            developer</span> and <span class="italic">film enthusiast</span>, currently located in
            <span className="bold">Adelaide, Australia</span>.
          </h1>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <img src="./assets/IMG_3651.jpg" className="rounded mx-auto d-block img-fluid main-img" />
        </div>
      </div>
    </div>
  )
}

export default Intro

