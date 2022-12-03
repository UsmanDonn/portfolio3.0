import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="BackgroundPic">
          <img src="/public/images/front_pic.jpg" alt="" />
          <div className="banner-wrapper">
          <div className="banner-img">
            <img src="./images/image1.png" alt=""  width="300" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Adriana James.</h6>
            <h3>Front-end Web Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              magni possimus in architecto repellat perspiciatis cum recusandae
              adipisci culpa voluptatem dolorem laudantium temporibus quos
              laborum, beatae sint delectus expedita quo.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;