import React from 'react'
import Header from '../Layouts/Header'

export default function About() {
  return (
    <div>
          <div className="about-wrapper">
        <Header/>
        {/* <!-- Breadcrumb Area Start Here --> */}
        <div className="breadcrumbs-area position-relative mb-text-p">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="breadcrumb-content position-relative section-content">
                            <h3 className="title-3">About Us</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Breadcrumb Area End Here -->
        <!-- About Us Area Start Here -->
        <!-- Feature Area Start Here --> */}
        <div className="feature-area mb-no-text">
            <div className="container container-default custom-area">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 col-md-12 col-custom">
                        <div className="feature-content-wrapper">
                            <h2 className="title">Important to eat fruit</h2>
                            <p className="desc-content">Eating fruit provides health benefits — people who eat more fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some chronic diseases. Fruits provide nutrients vital for health and maintenance of your body.</p>
                            <p className="desc-content"> Fruits are sources of many essential nutrients that are underconsumed, including potassium, dietary fiber, vitamin C, and folate (folic acid).</p>
                            <p className="desc-content"> Most fruits are naturally low in fat, sodium, and calories. None have cholesterol.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-12 col-custom">
                        <div className="feature-image position-relative">
                            <img src="assets/images/feature/feature-2.jpg" alt="Obrien Feature"/>
                            <div className="popup-video position-absolute">
                                <a className="popup-vimeo" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                                    <i className="ion-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Feature Area End Here -->
        <!-- Newslatter Area Start Here --> */}
        <div className="newsletter-area mt-no-text mb-text-p">
            <div className="container container-default h-100 custom-area">
                <div className="row h-100">
                    <div className="col-lg-8 col-xl-5 offset-xl-6 offset-lg-3 col-custom">
                        <div className="newsletter-content text-center d-flex flex-column align-items-center justify-content-center h-100">
                            <div className="section-content">
                                <h4 className="title-4 text-uppercase">Special <span>Offer</span> for subscription</h4>
                                <h2 className="title-3 text-uppercase">Get instant discount for membership</h2>
                                <p className="desc-content">Subscribe our newsletter and all latest news of our <br/>latest product, promotion and offers</p>
                            </div>
                            <div className="newsletter-form-wrap ml-auto mr-auto">
                                <form id="mc-form" className="mc-form d-flex position-relative">
                                    <input type="email" id="mc-email" className="form-control email-box" placeholder="email@example.com" name="EMAIL"/>
                                    <button id="mc-submit" className="btn primary-btn obrien-button newsletter-btn position-absolute" type="submit">Subscribe</button>
                                </form>
                                {/* <!-- mailchimp-alerts Start --> */}
                                <div className="mailchimp-alerts text-centre">
                                    <div className="mailchimp-submitting"></div>
                                    <div className="mailchimp-success text-success"></div>
                                    <div className="mailchimp-error text-danger"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="brand-logo-area mt-text mb-no-text">
            <div className="container custom-area">
                <div className="row">
                    <div className="col-lg-12 col-custom">
                        <div className="obrien-slider" data-slick-options='{
                        "slidesToShow": 5,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "arrows": false,
                        "dots": false
                        }' data-slick-responsive='[
                        {"breakpoint": 1200, "settings": {
                        "slidesToShow": 4
                        }},
                        {"breakpoint": 992, "settings": {
                        "slidesToShow": 3
                        }},
                        {"breakpoint": 576, "settings": {
                        "slidesToShow": 3
                        }},
                        {"breakpoint": 481, "settings": {
                        "slidesToShow": 2
                        }}
                        ]'>
                            <div className="brand-logo-item">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-1.png" alt="Brand Logo"/>
                                </a>
                            </div>
                            <div className="brand-logo-item">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-2.png" alt="Brand Logo"/>
                                </a>
                            </div>
                            <div className="brand-logo-item">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-3.png" alt="Brand Logo"/>
                                </a>
                            </div>
                            <div className="brand-logo-item">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-4.png" alt="Brand Logo"/>
                                </a>
                            </div>
                            <div className="brand-logo-item">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-5.png" alt="Brand Logo"/>
                                </a>
                            </div>
                            <div className="brand-logo-item">
                                <a href="#">
                                    <img src="assets/images/brand-logo/brand-3.png" alt="Brand Logo"/>
                                </a>
                            </div>
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
