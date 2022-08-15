import React from 'react';
import logo2 from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-3">
            <div className="container text-start py-3">
                <div className="row ">
                    <div className="col-md-5">
                        <div className="col-md-4">
                            <img className='img-fluid' src={logo2} alt="" />
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="col-md-7">

                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">About online food</a></li>
                                    <li><a href="#">Read our blog</a></li>
                                    <li><a href="#">Sign uup to deliver</a></li>
                                    <li><a href="#">Add your restaurant</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">Get help</a></li>
                                    <li><a href="#">Read FAQs</a></li>
                                    <li><a href="#">View all cities</a></li>
                                    <li><a href="#">Restaurentr near me</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="container text-start py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>&copy; 2021 shariful islam</small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <a href="">Privacy policy</a>
                            <a href="">Terms condition</a>
                            <a href="">pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;