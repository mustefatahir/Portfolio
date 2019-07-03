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
                    <img src="./images/home_webdeveloper_pic1.png" className="icon-services pb-4" alt="" srcset="" />
                    <h3 className="text-white services-h">Web Developement</h3>
                    <p className="font-weight-light para-color">I develop complex Websites and Web Applications that will meet your expectations in every detail. As a web developer i know how to create fast and yet powerful websites that will serve your business for years to come.</p>
                    <br /><br />
                    <p className="services-h text-white">Reliable Apps which are built to last for years</p>

                    <p className="services-h text-white">Professional and Stunning Websites</p>
                </div>
                <div className="col-md-3 services-div p-4">
                    <img src="./images/home_webdeveloper_pic2.png" className="icon-services pb-4" alt="" srcset="" />
                    <h3 className="text-white services-h">Mobile App Developement</h3>
                    <p className="font-weight-light para-color">User-friendly and engaging mobile apps for iOS and Android devices. We develop mobile applications for both brave startups and established enterprises that have brilliant ideas of how to reach new customers by going mobile.</p>
                    <br /><br />
                    <p className="services-h text-white">Versatile Apps with as many features as you want</p>
                    <p className="services-h text-white">Friendly User-interface for any user</p>

                </div>
                <div className="col-md-3 services-div p-4">
                    <img src="./images/home_webdeveloper_pic3.png" className="icon-services pb-4" alt="" srcset="" />
                    <h3 className="text-white services-h">Productive Design</h3>
                    <p className="font-weight-light para-color">Erasing boundaries between user interface and user experience. As an application development company, we design beautiful and straightforward apps that keep users’ attention for a long time.

        </p>
                    <br /><br />
                    <p className="services-h text-white pt-3">Full Cycle Developement from specifications to the post-release maintenance</p>
                    <p className="services-h text-white"> Deep Research of the target audience and key competitors</p>
                </div>
            </div>

        </div>
    );
}
export default Services;
