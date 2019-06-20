import React from "react";

function Header() {

  return (
  <div className="container-fluid hero-section">
    {/* <div id="particles-js"></div> */}
<div className="row h-100">
  <div className="col-7"></div>
  <div className="col-md-5 my-auto">
    <h3 className="font-weight-light text-white">Hi There, Im</h3>
    <h1 className="services-mustefa font-weight-bold display-3">Mustefa Tahir</h1>
    <h4 className="font-weight-light text-white">Designer & Front End Developer</h4>
    <a href="https://www.facebook.com/syedmustefatahir" target="_blank" title="Facebook">  <i class="icons fab fa-facebook-square"></i> </a>
    <a href="https://www.instagram.com/mustefa.tahir" target="_blank" title="Instagram"> <i class="icons fab fa-instagram"></i></a> 
    <a href="https://www.behance.net/mustefatahir" target="_blank" title="Behance">  <i class="icons fab fa-behance"></i> </a>
    <a href="https://github.com/mustefatahir" target="_blank" title="GitHub">  <i class="icons fab fa-github"></i></a>
    
    </div>
    </div>
  </div>
  );
}
export default Header;
