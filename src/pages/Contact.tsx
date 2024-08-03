import React from 'react'
import Header from '../Layouts/Header'

export default function Contact() {
  return (
    <>
          <div className="contact-wrapper">
        <Header/>
        <div className="breadcrumbs-area position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="breadcrumb-content position-relative section-content">
                            <h3 className="title-3">contact Us</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-us-area">
            <div className="container container-default-2 custom-area">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-custom">
                        <div className="contact-info-item">
                            <div className="con-info-icon">
                                <i className="ion-ios-location-outline"></i>
                            </div>
                            <div className="con-info-txt">
                                <h4>Our Location</h4>
                                <p>(800) 123 456 789 / (800) 123 456 789 info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-custom">
                        <div className="contact-info-item">
                            <div className="con-info-icon">
                                <i className="ion-iphone"></i>
                            </div>
                            <div className="con-info-txt">
                                <h4>Contact us Anytime</h4>
                                <p>Mobile: 012 345 678<br/>Fax: 123 456 789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-custom text-align-center">
                        <div className="contact-info-item">
                            <div className="con-info-icon">
                                <i className="ion-ios-email-outline"></i>
                            </div>
                            <div className="con-info-txt">
                                <h4>Support Overall</h4>
                                <p>Support24/7@example.com <br/> info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-custom">
                        <form method="post" action="http://whizthemes.com/mail-php/reza/obrien/mail.php" id="contact-form" accept-charset="UTF-8" className="contact-form">
                            <div className="comment-box mt-5">
                                <h5 className="text-uppercase">Get in Touch</h5>
                                <div className="row mt-3">
                                    <div className="col-md-6 col-custom">
                                        <div className="input-item mb-4">
                                            <input className="border rounded-0 w-100 input-area name" type="text" name="con_name" id="con_name" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-custom">
                                        <div className="input-item mb-4">
                                            <input className="border rounded-0 w-100 input-area email" type="email" name="con_email" id="con_email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-custom">
                                        <div className="input-item mb-4">
                                            <input className="border rounded-0 w-100 input-area email" type="text" name="con_content" id="con_content" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-custom">
                                        <div className="input-item mb-4">
                                            <textarea cols="30" rows="5" className="border rounded-0 w-100 custom-textarea input-area" name="con_message" id="con_message" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 col-custom mt-40">
                                        <button type="submit" id="submit" name="submit" className="btn obrien-button primary-btn rounded-0 mb-0">Send A Message</button>
                                    </div>
                                    <p className="col-12 col-custom form-message mb-0"></p>
                                </div>
                            </div>
                        </form>
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

   
    
    </>
  )
}
