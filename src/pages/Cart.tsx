import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div>
      
    <div className="contact-wrapper">
       <Header/>
        {/* <!-- Breadcrumb Area Start Here --> */}
        <div className="breadcrumbs-area position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="breadcrumb-content position-relative section-content">
                            <h3 className="title-3">Shopping Cart</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Breadcrumb Area End Here --> */}
        {/* <!-- cart main wrapper start --> */}
        <div className="cart-main-wrapper mt-no-text mb-no-text">
            <div className="container container-default-2 custom-area">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Cart Table Area --> */}
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="pro-thumbnail">Image</th>
                                        <th className="pro-title">Product</th>
                                        <th className="pro-price">Price</th>
                                        <th className="pro-quantity">Quantity</th>
                                        <th className="pro-subtotal">Total</th>
                                        <th className="pro-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/product/small-size/1.jpg" alt="Product" /></a></td>
                                        <td className="pro-title"><a href="#">Product dummy title <br/> s / green</a></td>
                                        <td className="pro-price"><span>$295.00</span></td>
                                        <td className="pro-quantity">
                                            <div className="quantity">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="0" type="text"/>
                                                    <div className="dec qtybutton">-</div>
                                                    <div className="inc qtybutton">+</div>
                                                    <div className="dec qtybutton"><i className="fa fa-minus"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-plus"></i></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pro-subtotal"><span>$295.00</span></td>
                                        <td className="pro-remove"><a href="#"><i className="ion-trash-b"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/product/small-size/2.jpg" alt="Product" /></a></td>
                                        <td className="pro-title"><a href="#">Product title here <br/> red</a></td>
                                        <td className="pro-price"><span>$275.00</span></td>
                                        <td className="pro-quantity">
                                            <div className="quantity">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="0" type="text"/>
                                                    <div className="dec qtybutton">-</div>
                                                    <div className="inc qtybutton">+</div>
                                                    <div className="dec qtybutton"><i className="fa fa-minus"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-plus"></i></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pro-subtotal"><span>$550.00</span></td>
                                        <td className="pro-remove"><a href="#"><i className="ion-trash-b"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/product/small-size/3.jpg" alt="Product" /></a></td>
                                        <td className="pro-title"><a href="#">Product dummy title <br/> s</a></td>
                                        <td className="pro-price"><span>$295.00</span></td>
                                        <td className="pro-quantity">
                                            <div className="quantity">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="0" type="text"/>
                                                    <div className="dec qtybutton">-</div>
                                                    <div className="inc qtybutton">+</div>
                                                    <div className="dec qtybutton"><i className="fa fa-minus"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-plus"></i></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pro-subtotal"><span>$295.00</span></td>
                                        <td className="pro-remove"><a href="#"><i className="ion-trash-b"></i></a></td>
                                    </tr>
                                    <tr>
                                        <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/images/product/small-size/4.jpg" alt="Product" /></a></td>
                                        <td className="pro-title"><a href="#">Dummy Title</a></td>
                                        <td className="pro-price"><span>$110.00</span></td>
                                        <td className="pro-quantity">
                                            <div className="quantity">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="2" type="text"/>
                                                    <div className="dec qtybutton">-</div>
                                                    <div className="inc qtybutton">+</div>
                                                    <div className="dec qtybutton"><i className="fa fa-minus"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-plus"></i></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="pro-subtotal"><span>$110.00</span></td>
                                        <td className="pro-remove"><a href="#"><i className="ion-trash-b"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- Cart Update Option --> */}
                        <div className="cart-update-option d-block d-md-flex justify-content-between">
                            <div className="apply-coupon-wrapper">
                                <form action="#" method="post" className=" d-block d-md-flex">
                                    <input type="text" placeholder="Enter Your Coupon Code" required />
                                    <button className="btn obrien-button primary-btn">Apply Coupon</button>
                                </form>
                            </div>
                            <div className="cart-update mt-sm-16">
                                <a href="#" className="btn obrien-button primary-btn">Update Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 ml-auto">
                        {/* <!-- Cart Calculation Area --> */}
                        <div className="cart-calculator-wrapper">
                            <div className="cart-calculate-items">
                                <h3>Cart Totals</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tr>
                                            <td>Sub Total</td>
                                            <td>$230</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>$70</td>
                                        </tr>
                                        <tr className="total">
                                            <td>Total</td>
                                            <td className="total-amount">$300</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <a  className="btn obrien-button primary-btn d-block">
                                <Link to={'/checkout'}>Proceed To Checkout</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- cart main wrapper end --> */}
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
