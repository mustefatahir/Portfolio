import React from "react";

function About() {

  return (
  <div className="container-fluid">
    <div className="row about-me">
      <div className="col-md-4 my-auto pt-5">
        
    
      <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> */}
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 me-img" src="./images/me.jpg" alt="First slide"/>
    </div>
    {/* <div class="carousel-item">
      <img class="d-block w-100 me-img" src="./images/me2.jpg" alt="Second slide"/>
    </div> */}
    <div class="carousel-item">
      <img class="d-block w-100 me-img" src="./images/me.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        
      </div>
      <div className="col-md-8 my-auto pl-md-5 about-me-div">
        <h3 className="text-white pt-4 section2-heading">UI / UX Designer & Web Developer</h3>
        <h2 className="text-white pt-2 section2-heading">Based In Lahore, Pakistan.</h2>
        <i class="fas fa-quote-left display-4 services-h"></i>
 
        <p className="para-color pt-3 pb-5 section2-heading ml-4">I'm the Front-End Developer for Vvork Cloud Technologies, PK. 
I have serious passion for UI effects, animations and creating Web Pages that Stand out. 
<br></br><br></br>Let's make something special.</p>




      </div>
    </div>

   

  </div>
  );
}
export default About;
