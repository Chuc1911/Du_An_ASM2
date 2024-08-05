import React, { Children } from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ListShop from '../Component/ListShop'

export default function Shop() {
    return (
        <div>
            <div className="shop-wrapper">
                <Header />
                {/* <!-- Breadcrumb Area Start Here --> */}
                <div className="breadcrumbs-area position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="breadcrumb-content position-relative section-content">
                                    <h3 className="title-3">Shop Sidebar</h3>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Breadcrumb Area End Here --> */}
                {/* <!-- Shop Main Area Start Here --> */}
                <div className="shop-main-area">
                    <div className="container container-default custom-area">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 col-12 col-custom widget-mt">
                                {/* <!--shop toolbar start--> */}
                                <div className="shop_toolbar_wrapper">
                                    <div className="shop_toolbar_btn">
                                        <button data-role="grid_3" type="button" className="active btn-grid-3"
                                            data-bs-toggle="tooltip" title="3"><i className="fa fa-th"></i></button>
                                        {/* <!-- <button data-role="grid_4" type="button"  className=" btn-grid-4" data-bs-toggle="tooltip" title="4"></button> --> */}
                                        <button data-role="grid_list" type="button" className="btn-list" data-bs-toggle="tooltip"
                                            title="List"><i className="fa fa-th-list"></i></button>
                                    </div>
                                    <div className="shop-select">

                                    </div>
                                </div>
                                {/* <!--shop toolbar end--> */}
                                {/* <!-- Shop Wrapper Start --> */}
                                <ListShop />
                                {/* <!-- Shop Wrapper End --> */}
                                {/* <!-- Bottom Toolbar Start --> */}
                                <div className="flex flex-col items-center mt-8">
                                    <div className="flex items-center justify-between w-full max-w-4xl">
                                        {/* <!-- Pagination Navigation --> */}
                                        <nav className="flex items-center space-x-2">
                                            <button className="px-3 py-1 text-gray-500 bg-gray-200 rounded-lg disabled:opacity-50" disabled>
                                                <i className="ion-ios-arrow-thin-left"></i>
                                            </button>
                                            <a href="#" className="px-3 py-1 text-blue-600 bg-blue-100 rounded-lg">1</a>
                                            <a href="#" className="px-3 py-1 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">2</a>
                                            <button className="px-3 py-1 text-gray-500 bg-gray-200 rounded-lg">
                                                <i className="ion-ios-arrow-thin-right"></i>
                                            </button>
                                        </nav>
                                        {/* <!-- Pagination Description --> */}
                                        
                                    </div>
                                </div>

                                {/* <!-- Bottom Toolbar End --> */}
                            </div>
                            <div className="col-lg-3 col-12 col-custom">
                                {/* <!-- Sidebar Widget Start --> */}
                                <aside className="sidebar_widget widget-mt">
                                    <div className="widget_inner">
                                        <div className="widget-list widget-mb-1">
                                            <h3 className="widget-title">Search</h3>
                                            <div className="search-box">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Search Our Store"
                                                        aria-label="Search Our Store" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-secondary" type="button">
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-list widget-mb-1">
                                            <h3 className="widget-title">Menu Categories</h3>
                                            {/* <!-- Widget Menu Start --> */}
                                            <nav>
                                                <ul className="mobile-menu p-0 m-0">
                                                    <li className="menu-item-has-children"><a href="#">Breads</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Skateboard (02)</a></li>
                                                            <li><a href="#">Surfboard (4)</a></li>
                                                            <li><a href="#">Accessories (3)</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children"><a href="#">Fruits</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Samsome</a></li>
                                                            <li><a href="#">GL Stylus (4)</a></li>
                                                            <li><a href="#">Uawei (3)</a></li>
                                                            <li><a href="#">Avocado (3)</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children"><a href="#">Vagetables</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Power Bank</a></li>
                                                            <li><a href="#">Data Cable (4)</a></li>
                                                            <li><a href="#">Avocado (3)</a></li>
                                                            <li><a href="#">Brocoly (3)</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children"><a href="#">Organic Food</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Vagetables</a></li>
                                                            <li><a href="#">Green Food (4)</a></li>
                                                            <li><a href="#">Coconut (3)</a></li>
                                                            <li><a href="#">Cabage (3)</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                            {/* <!-- Widget Menu End --> */}
                                        </div>
                                        <div className="widget-list widget-mb-1">
                                            <h3 className="widget-title">Categories</h3>
                                            <div className="sidebar-body">
                                                <ul className="sidebar-list">
                                                    <li><a href="#">All Product</a></li>
                                                    <li><a href="#">Best Seller (5)</a></li>
                                                    <li><a href="#">Featured (4)</a></li>
                                                    <li><a href="#">New Products (6)</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget-list widget-mb-2">
                                            <h3 className="widget-title">Color</h3>
                                            <div className="sidebar-body">
                                                <div className="sidebar-list">
                                                    <button type="button" className="btn red"></button>
                                                    <button type="button" className="btn green"></button>
                                                    <button type="button" className="btn blue"></button>
                                                    <button type="button" className="btn yellow"></button>
                                                    <button type="button" className="btn white"></button>
                                                    <button type="button" className="btn gold"></button>
                                                    <button type="button" className="btn gray"></button>
                                                    <button type="button" className="btn magenta"></button>
                                                    <button type="button" className="btn maroon"></button>
                                                    <button type="button" className="btn navy"></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-list widget-mb-3">
                                            <h3 className="widget-title">Tags</h3>
                                            <div className="sidebar-body">
                                                <ul className="tags">
                                                    <li><a href="#">Car</a></li>
                                                    <li><a href="#">Parts</a></li>
                                                    <li><a href="#">Shop</a></li>
                                                    <li><a href="#">Tayer</a></li>
                                                    <li><a href="#">Seat</a></li>
                                                    <li><a href="#">Engine</a></li>
                                                    <li><a href="#">Parts</a></li>
                                                    <li><a href="#">Fuel</a></li>
                                                    <li><a href="#">Modern</a></li>
                                                    <li><a href="#">Brake</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget-list widget-mb-4">
                                            <h3 className="widget-title">Recent Products</h3>
                                            <div className="sidebar-body">
                                                <div className="sidebar-product align-items-center">
                                                    <a href="product-details.html" className="image">
                                                        <img src="assets/images/product/small-product/1.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-content">
                                                        <div className="product-title">
                                                            <h4 className="title-2"> <a href="product-details.html">Product dummy
                                                                name</a></h4>
                                                        </div>
                                                        <div className="price-box">
                                                            <span className="regular-price ">$80.00</span>
                                                            <span className="old-price"><del>$90.00</del></span>
                                                        </div>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sidebar-product align-items-center">
                                                    <a href="product-details.html" className="image">
                                                        <img src="assets/images/product/small-product/2.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-content">
                                                        <div className="product-title">
                                                            <h4 className="title-2"> <a href="product-details.html">Product dummy
                                                                title</a></h4>
                                                        </div>
                                                        <div className="price-box">
                                                            <span className="regular-price ">$50.00</span>
                                                            <span className="old-price"><del>$60.00</del></span>
                                                        </div>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sidebar-product align-items-center">
                                                    <a href="product-details.html" className="image">
                                                        <img src="assets/images/product/small-product/3.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-content">
                                                        <div className="product-title">
                                                            <h4 className="title-2"> <a href="product-details.html">Product title
                                                                here</a></h4>
                                                        </div>
                                                        <div className="price-box">
                                                            <span className="regular-price ">$40.00</span>
                                                            <span className="old-price"><del>$50.00</del></span>
                                                        </div>
                                                        <div className="product-rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half-o"></i>
                                                            <i className="fa fa-star-half-o"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                {/* <!-- Sidebar Widget End --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Shop Main Area End Here --> */}
                {/* <!-- Support Area Start Here --> */}
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
                {/* <!-- Support Area End Here --> */}
                {/* <!-- Footer Area Start Here --> */}
                <Footer />
                {/* <!-- Footer Area End Here --> */}
            </div>
        </div>
    )
}
