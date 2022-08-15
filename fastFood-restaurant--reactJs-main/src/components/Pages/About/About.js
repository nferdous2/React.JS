import React from 'react';
import img1 from '../../../images/adult-blur-blurred-background-687824.png'
import img2 from '../../../images/architecture-building-city-2047397.png'
import img3 from '../../../images/chef-cook-food-33614.png'
import './About.css'

const About = () => {
    return (
        <div className="container text-start">
            <div className="col-md-5 ">
                <h4>Why you choose us</h4>
                <small>
                    Barton waited twenty always repair in within we do. An delighted offending curiosity my is basswoods at. Boy prosperous increasing surrounded
                </small>
            </div>
            <div className="row">
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img1} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-car"></i>
                        </div>
                        <div>
                            <h5>Fast delivery</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img3} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="far fa-bell"></i>

                        </div>
                        <div>
                            <h5>A good auto responder</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more</a> <button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 g-4">
                    <img className="img-fluid" src={img2} alt="" />
                    <div className="d-flex mt-3">
                        <div className="about_us">
                            <i className="fas fa-truck"></i>
                        </div>
                        <div>
                            <h5>Home delivery</h5>
                            <small>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</small><br />
                            <a href="#">See more </a><button className="seemore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;