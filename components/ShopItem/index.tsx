import { Button } from '@styles/global';
import React, { useState } from 'react';
import { cartItemInterface } from 'types/types';
import {
	ShopItemContainer,
	ShopItemDataContainer,
	ShopItemImg,
} from './styles';

interface ShopItemProps {
	item: cartItemInterface;
	handleAddToCart: (item: cartItemInterface) => void;
}

const ShopItem: React.FC<ShopItemProps> = ({ item, handleAddToCart }) => {
	return (
		<ShopItemContainer>
			<ShopItemImg src={item.imgUrl} alt={item.name} />
			<ShopItemDataContainer>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
				<h3>
					{item.price.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</h3>
			</ShopItemDataContainer>
			<Button primary>Add to cart</Button>
		</ShopItemContainer>
	);
};

export default ShopItem;
