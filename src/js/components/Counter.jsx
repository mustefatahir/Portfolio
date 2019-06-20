import React from "react";

function Counter() {

  return (
  <div className="container-fluid counter-section">
    

    <div class="row">
	    <br/>
	
		
             
		
	</div>
		<div class="row text-center pb-3">
	        <div class="col">
	        <div class="counter">
      <i class="fa fa-code fa-3x services-h"></i>
      <h2 class="timer count-title count-number" data-to="100" data-speed="21000"></h2>
       <p class="count-text services-h">Completed Projects</p>
    </div>
	        </div>
              <div class="col">
               <div class="counter">
      <i class="fa fa-coffee fa-3x services-h"></i>
      <h2 class="timer count-title count-number" data-to="300" data-speed="21000"></h2>
      <p class="count-text services-h">Coffee With Clients</p>
    </div>
              </div>
              <div class="col">
                  <div class="counter">
      <i class="fas fa-laptop-code fa-3x services-h"></i>
      <h2 class="timer count-title count-number" data-to="250" data-speed="21000"></h2>
      <p class="count-text services-h">Applications Built</p>
    </div></div>
              <div class="col">
              <div class="counter">
      <i class="fa fa-bug fa-3x services-h"></i>
      <h2 class="timer count-title count-number" data-to="300" data-speed="21000"></h2>
      <p class="count-text services-h">Bugs Removed</p>
    </div>
              </div>
         </div>


  </div>
  );
}
export default Counter;
