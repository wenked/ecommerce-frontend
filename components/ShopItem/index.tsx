import { Button } from '@styles/global';
import { useCart } from 'context/CartContext';
import React, { useState } from 'react';
import { cartItemInterface } from 'types/types';
import {
	ShopItemContainer,
	ShopItemDataContainer,
	ShopItemImg,
} from './styles';

interface ShopItemProps {
	item: cartItemInterface;
}

const ShopItem: React.FC<ShopItemProps> = ({ item }) => {
	const { handleAddToCart } = useCart();

	return (
		<ShopItemContainer>
			<ShopItemImg src={item.imgUrl} alt={item.name} />
			<ShopItemDataContainer>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
				<h2>
					{item.price.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</h2>
			</ShopItemDataContainer>
			<Button primary onClick={() => handleAddToCart(item)}>
				Add to cart
			</Button>
		</ShopItemContainer>
	);
};

export default ShopItem;
