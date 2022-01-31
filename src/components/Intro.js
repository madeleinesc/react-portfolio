import React from 'react';

const Intro = () => {
    return (
        <div class="container p-3" id="intro">
    <div class="row">
      <div class="col-md-7" data-aos="fade-up">
        <h1 class="display-4">Hi, I'm <span class="bold">Madeleine 👋</span>. A junior <span class="italic">web
            developer</span> and <span class="italic">film enthusiast</span>, currently located in
          <span class="bold">Adelaide, Australia</span>.
        </h1>
      </div>
      <div class="col-md-4" data-aos="fade-up">
        <img src="./assets/IMG_3651.jpg" class="rounded mx-auto d-block img-fluid main-img"/>
      </div>
    </div>
  </div>   
    )
}

export default Intro

