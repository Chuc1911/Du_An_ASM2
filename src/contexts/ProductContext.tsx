import React, { createContext, useEffect, useReducer } from "react";

import productReducer from "../reducers/productReducer";
import { useNavigate } from "react-router-dom";
import Instance from "../api";
import { Iproduct } from "../interface/Iproduct";

export type ProductContextType = {
	state: { products: Iproduct[] };
	dispatch: React.Dispatch<any>;
	handleProduct: (product: Iproduct) => void;
	handleRemove: (id: string) => void;
};

export const ProductContext = createContext({} as ProductContextType);

type Props = {
	children: React.ReactNode;
};

const ProductContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(productReducer, { products: [] });
	const nav = useNavigate();

	useEffect(() => {
		(async () => {
			const { data } = await Instance.get("/products");
			console.log(data);
			dispatch({ type: "SET_PRODUCTS", payload: data });
		})();
	}, []);

	const handleProduct = async (product: Iproduct) => {
		try {
			if (product._id) {
				const { data } = await Instance.patch(`/products/${product._id}`, product);
				dispatch({ type: "UPDATE_PRODUCT", payload: data });
			} else {
				const { data } = await Instance.post("/products", product);
				dispatch({ type: "ADD_PRODUCT", payload: data });
			}
			nav("/admin");
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemove = async (id:number|string) => {
		try {
			await Instance.delete(`/products/${id}`);
			dispatch({ type: "DELETE_PRODUCT", payload: id });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ProductContext.Provider value={{ state, dispatch, handleProduct, handleRemove }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
