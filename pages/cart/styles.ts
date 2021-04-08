import styled from 'styled-components';

export const CartPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;
`;

export const CartItemsListContainer = styled.div`
	width: 100%;
	max-width: 900px;
`;

export const MessageContainer = styled.div`
	font-size: 20px;
	font-weight: 600;
	color: #006989;
`;

export const TotalPriceContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	font-size: 22px;
	color: #006989;
	font-family: 'Roboto', sans-serif;
	font-weight: 600;
	max-width: 900px;

	.items {
		display: flex;
		flex-direction: column;
	}
`;
