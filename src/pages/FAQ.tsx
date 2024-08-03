import React from 'react'
import Header from '../Layouts/Header'

export default function FAQ() {
  return (
    <div>
      
    <div className="contact-wrapper">
        <Header/>
        <div className="breadcrumbs-area position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="breadcrumb-content position-relative section-content">
                            <h3 className="title-3">FAQ</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="faq_content_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="faq_content_wrapper">
                            <h4>Below are frequently asked questions, you may find the answer for yourself</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div id="accordion" className="card__accordion">
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingOne">
                                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Mauris congue euismod purus at semper. Morbi et vulputate massa?<i className="fa fa-plus"></i><i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingTwo">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Donec mattis finibus elit ut tristique?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingThree">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Aenean elit orci, efficitur quis nisl at, accumsan?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingfour">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                        Pellentesque habitant morbi tristique senectus et netus?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapseeight" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingfive">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                        Nam pellentesque aliquam metus?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapseseven" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingsix">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                        Aenean elit orci, efficitur quis nisl at?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapsefour" className="collapse" aria-labelledby="headingsix" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingseven">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        Morbi gravida, nisi id fringilla ultricies, elit lorem?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapsefive" className="collapse" aria-labelledby="headingseven" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card_dipult">
                                <div className="card-header card_accor" id="headingeight">
                                    <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                        Aenean elit orci, efficitur quis nisl at, accumsan?
                                        <i className="fa fa-plus"></i>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div id="collapsesix" className="collapse" aria-labelledby="headingeight" data-parent="#accordion">
                                    <div className="card-body">
                                        <p>Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem</p>
                                    </div>
                                </div>
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
