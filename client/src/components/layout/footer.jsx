import React from 'react';
import {Link} from "react-router-dom";
import pay from "../../assets/images/pay.png"
const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Legals</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">Refund Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Terms</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/how-to-buy">How to buy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/complain">Complain</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">About</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                            <img className="w-100" src={pay} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary py-3 text-center">
                <p className="text-white bodySmal">
                    © {2025} by ShopNex | All Rights Reserved
                </p>
                <div className="social-icons mb-0">
                    <span className="text-white mx-2">
                    <i className="bi bi-facebook fs-5"></i> </span>

                    <span className="text-white mx-2">
                        <i className="bi bi-twitter fs-5"></i> </span>

                    <span className="text-white mx-2">
                    <i className="bi bi-linkedin fs-5"></i> </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;