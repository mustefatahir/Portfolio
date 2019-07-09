import React from "react";

function Gallery() {
  return (
    <div className="container-fluid gallery-section">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="text-white pb-5 pt-5 services-h">Recent Works</h1>
          {/* <i class="fas fa-grip-lines-vertical icon-ellipse pt-2 pb-4"></i> */}
        </div>
      </div>
      {/* <div className="row justify-content-evenly justify-content-center">
        <div className="col-md-5">
          <img src="./images/project8.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
        <div className="col-md-5">
          <img src="./images/project7.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
      </div>

      <div className="row justify-content-evenly justify-content-center">
        <div className="col-md-5">
          <img src="./images/project6.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
        <div className="col-md-5">
          <img src="./images/project5.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
      </div>

      <div className="row justify-content-evenly justify-content-center">
        <div className="col-md-5">
          <img src="./images/project4.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
        <div className="col-md-5">
          <img src="./images/project3.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
      </div>

      <div className="row pb-5 justify-content-evenly justify-content-center">
        <div className="col-md-5">
          <img src="./images/project2.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
        <div className="col-md-5">
          <img src="./images/project1.png" className="gallery-img pt-4" alt="" srcset="" />
        </div>
      </div> */}

      {/* // second gallery starts // */}
      {/* 
      <div className="row pb-5">
        <div className="col-md-7">
          <a href="" target="_blank"><img src="./images/project3.png" className="gallery-img" alt="" srcset="" /></a>
        </div>
        <div className="col-md-5 my-auto">
          <h2 className="services-h mt-lg-3 text-center">Antonio Sample Theme</h2>
          <p className="services-h mt-lg-3 text-center">Static Website Design</p>
          <p className="services-h mt-lg-3 text-center">Skills Used:HTML/CSS, Bootstrap4</p>
        </div>
      </div>


      <div className="row pb-5">
        <div className="col-md-5 my-auto">
          <h2 className="services-h mt-lg-3 text-center"> Vvork Cloud Technologies</h2>
          <p className="services-h mt-lg-3 text-center">Web Application for Vvork Cloud Technologies.</p>
          <p className="services-h mt-lg-3 text-center">Skills Used: React, HTML CSS</p>
        </div>
        <div className="col-md-7">
          <a href="" target="_blank"><img src="./images/project8.png" className="gallery-img" alt="" srcset="" /></a>
        </div>
      </div>

      <div className="row pb-5">
        <div className="col-md-7">
          <a href="" target="_blank"><img src="./images/project4.png" className="gallery-img" alt="" srcset="" /></a>
        </div>
        <div className="col-md-5 my-auto">
          <h2 className="services-h mt-lg-3 text-center"> Sample Theme</h2>
          <p className="services-h mt-lg-3 text-center">Static Website Design</p>
          <p className="services-h mt-lg-3 text-center">Skills Used:HTML/CSS, Bootstrap4</p>
        </div>
      </div> */}

      <section class="gallery-block compact-gallery">
        <div class="row no-gutters">
          <div class="col-md-6 col-lg-4 item zoom-on-hover">
            <a class="lightbox" target="_blank" href="./images/project8.png">
              <img class="img-fluid image" img src="./images/project8.png" />
              <span class="description">
                <span class="description-heading services-h">Vvork Cloud Technologies</span>
                <span class="description-body">Web Application for Vvork Cloud Technologies</span>
                <span class="description-body">Skills Used: React, HTML/CSS, Bootstrap</span>
              </span>
            </a>
          </div>
          <div class="col-md-6 col-lg-4 item zoom-on-hover">
            <a class="lightbox" target="_blank" href="./images/project6.png">
              <img class="img-fluid image" img src="./images/project6.png" />
              <span class="description">
                <span class="description-heading services-h">Classimax Marketplace</span>
                <span class="description-body">E-Commerce</span>
                <span class="description-body">Skills Used: React, HTML/CSS, Bootstrap</span>
              </span>
            </a>
          </div>
          <div class="col-md-6 col-lg-4 item zoom-on-hover">
            <a class="lightbox" target="_blank" href="./images/project5.png">
              <img class="img-fluid image" img src="./images/project5.png" />
              <span class="description">
                <span class="description-heading services-h">Fables Consultations</span>
                <span class="description-body">Static Website for Fables Consultations</span>
                <span class="description-body">Skills Used:HTML/CSS, Bootstrap, JavaScript</span>
              </span>
            </a>
          </div>
          <div class="col-md-6 col-lg-4 item zoom-on-hover">
            <a class="lightbox" target="_blank" href="./images/project4.png">
              <img class="img-fluid image" img src="./images/project4.png" />
              <span class="description">
                <span class="description-heading services-h">Sample Template</span>
                <span class="description-body">Static Website Design</span>
                <span class="description-body">Skills Used:HTML/CSS, Bootstrap, JavaScript</span>
              </span>
            </a>
          </div>
          <div class="col-md-6 col-lg-4 item zoom-on-hover">
            <a class="lightbox" target="_blank" href="./images/project3.png">
              <img class="img-fluid image" img src="./images/project3.png" />
              <span class="description">
                <span class="description-heading services-h">Sample Theme Antonio</span>

                <span class="description-body">Skills Used:HTML/CSS, Bootstrap, JavaScript</span>
              </span>
            </a>
          </div>
          <div class="col-md-6 col-lg-4 item zoom-on-hover">
            <a class="lightbox" target="_blank" href="./images/project2.png">
              <img class="img-fluid image" img src="./images/project2.png" />
              <span class="description">
                <span class="description-heading services-h">The Coffee Bean</span>
                <span class="description-body">Static Website Design</span>
                <span class="description-body">Skills Used:HTML/CSS, CSS3 Annimations, Bootstrap, JavaScript.</span>
              </span>
            </a>
          </div>


        </div>


      </section>
    </div >



  );
}
export default Gallery;
