import ShopItem from '@components/ShopItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cartItemInterface } from 'types/types';
import { ShopItemsContainer } from './styles';

const ShopItems: React.FC = () => {
	const [shopItems, setShopItems] = useState<cartItemInterface[]>();
	const [error, setError] = useState(false);

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
				<ShopItem key={item.id} item={item} />
			))}
		</ShopItemsContainer>
	);
};

export default ShopItems;
