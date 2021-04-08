import CartItem from '@components/CartItem';
import axios from 'axios';
import { useCart } from 'context/CartContext';
import React from 'react';
import { cartItemInterface } from 'types/types';
import { userIsAuth } from 'utils/userIsAuth';
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
	userIsAuth();
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
						<div className='items'>
							<h3>Total:</h3>
							{calculateTotal(cartItems).toLocaleString('pt-BR', {
								style: 'currency',
								currency: 'BRL',
							})}
						</div>
						<button
							onClick={async () => {
								axios.defaults.withCredentials = true;
								if (cartItems.length !== 0) {
									const res = await axios.post(
										'http://localhost:3333/removeitem',
										{
											cartItems,
										}
									);
									console.log(res.data);
								}
							}}>
							comprar
						</button>
					</TotalPriceContainer>
				</CartItemsListContainer>
			) : (
				<MessageContainer>0 items in cart...</MessageContainer>
			)}
		</CartPageContainer>
	);
};

export default CartPage;
