import React from 'react'
import Header from '../Layouts/Header'

export default function Register() {
  return (
    <div>
      
    <div className="contact-wrapper">
        <Header/>
        <div className="breadcrumbs-area position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="breadcrumb-content position-relative section-content">
                            <h3 className="title-3">Login-Register</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Login-Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="login-register-area mt-no-text mb-no-text">
            <div className="container container-default-2 custom-area">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-custom">
                        <div className="login-register-wrapper">
                            <div className="section-content text-center mb-5">
                                <h2 className="title-4 mb-2">Create Account</h2>
                                <p className="desc-content">Please Register using account detail bellow.</p>
                            </div>
                            <form action="#" method="post">
                                <div className="single-input-item mb-3">
                                    <input type="text" placeholder="First Name"/>
                                </div>
                                <div className="single-input-item mb-3">
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                                <div className="single-input-item mb-3">
                                    <input type="email" placeholder="Email or Username"/>
                                </div>
                                <div className="single-input-item mb-3">
                                    <input type="password" placeholder="Enter your Password"/>
                                </div>
                                <div className="single-input-item mb-3">
                                    <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                                        <div className="remember-meta mb-3">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="rememberMe"/>
                                                <label className="custom-control-label">Subscribe Our Newsletter</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-input-item mb-3">
                                    <button className="btn obrien-button-2 primary-color">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="support-area">
            <div className="container container-default custom-area">
                <div className="row">
                    <div className="col-lg-12 col-custom">
                        <div className="support-wrapper d-flex">
                            <div className="support-content">
                                <h1 className="title">Need Help ?</h1>
                                <p className="desc-content">Call our support 24/7 at 01234-567-890</p>
                            </div>
                            <div className="support-button d-flex align-items-center">
                                <a className="obrien-button primary-btn" href="contact-us.html">Contact now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer-area">
            <div className="footer-widget-area">
                <div className="container container-default custom-area">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-custom">
                            <div className="single-footer-widget m-0">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo/footer.png" alt="Logo Image"/>
                                    </a>
                                </div>
                                <p className="desc-content">Obrien is the best parts shop of your daily nutritions. What kind of nutrition do you need you can get here soluta nobis</p>
                                <div className="social-links">
                                    <ul className="d-flex">
                                        <li>
                                            <a className="border rounded-circle" href="#" title="Facebook">
                                                <i className="fa fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border rounded-circle" href="#" title="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border rounded-circle" href="#" title="Linkedin">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border rounded-circle" href="#" title="Youtube">
                                                <i className="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border rounded-circle" href="#" title="Vimeo">
                                                <i className="fa fa-vimeo"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                            <div className="single-footer-widget">
                                <h2 className="widget-title">Information</h2>
                                <ul className="widget-list">
                                    <li><a href="about-us.html">Our Company</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="about-us.html">Our Services</a></li>
                                    <li><a href="about-us.html">Why We?</a></li>
                                    <li><a href="about-us.html">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                            <div className="single-footer-widget">
                                <h2 className="widget-title">Quicklink</h2>
                                <ul className="widget-list">
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-custom">
                            <div className="single-footer-widget">
                                <h2 className="widget-title">Support</h2>
                                <ul className="widget-list">
                                    <li><a href="contact-us.html">Online Support</a></li>
                                    <li><a href="contact-us.html">Shipping Policy</a></li>
                                    <li><a href="contact-us.html">Return Policy</a></li>
                                    <li><a href="contact-us.html">Privacy Policy</a></li>
                                    <li><a href="contact-us.html">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-custom">
                            <div className="single-footer-widget">
                                <h2 className="widget-title">See Information</h2>
                                <div className="widget-body">
                                    <address>123, H2, Road #21, Main City, Your address goes here.<br/>Phone: 01254 698 785, 36598 254 987<br/>Email: https://example.com</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-area">
                <div className="container custom-area">
                    <div className="row">
                        <div className="col-12 text-center col-custom">
                            <div className="copyright-content">
                                <p>Copyright © 2020 <a href="https://hasthemes.com/" title="https://hasthemes.com/">HasThemes</a> | Built with&nbsp;<strong>Obrien</strong>&nbsp;by <a href="https://hasthemes.com/" title="https://hasthemes.com/">HasThemes</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </div>
  )
}
