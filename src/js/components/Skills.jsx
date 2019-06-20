import React from "react";

function Skills() {

  return (
  <div className="container-fluid">
      {/* <div className="row skills">
          <div className="col-md-12 text-center">
              <h1 className="services-h">Skills</h1>
          </div>
      </div>
    <div className="row skills">
        <div className="col-6">
            <img src="./images/home_webdeveloper_pic11.png" className="skills-img" alt="" srcset=""/>
        </div>
    </div> */}

    <div className="row skills pt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
            <h1 className="services-h ">What I can do</h1>
            <p className="para-color pt-4 pb-5">A front-end developer's role is to combine design and business logic to achieve a user-facing product. To do this successfully, a wide skill set is necessary to produce a quality user experience
that leads to meeting business goals. With my experience I can:</p>
<h4 className="pb-3 para-color">Create responsive websites that work on a wide range of devices</h4>
<h4 className="pb-3 para-color">Assist with production of clean and functional design</h4>
<h4 className="pb-3 para-color">Bridge communication gap between designers and developers
</h4>
<h4 className="pb-3 para-color">Integrate your website into an easy to use content management system</h4>
        </div>
        <div className="col-md-2"></div>
    </div>
  </div>
  );
}
export default Skills;
