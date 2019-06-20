import React from "react";

function Services() {

  return (
  <div className="container-fluid services-section ">
<div className="row">
    <div className="col-md-12 text-center pb-5">
        <h1 className="text-white services-h1 services-h">Services</h1>
    </div>
</div>
<div className="row justify-content-around pb-4">
    
    <div className="col-md-3 services-div p-4">
        <img src="./images/home_webdeveloper_pic1.png" className="icon-services pb-4" alt="" srcset=""/>
        <h3 className="text-white services-h">Web Developement</h3>
        <p className="font-weight-light para-color">A front-end web developer is probably what most people think of as a “web developer”. A front-end web developer is responsible for implementing visual elements that users see & interact with.
        </p>
    </div>
    <div className="col-md-3 services-div p-4">
    <img src="./images/home_webdeveloper_pic2.png" className="icon-services pb-4" alt="" srcset=""/>
        <h3 className="text-white services-h">Mobile App Developement</h3>
        <p className="font-weight-light para-color">A mobile app developer is able to create software for phones and tablets, and is familiar with the newest technologies in the mobile world.
        </p>
    </div>
    <div className="col-md-3 services-div p-4">
    <img src="./images/home_webdeveloper_pic3.png" className="icon-services pb-4" alt="" srcset=""/>
        <h3 className="text-white services-h">Productive Design</h3>
        <p className="font-weight-light para-color">Graphic designers create visual concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers & I will help you create a custom-tailored Design
        </p>
    </div>
</div>

  </div>
  );
}
export default Services;
