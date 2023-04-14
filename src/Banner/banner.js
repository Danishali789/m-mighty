import React from "react";
import "./banner.css";
import image from "../picture/Capture.PNG";



export default function banner() {
  return (
    <>
    <div className="m-5">
      <div className="row">
        <div className="col-12 col-md-6 d-grid left">

          <div>
            <h1 className="header">
              This is
              <div className="slider">
                <ul className="words">
                  <li className="word">simple</li>
                  <li className="word">easy</li>
                  <li className="word">powerful</li>
                  <li className="word">simple</li>
                </ul>
              </div>
            </h1>
            <h1>will grow faster on Mighty Networks</h1>
          </div>
          
          <p>
            With a Mighty Network, you can bring your courses, memberships, and
            offers together in a powerful community under your own brand on iOS,
            Android, and the web.
          </p>
          <button className="btn2 text-white" type="submit">Start Your Free Trial</button>
        </div>
        <div className="col-12 col-md-6">
          <a className="navbar-brand" href="#">
            <img
              className="banner-img img-fluid w-100"
              src={image}
              alt="Page-logo"
            />
          </a>
        </div>
      </div>
    </div>
   
    </>

  );
}
