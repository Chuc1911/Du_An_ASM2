import React, { useEffect, useReducer } from 'react';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import { Link } from 'react-router-dom';


// reducers/cartReducer.ts

export interface CartItem {
	id: string;
	title: string;
	price: number;
	image_url: string;
	quantity: number;
}

type CartState = {
	items: CartItem[];
};

type CartAction =
	| { type: 'SET_CART'; items: CartItem[] }
	| { type: 'INCREASE'; id: string }
	| { type: 'DECREASE'; id: string }
	| { type: 'REMOVE'; id: string };

 const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case 'SET_CART':
			return { ...state, items: action.items };
		case 'INCREASE':
			return {
				...state,
				items: state.items.map(item =>
					item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
				),
			};
		case 'DECREASE':
			return {
				...state,
				items: state.items.map(item =>
					item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
				),
			};
		case 'REMOVE':
			return {
				...state,
				items: state.items.filter(item => item.id !== action.id),
			};
		default:
			return state;
	}
};


export default function Cart() {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    useEffect(() => {
        const cartData = sessionStorage.getItem('cart');
        if (cartData) {
            const items: CartItem[] = JSON.parse(cartData);
            dispatch({ type: 'SET_CART', items });
        }
    }, []);

 // Cập nhật dữ liệu giỏ hàng vào sessionStorage khi state.items thay đổi
 useEffect(() => {
    // Chỉ cập nhật khi items không rỗng
    if (state.items.length > 0) {
      sessionStorage.setItem('cart', JSON.stringify(state.items));
    } else {
      // Nếu giỏ hàng rỗng, bạn có thể xóa dữ liệu khỏi sessionStorage
      sessionStorage.removeItem('cart');
    }
  }, [state.items]); // Chạy mỗi khi state.items thay đổi
  
    const handleIncrease = (id: string) => {
        dispatch({ type: 'INCREASE', id });
    };

    const handleDecrease = (id: string) => {
        dispatch({ type: 'DECREASE', id });
    };

    const handleRemove = (id: string) => {
       if (window.confirm('bạn có chắc xóa sản phẩm này')) {
        dispatch({ type: 'REMOVE', id });
       }
    };

    return (
        <div>
            <Header />
            <div className="breadcrumbs-area position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="breadcrumb-content position-relative section-content">
                                <h3 className="title-3">Shopping Cart</h3>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li>Cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-wrapper mt-no-text mb-no-text">
                <div className="container container-default-2 custom-area">
                    <div className="row">
                        <div className="col-lg-12">
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
                                        {state.items.map(item => (
                                            <tr key={item.id}>
                                                <td className="pro-thumbnail">
                                                    <a href="#"><img className="img-fluid" src={item.image_url} alt="Product" /></a>
                                                </td>
                                                <td className="pro-title">
                                                    <a href="#">{item.title}</a>
                                                </td>
                                                <td className="pro-price"><span>${item.price}</span></td>
                                                <td className="pro-quantity">
                                                    <div className="quantity">
                                                        <div className="cart-plus-minus">
                                                            <input className="cart-plus-minus-box" value={item.quantity} type="text" readOnly />
                                                            <div className="dec qtybutton" onClick={() => handleDecrease(item.id)}>-</div>
                                                            <div className="inc qtybutton" onClick={() => handleIncrease(item.id)}>+</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="pro-subtotal"><span>${(item.price * item.quantity).toFixed(2)}</span></td>
                                                <td className="pro-remove">
                                                    <a href="#" onClick={() => handleRemove(item.id)}><i className="ion-trash-b"></i></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-update-option d-block d-md-flex justify-content-between">
                                <div className="apply-coupon-wrapper">
                                    <form action="#" method="post" className="d-block d-md-flex">
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
                            <div className="cart-calculator-wrapper">
                                <div className="cart-calculate-items">
                                    <h3>Cart Totals</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tr>
                                                <td>Sub Total</td>
                                                <td>${state.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>$70</td>
                                            </tr>
                                            <tr className="total">
                                                <td>Total</td>
                                                <td className="total-amount">
                                                    ${(
                                                        state.items.reduce((total, item) => total + (item.price * item.quantity), 0) + 70
                                                    ).toFixed(2)}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <a className="btn obrien-button primary-btn d-block">
                                    <Link to="/checkout">Proceed To Checkout</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
