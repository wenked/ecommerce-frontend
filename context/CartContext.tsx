import React, { createContext, useContext, useState } from 'react';
import { cartItemInterface } from 'types/types';

interface CartContextInterface {
	cartItems: cartItemInterface[];
	setCartItems: React.Dispatch<React.SetStateAction<cartItemInterface[]>>;
	handleAddToCart: (item: cartItemInterface) => void;
	handleRemoveFromCart: (id: number) => void;
	getTotalItems: (items: cartItemInterface[]) => number;
}

const CartContext = createContext({} as CartContextInterface);

export const CartProvider: React.FC = ({ children }) => {
	const [cartItems, setCartItems] = useState([] as cartItemInterface[]);

	const getTotalItems = (items: cartItemInterface[]) =>
		items.reduce((acc: number, item) => acc + item.amount, 0);

	const handleAddToCart = (clickedItem: cartItemInterface) => {
		setCartItems((prev) => {
			// 1. Is the item already added in the cart?
			const isItemInCart = prev.find((item) => item.id === clickedItem.id);
			if (isItemInCart) {
				return prev.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}
			// First time the item is added
			return [...prev, { ...clickedItem, amount: 1 }];
		});
	};
	const handleRemoveFromCart = (id: number) => {
		setCartItems((prev) =>
			prev.reduce((acc, item) => {
				if (item.id === id) {
					if (item.amount === 1) return acc;
					return [...acc, { ...item, amount: item.amount - 1 }];
				} else {
					return [...acc, item];
				}
			}, [] as cartItemInterface[])
		);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				setCartItems,
				handleAddToCart,
				handleRemoveFromCart,
				getTotalItems,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	return context;
};
