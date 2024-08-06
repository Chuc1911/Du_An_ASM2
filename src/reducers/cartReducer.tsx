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

export const cartReducer = (state: CartState, action: CartAction): CartState => {
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
