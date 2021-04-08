import CartItem from '@components/CartItem';
import { useCart } from 'context/CartContext';
import React from 'react';
import { cartItemInterface } from 'types/types';
import {
	CartItemsListContainer,
	CartPageContainer,
	MessageContainer,
	TotalPriceContainer,
} from './styles';

const calculateTotal = (items: cartItemInterface[]) =>
	items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

const CartPage: React.FC = () => {
	const {
		cartItems,
		handleRemoveFromCart,
		getTotalItems,
		handleAddToCart,
	} = useCart();

	console.log(cartItems);
	return (
		<CartPageContainer>
			{cartItems.length !== 0 ? (
				<CartItemsListContainer>
					{' '}
					{cartItems.map((item) => {
						return (
							<CartItem
								key={item.id}
								item={item}
								handleRemoveFromCart={handleRemoveFromCart}
								handleAddToCart={handleAddToCart}
							/>
						);
					})}
					<TotalPriceContainer>
						<div>
							<h3>Total:</h3>
							{calculateTotal(cartItems).toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</div>
					</TotalPriceContainer>
				</CartItemsListContainer>
			) : (
				<MessageContainer>0 items in cart...</MessageContainer>
			)}
		</CartPageContainer>
	);
};

export default CartPage;
