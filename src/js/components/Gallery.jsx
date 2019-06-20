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
<div className="row justify-content-evenly justify-content-center">
  <div className="col-md-5">
    <img src="./images/project8.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
  <div className="col-md-5">
  <img src="./images/project7.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
</div>

<div className="row justify-content-evenly justify-content-center">
  <div className="col-md-5">
    <img src="./images/project6.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
  <div className="col-md-5">
  <img src="./images/project5.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
</div>

<div className="row justify-content-evenly justify-content-center">
  <div className="col-md-5">
    <img src="./images/project4.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
  <div className="col-md-5">
  <img src="./images/project3.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
</div>

<div className="row pb-5 justify-content-evenly justify-content-center">
  <div className="col-md-5">
    <img src="./images/project2.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
  <div className="col-md-5">
  <img src="./images/project1.png" className="gallery-img pt-4" alt="" srcset=""/>
  </div>
</div>

</div>

  );
}
export default Gallery;
