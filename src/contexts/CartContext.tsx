import Instance from "../api";
import { Iproduct } from "../interface/Iproduct";
import cartReducer from "../reducers/cartReducer";
import React, { createContext, useReducer, ReactNode } from "react";

export type CartContextType = {
	state: {
		products: { product: Iproduct; quantity: number }[];
		totalPrice: number;
	};
	dispatch: React.Dispatch<any>;
	addToCart: (product: Iproduct, quantity: number) => void;
	getCart: () => void;
	checkout: () => void;
	removeFromCart: (productId: string) => void;
	totalQuantity: number;
};

const initialState = {
	products: [],
	totalPrice: 0,
};

const CartContext = createContext({} as CartContextType);

const CartProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	const totalQuantity = state.products.reduce((total, item) => total + item.quantity, 0);
	const addToCart = async (product: Iproduct, quantity: number) => {
		const res = await Instance.post("/cart", { product, quantity });
		dispatch({ type: "ADD_TO_CART", payload: { product: res.data.product, quantity } });
	};
	const getCart = async () => {
		const res = await Instance.get("/cart");
		dispatch({ type: "SET_CART", payload: res.data });
	};
	const checkout = async () => {
		const res = await Instance.post("/cart/checkout");
		dispatch({ type: "CHECKOUT", payload: res.data });
	};

	const removeFromCart = async (productId: string) => {
		const res = await Instance.delete(`/cart/${productId}`);
		res.data.success && dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
	};

	return (
		<CartContext.Provider value={{ state, dispatch, addToCart, getCart, checkout, removeFromCart,totalQuantity }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
