import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Header Area Start Here */}
      <header className="main-header-area">
        {/* Header Top Area Start Here */}
        <div className="header-top-area">
          <div className="container container-default-2 custom-area">
            <div className="row">
              <div className="col-12 col-custom header-top-wrapper text-center">
                <div className="short-desc text-white">
                  <p>Get 35% off for new product </p>
                </div>
                <div className="header-top-button">
                  <a href="shop-fullwidth.html">Shop Now</a>
                </div>
                <span className="top-close-button">X</span>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top Area End Here */}
        {/* Main Header Area Start */}
        <div className="main-header">
          <div className="container container-default custom-area">
            <div className="row">
              <div className="col-lg-12 col-custom">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-xl-2 col-sm-6 col-6 col-custom">
                    <div className="header-logo d-flex align-items-center">
                      <a href="index.html">
                        <img
                          className="img-full"
                          src="assets/images/logo/logo2.png"
                          alt="Header Logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-7 position-static d-none d-lg-block col-custom">
                    <nav className="main-nav d-flex justify-content-center">
                      <ul className="nav">
                        <li>
                          <a className="active">
                          <span className="menu-text">
                              <Link to="/">Home</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="menu-text">
                              <Link to="/shop">Shop</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                        <li>
                          <a >
                          <span className="menu-text">
                              <Link to="/blog">Blog</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                        <li>
                        <a >
                          <span className="menu-text">
                              <Link to="/about">About</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                        <li>
                        <a >
                          <span className="menu-text">
                              <Link to="/contact">Contact</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                        </a>
                        </li>
                        <li>
                        <a >
                          <span className="menu-text">
                              <Link to="/faq">FAQ</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-2 col-xl-3 col-sm-6 col-6 col-custom">
                    <div className="header-right-area main-nav">
                      <ul className="nav">
                        <li className="login-register-wrap d-none d-xl-flex">
                          <span>
                          <a >
                          <span>
                              <Link to="/login">Login</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                          </span>
                          <span>
                          <a >
                          <span>
                              <Link to="/register">Register</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                          </span>
                        </li>
                        <li className="sidemenu-wrap d-none d-lg-flex">
                          <a href="#">
                            USD <i className="fa fa-caret-down" />{" "}
                          </a>
                          <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-language">
                            <li>
                              <a href="#">USD - US Dollar</a>
                            </li>
                            <li>
                              <a href="#">EUR - Euro</a>
                            </li>
                            <li>
                              <a href="#">GBP - British Pound</a>
                            </li>
                            <li>
                              <a href="#">INR - Indian Rupee</a>
                            </li>
                            <li>
                              <a href="#">BDT - Bangladesh Taka</a>
                            </li>
                            <li>
                              <a href="#">JPY - Japan Yen</a>
                            </li>
                            <li>
                              <a href="#">CAD - Canada Dollar</a>
                            </li>
                            <li>
                              <a href="#">AUD - Australian Dollar</a>
                            </li>
                          </ul>
                        </li>
                        <li className="minicart-wrap">
                          <a href="#" className="minicart-btn toolbar-btn">
                            <i className="ion-bag" />
                            <span className="cart-item_count">3</span>
                          </a>
                          <div className="cart-item-wrapper dropdown-sidemenu dropdown-hover-2">
                            //cart item start
                            <div className="single-cart-item">
                              <div className="cart-img">
                                <a href="cart.html">
                                  <img src="assets/images/cart/1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-text">
                                <h5 className="title">
                                  <a href="cart.html">
                                    11. Product with video - navy
                                  </a>
                                </h5>
                                <div className="cart-text-btn">
                                  <div className="cart-qty">
                                    <span>1×</span>
                                    <span className="cart-price">$98.00</span>
                                  </div>
                                  <button type="button">
                                    <i className="ion-trash-b" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            //cart item end
                            <div className="cart-links d-flex justify-content-center">
                              <a
                                className="obrien-button white-btn"
                              >
                              <Link to={'/cart'}>View cart</Link>
                              </a>
                              <a
                                className="obrien-button white-btn"
                                href="checkout.html"
                              >
                                <Link to={'/checkout'}>Checkout</Link>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mobile-menu-btn d-lg-none">
                          <a className="off-canvas-btn" href="#">
                            <i className="fa fa-bars" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Header Area End */}
        {/* Sticky Header Start Here*/}
        <div className="main-header header-sticky">
          <div className="container container-default custom-area">
            <div className="row">
              <div className="col-lg-12 col-custom">
                <div className="row align-items-center">
                  <div className="col-lg-2 col-xl-2 col-sm-6 col-6 col-custom">
                    <div className="header-logo">
                      <a href="index.html">
                        <img
                          className="img-full"
                          src="assets/images/logo/logo2.png"
                          alt="Header Logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-7 position-static d-none d-lg-block col-custom">
                    <nav className="main-nav d-flex justify-content-center">
                      <ul className="nav">
                        <li>
                        <a className="active">
                          <span className="menu-text">
                              <Link to="/">Home</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                        <li>
                        <a className="active">
                          <span className="menu-text">
                              <Link to="/shop">Shop</Link>
                            </span>
                            {/* <i className="fa fa-angle-down" /> */}
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-fullwidth.html">
                            <span className="menu-text"> Blog</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="menu-text"> Pages</span>
                          </a>
                          <ul className="dropdown-submenu dropdown-hover">
                            <li>
                              <a href="frequently-questions.html">FAQ</a>
                            </li>
                            <li>
                              <a href="my-account.html">My Account</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="register.html">Register</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about-us.html">
                            <span className="menu-text"> About</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact-us.html">
                            <span className="menu-text">Contact</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-2 col-xl-3 col-sm-6 col-6 col-custom">
                    <div className="header-right-area main-nav">
                      <ul className="nav">
                        <li className="login-register-wrap d-none d-xl-flex">
                          <span>
                            <a href="login.html">Login</a>
                          </span>
                          <span>
                            <a href="register.html">Register</a>
                          </span>
                        </li>
                        <li className="sidemenu-wrap d-none d-lg-flex">
                          <a href="#">
                            USD <i className="fa fa-caret-down" />{" "}
                          </a>
                          <ul className="dropdown-sidemenu dropdown-hover-2 dropdown-language">
                            <li>
                              <a href="#">USD - US Dollar</a>
                            </li>
                            <li>
                              <a href="#">EUR - Euro</a>
                            </li>
                            <li>
                              <a href="#">GBP - British Pound</a>
                            </li>
                            <li>
                              <a href="#">INR - Indian Rupee</a>
                            </li>
                            <li>
                              <a href="#">BDT - Bangladesh Taka</a>
                            </li>
                            <li>
                              <a href="#">JPY - Japan Yen</a>
                            </li>
                            <li>
                              <a href="#">CAD - Canada Dollar</a>
                            </li>
                            <li>
                              <a href="#">AUD - Australian Dollar</a>
                            </li>
                          </ul>
                        </li>
                        <li className="minicart-wrap">
                          <a href="#" className="minicart-btn toolbar-btn">
                            <i className="ion-bag" />
                            <span className="cart-item_count">3</span>
                          </a>
                          <div className="cart-item-wrapper dropdown-sidemenu dropdown-hover-2">
                            <div className="single-cart-item">
                              <div className="cart-img">
                                <a href="cart.html">
                                  <img src="assets/images/cart/1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-text">
                                <h5 className="title">
                                  <a href="cart.html">
                                    11. Product with video - navy
                                  </a>
                                </h5>
                                <div className="cart-text-btn">
                                  <div className="cart-qty">
                                    <span>1×</span>
                                    <span className="cart-price">$98.00</span>
                                  </div>
                                  <button type="button">
                                    <i className="ion-trash-b" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="single-cart-item">
                              <div className="cart-img">
                                <a href="cart.html">
                                  <img src="assets/images/cart/2.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-text">
                                <h5 className="title">
                                  <a
                                    href="cart.html"
                                    title="10. This is the large title for testing large title and there is an image for testing - white"
                                  >
                                    10. This is the large title for testing...
                                  </a>
                                </h5>
                                <div className="cart-text-btn">
                                  <div className="cart-qty">
                                    <span>1×</span>
                                    <span className="cart-price">$98.00</span>
                                  </div>
                                  <button type="button">
                                    <i className="ion-trash-b" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="single-cart-item">
                              <div className="cart-img">
                                <a href="cart.html">
                                  <img src="assets/images/cart/3.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-text">
                                <h5 className="title">
                                  <a href="cart.html">
                                    1. New and sale badge product - s / red
                                  </a>
                                </h5>
                                <div className="cart-text-btn">
                                  <div className="cart-qty">
                                    <span>1×</span>
                                    <span className="cart-price">$98.00</span>
                                  </div>
                                  <button type="button">
                                    <i className="ion-trash-b" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="cart-price-total d-flex justify-content-between">
                              <h5>Total :</h5>
                              <h5>$166.00</h5>
                            </div>
                            <div className="cart-links d-flex justify-content-center">
                              <a
                                className="obrien-button white-btn"
                                href="cart.html"
                              >
                                View cart
                              </a>
                              <a
                                className="obrien-button white-btn"
                                href="checkout.html"
                              >
                                Checkout
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mobile-menu-btn d-lg-none">
                          <a className="off-canvas-btn" href="#mobileMenu">
                            <i className="fa fa-bars" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sticky Header End Here */}
        {/* off-canvas menu start */}
        <aside className="off-canvas-wrapper" id="mobileMenu">
          <div className="off-canvas-overlay" />
          <div className="off-canvas-inner-content">
            <div className="btn-close-off-canvas">
              <i className="fa fa-times" />
            </div>
            <div className="off-canvas-inner">
              <div className="search-box-offcanvas">
                <form>
                  <input type="text" placeholder="Search product..." />
                  <button className="search-btn">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              {/* mobile menu start */}
              <div className="mobile-navigation">
                {/* mobile menu navigation start */}
                <nav>
                  <ul className="mobile-menu">
                    <li className="menu-item-has-children">
                      <a >Home</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Page 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Page 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Page 4</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a >Shop</a>
                      <ul className="megamenu dropdown">
                        <li className="mega-title has-children">
                          <a href="#">Shop Layouts</a>
                          <ul className="dropdown">
                            <li>
                              <a href="shop.html">Shop Left Sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-left.html">
                                Shop List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-list-right.html">
                                Shop List Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-fullwidth.html">Shop Full Width</a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-title has-children">
                          <a >Product Details</a>
                          <ul className="dropdown">
                            <li>
                              <a href="product-details.html">
                                Single Product Details
                              </a>
                            </li>
                            <li>
                              <a href="variable-product-details.html">
                                Variable Product Details
                              </a>
                            </li>
                            <li>
                              <a href="external-product-details.html">
                                External Product Details
                              </a>
                            </li>
                            <li>
                              <a href="gallery-product-details.html">
                                Gallery Product Details
                              </a>
                            </li>
                            <li>
                              <a href="countdown-product-details.html">
                                Countdown Product Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="mega-title has-children">
                          <a>Others</a>
                          <ul className="dropdown">
                            <li>
                              <a href="error404.html">Error 404</a>
                            </li>
                            <li>
                              <a href="compare.html">Compare Page</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout Page</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wish List Page</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children ">
                      <a >Blog</a>
                      <ul className="dropdown">
                        <li>
                          <a href="blog.html">Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-list-right-sidebar.html">
                            Blog List Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-fullwidth.html">
                            Blog List Fullwidth
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid Page</a>
                        </li>
                        <li>
                          <a href="blog-grid-right-sidebar.html">
                            Blog Grid Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid-fullwidth.html">
                            Blog Grid Fullwidth
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-sidebar.html">
                            Blog Details Sidebar Page
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-fullwidth.html">
                            Blog Details Fullwidth Page
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children ">
                      <a >Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="frequently-questions.html">FAQ</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="login-register.html">login &amp; register</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                {/* mobile menu navigation end */}
              </div>
              {/* mobile menu end */}
              <div className="header-top-settings offcanvas-curreny-lang-support">
                {/* mobile menu navigation start */}
                <nav>
                  <ul className="mobile-menu">
                    <li className="menu-item-has-children">
                      <a >My Account</a>
                      <ul className="dropdown">
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="Register-2.html">Register</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a >Currency:USD</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">USD - US Dollar</a>
                        </li>
                        <li>
                          <a href="#">EUR - Euro</a>
                        </li>
                        <li>
                          <a href="#">GBP - British Pound</a>
                        </li>
                        <li>
                          <a href="#">INR - Indian Rupee</a>
                        </li>
                        <li>
                          <a href="#">BDT - Bangladesh Taka</a>
                        </li>
                        <li>
                          <a href="#">JPY - Japan Yen</a>
                        </li>
                        <li>
                          <a href="#">CAD - Canada Dollar</a>
                        </li>
                        <li>
                          <a href="#">AUD - Australian Dollar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                {/* mobile menu navigation end */}
              </div>
              {/* offcanvas widget area start */}
              <div className="offcanvas-widget-area">
                <div className="top-info-wrap text-left text-black">
                  <ul>
                    <li>
                      <i className="fa fa-phone" />
                      <a href="info%40yourdomain.html">(1245) 2456 012</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="info%40yourdomain.html">info@yourdomain.com</a>
                    </li>
                  </ul>
                </div>
                <div className="off-canvas-widget-social">
                  <a title="Facebook-f" href="#">
                    <i className="fa fa-facebook-f" />
                  </a>
                  <a title="Twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a title="Linkedin" href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a title="Youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                  <a title="Vimeo" href="#">
                    <i className="fa fa-vimeo" />
                  </a>
                </div>
              </div>
              {/* offcanvas widget area end */}
            </div>
          </div>
        </aside>
        {/* off-canvas menu end */}
      </header>
      {/* Header Area End Here */}

    </div>
  );
};

export default Header;
