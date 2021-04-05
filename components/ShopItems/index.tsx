import ShopItem from '@components/ShopItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cartItemInterface } from 'types/types';
import { ShopItemsContainer } from './styles';

const ShopItems: React.FC = () => {
	const [cartItems, setCartItems] = useState([] as cartItemInterface[]);
	const [shopItems, setShopItems] = useState<cartItemInterface[]>();
	const [error, setError] = useState(false);

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

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const fetchItems = async () => {
			try {
				const res = await axios.get('http://localhost:3333/itemslist', {
					cancelToken: source.token,
				});
				setShopItems(res.data.items);
				setError(false);
			} catch (err) {
				console.log(err);
				setError(true);
			}
		};
		fetchItems();
		return () => source.cancel();
	}, []);

	return (
		<ShopItemsContainer>
			{shopItems?.map((item) => (
				<ShopItem key={item.id} item={item} handleAddToCart={handleAddToCart} />
			))}
		</ShopItemsContainer>
	);
};

export default ShopItems;
