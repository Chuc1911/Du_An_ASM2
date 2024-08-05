import { Iproduct } from "../interface/Iproduct";

type Action = {
	type: string;
	payload: any;
};
type State = {
	products: Iproduct[];
};
const productReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case "UPDATE_PRODUCT":
			return {
				...state,
				products: state.products.map((product: Iproduct) =>
					product.id === action.payload._id ? action.payload : product
				),
			};
		case "DELETE_PRODUCT":
			return {
				...state,
				products: state.products.filter((product: Iproduct) => product.id !== action.payload),
			};

		default:
			return state;
	}
};

export default productReducer;
