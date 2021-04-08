import React from 'react';
import { cartItemInterface } from 'types/types';
import {
	CartItemButton,
	CartItemContainer,
	CartItemButtonsContainer,
	ItemDetailContainer,
	ItemGroupInfo,
	Buttons,
} from './styles';

interface cartItemProps {
	item: cartItemInterface;
	handleRemoveFromCart: (id: number) => void;
	handleAddToCart: (item: cartItemInterface) => void;
}

const CartItem: React.FC<cartItemProps> = ({
	item,
	handleAddToCart,
	handleRemoveFromCart,
}) => {
	return (
		<CartItemContainer>
			<ItemDetailContainer>
				<img src={item.imgUrl} alt={item.name} />
				<h3>{item.name}</h3>
			</ItemDetailContainer>
			<CartItemButtonsContainer>
				<ItemGroupInfo>
					<div>
						<h3>
							{(item.price * item.amount).toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</h3>
					</div>
					<Buttons>
						<CartItemButton onClick={() => handleRemoveFromCart(item.id)}>
							-
						</CartItemButton>
						<h3>{item.amount}</h3>
						<CartItemButton onClick={() => handleAddToCart(item)}>
							+
						</CartItemButton>
					</Buttons>
				</ItemGroupInfo>
			</CartItemButtonsContainer>
		</CartItemContainer>
	);
};

export default CartItem;
