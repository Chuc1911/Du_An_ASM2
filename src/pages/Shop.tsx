import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

export default function Shop() {
  return (
    <div>
         <div className="shop-wrapper">
        <Header/>
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
                        <div className="row shop_wrapper grid_3">
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/1.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/2.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Product dummy name</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$80.00</span>
                                            <span className="old-price"><del>$90.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Product dummy name</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$80.00</span>
                                            <span className="old-price"><del>$90.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/3.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/4.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Unique content for</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$70.00</span>
                                            <span className="old-price"><del>$80.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Unique content for</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$70.00</span>
                                            <span className="old-price"><del>$80.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/5.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/6.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">New badge product</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$60.00</span>
                                            <span className="old-price"><del>$70.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">New badge product</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$60.00</span>
                                            <span className="old-price"><del>$70.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/7.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/8.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">New and sale badge</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$50.00</span>
                                            <span className="old-price"><del>$60.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">New and sale badge</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$50.00</span>
                                            <span className="old-price"><del>$60.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/9.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/10.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">This is the large</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$30.00</span>
                                            <span className="old-price"><del>$50.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">This is the large</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$30.00</span>
                                            <span className="old-price"><del>$50.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/5.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/7.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Soldout product</a></h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$50.00</span>
                                            <span className="old-price"><del>$55.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Soldout product</a></h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$50.00</span>
                                            <span className="old-price"><del>$55.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/8.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/4.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Simple product</a></h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$40.00</span>
                                            <span className="old-price"><del>$44.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Simple product</a></h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$40.00</span>
                                            <span className="old-price"><del>$44.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/2.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/4.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Sample product</a></h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$60.00</span>
                                            <span className="old-price"><del>$77.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Sample product</a></h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$60.00</span>
                                            <span className="old-price"><del>$77.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/5.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/7.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Countdown product</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$44.99</span>
                                            <span className="old-price"><del>$55.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Countdown product</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$44.99</span>
                                            <span className="old-price"><del>$55.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/6.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/8.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Without shortcode</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$70.00</span>
                                            <span className="old-price"><del>$88.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Without shortcode</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$70.00</span>
                                            <span className="old-price"><del>$88.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/9.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/2.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Variable Product</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$10.00</span>
                                            <span className="old-price"><del>$20.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Variable Product</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$10.00</span>
                                            <span className="old-price"><del>$20.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area">
                                <div className="single-product position-relative">
                                    <div className="product-image">
                                        <a className="d-block" href="product-details.html">
                                            <img src="assets/images/product/5.jpg" alt="" className="product-image-1 w-100"/>
                                            <img src="assets/images/product/1.jpg" alt=""
                                                className="product-image-2 position-absolute w-100"/>
                                        </a>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Product dummy title</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$40.00</span>
                                            <span className="old-price"><del>$45.00</del></span>
                                        </div>
                                    </div>
                                    <div className="add-action d-flex position-absolute">
                                        <a href="cart.html" title="Add To cart">
                                            <i className="ion-bag"></i>
                                        </a>
                                        <a href="compare.html" title="Compare">
                                            <i className="ion-ios-loop-strong"></i>
                                        </a>
                                        <a href="wishlist.html" title="Add To Wishlist">
                                            <i className="ion-ios-heart-outline"></i>
                                        </a>
                                        <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                            <i className="ion-eye"></i>
                                        </a>
                                    </div>
                                    <div className="product-content-listview">
                                        <div className="product-rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                        </div>
                                        <div className="product-title">
                                            <h4 className="title-2"> <a href="product-details.html">Product dummy title</a>
                                            </h4>
                                        </div>
                                        <div className="price-box">
                                            <span className="regular-price ">$40.00</span>
                                            <span className="old-price"><del>$44.00</del></span>
                                        </div>
                                        <div className="add-action-listview d-flex">
                                            <a href="cart.html" title="Add To cart">
                                                <i className="ion-bag"></i>
                                            </a>
                                            <a href="compare.html" title="Compare">
                                                <i className="ion-ios-loop-strong"></i>
                                            </a>
                                            <a href="wishlist.html" title="Add To Wishlist">
                                                <i className="ion-ios-heart-outline"></i>
                                            </a>
                                            <a href="#exampleModalCenter" data-bs-toggle="modal" title="Quick View">
                                                <i className="ion-eye"></i>
                                            </a>
                                        </div>
                                        <p className="desc-content">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                            College in Virginia,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Shop Wrapper End --> */}
                        {/* <!-- Bottom Toolbar Start --> */}
                        <div className="row">
                            <div className="col-sm-12 col-custom">
                                <div className="toolbar-bottom mt-30">
                                    <nav className="pagination pagination-wrap mb-10 mb-sm-0">
                                        <ul className="pagination">
                                            <li className="disabled prev">
                                                <i className="ion-ios-arrow-thin-left"></i>
                                            </li>
                                            <li className="active"><a>1</a></li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li className="next">
                                                <a href="#" title="Next >>"><i className="ion-ios-arrow-thin-right"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <p className="desc-content text-center text-sm-right">Showing 1 - 12 of 34 result</p>
                                </div>
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
                                                aria-label="Search Our Store"/>
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
                                                <img src="assets/images/product/small-product/1.jpg" alt="product"/>
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
                                                <img src="assets/images/product/small-product/2.jpg" alt="product"/>
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
                                                <img src="assets/images/product/small-product/3.jpg" alt="product"/>
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
        <Footer/>
        {/* <!-- Footer Area End Here --> */}
    </div>
    </div>
  )
}
